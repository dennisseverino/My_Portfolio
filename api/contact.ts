import { createSign } from "node:crypto";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

type ContactRow = [string, string, string, string, string, string, string];

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function jsonResponse(body: Record<string, string>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function base64UrlEncode(value: string | Buffer) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

async function getAccessToken(clientEmail: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };

  const unsignedToken = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(payload))}`;

  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();

  const signature = signer.sign(privateKey);
  const assertion = `${unsignedToken}.${base64UrlEncode(signature)}`;

  const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text();
    throw new Error(`Google auth failed: ${errorBody}`);
  }

  const tokenData = (await tokenResponse.json()) as { access_token?: string };

  if (!tokenData.access_token) {
    throw new Error("Google auth succeeded without returning an access token.");
  }

  return tokenData.access_token;
}

async function appendInquiryRow(
  accessToken: string,
  spreadsheetId: string,
  range: string,
  row: ContactRow,
) {
  const appendUrl = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append`,
  );

  appendUrl.searchParams.set("valueInputOption", "USER_ENTERED");
  appendUrl.searchParams.set("insertDataOption", "INSERT_ROWS");

  const appendResponse = await fetch(appendUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      majorDimension: "ROWS",
      values: [row],
    }),
  });

  if (!appendResponse.ok) {
    const errorBody = await appendResponse.text();
    throw new Error(`Google Sheets append failed: ${errorBody}`);
  }
}

function buildRow(payload: Required<Omit<ContactPayload, "website">>, request: Request) {
  return [
    new Date().toISOString(),
    payload.name,
    payload.email,
    payload.subject,
    payload.message,
    request.headers.get("x-forwarded-for") ?? "unknown",
    request.headers.get("user-agent") ?? "unknown",
  ] as ContactRow;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (normalizeText(payload.website)) {
      return jsonResponse({
        message: "Your inquiry was sent. I will get back to you soon.",
      });
    }

    const name = normalizeText(payload.name);
    const email = normalizeText(payload.email);
    const subject = normalizeText(payload.subject);
    const message = normalizeText(payload.message);

    if (!name || !email || !subject || !message) {
      return jsonResponse(
        { message: "Please complete all form fields before sending." },
        400,
      );
    }

    const clientEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const privateKey = getRequiredEnv("GOOGLE_PRIVATE_KEY").replace(
      /\\n/g,
      "\n",
    );
    const spreadsheetId = getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
    const range = process.env.GOOGLE_SHEETS_RANGE || "Inquiries!A:G";

    const accessToken = await getAccessToken(clientEmail, privateKey);

    await appendInquiryRow(
      accessToken,
      spreadsheetId,
      range,
      buildRow({ name, email, subject, message }, request),
    );

    return jsonResponse({
      message: "Your inquiry was sent. I will get back to you soon.",
    });
  } catch (error) {
    console.error(error);

    return jsonResponse(
      {
        message:
          "The form is live, but Google Sheets is not configured correctly yet.",
      },
      500,
    );
  }
}
