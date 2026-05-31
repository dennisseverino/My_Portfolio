import { motion } from "framer-motion";
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import resumePath from "../resume/my resume.pdf";

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-shell px-4 py-24 text-[var(--page-text)] md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel-strong overflow-hidden rounded-[2rem] p-7 md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Resume</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                Want the formal version of my work?
              </h2>
              <div className="section-rule mt-6"></div>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--page-muted)]">
                Download my resume as a PDF for a quick overview of my skills,
                projects, education, and experience.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[var(--page-border-soft)] bg-[var(--card-bg)] p-6 md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl text-[var(--accent)]">
                  <FaFilePdf />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Dennis Severino Resume
                  </h3>
                  <p className="mt-2 leading-relaxed text-[var(--page-muted)]">
                    PDF format, ready for recruiters, hiring managers, and
                    collaborators.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={resumePath}
                  download
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-soft)] hover:bg-[var(--button-primary-hover)]"
                >
                  Download Resume
                  <FaDownload />
                </a>
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg-strong)] px-6 py-3 text-sm font-semibold text-[var(--page-text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  View PDF
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
