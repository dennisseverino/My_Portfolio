import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--contrast-bg)] px-10 py-16 text-[var(--contrast-text)] md:px-20">
      <div className="grid items-start gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-xl font-semibold">Dennis B. Severino IV</h3>
          <p className="text-[var(--contrast-muted)]">Full Stack Engineer</p>
        </div>

        <div>
          <p className="mb-4 text-sm tracking-widest text-[var(--contrast-muted)]">
            FOLLOW
          </p>

          <div className="flex gap-4">
            <div className="cursor-pointer rounded border border-[var(--contrast-border)] p-3 transition hover:border-[var(--contrast-text)]">
              <FaFacebookF />
            </div>
            <div className="cursor-pointer rounded border border-[var(--contrast-border)] p-3 transition hover:border-[var(--contrast-text)]">
              <FaGithub />
            </div>
            <div className="cursor-pointer rounded border border-[var(--contrast-border)] p-3 transition hover:border-[var(--contrast-text)]">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[var(--contrast-muted)]">Contact me</p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded border border-[var(--contrast-border)] p-2">
                <FaEnvelope />
              </div>
              <p className="text-sm text-[var(--contrast-muted)]">
                dennissv.severino@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded border border-[var(--contrast-border)] p-2">
                <FaPhone />
              </div>
              <p className="text-sm text-[var(--contrast-muted)]">
                +63 962-992-5647
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 border-t border-[var(--contrast-border)]"></div>

      <p className="text-sm text-[var(--contrast-muted)]">
        © 2026 Dennis B. Severino IV. All rights reserved.
      </p>
    </footer>
  );
}
