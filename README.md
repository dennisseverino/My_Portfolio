# My Portfolio

## Contact Form to Google Sheets

This project includes a Vercel serverless function at `api/contact.ts` that appends contact form inquiries to a private Google Sheet.

## Required Setup

1. Create a Google Cloud project and enable the Google Sheets API.
2. Create a service account and generate a JSON key.
3. Create or open your Google Sheet.
4. Share the sheet with the service account email as an editor.
5. Add these environment variables in Vercel.

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your_google_sheet_id
GOOGLE_SHEETS_RANGE=Inquiries!A:G
```

## Suggested Sheet Columns

Set row 1 of your sheet to:

```txt
Timestamp | Name | Email | Subject | Message | IP Address | User Agent
```

## Local Testing

The form posts to `/api/contact` in production on Vercel.

If you want to test the serverless function locally, use `vercel dev` instead of only `npm run dev`, because the Vite dev server does not run Vercel API routes by itself.
