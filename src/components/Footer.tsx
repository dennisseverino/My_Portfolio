import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const socialItems = [
  {
    href: "mailto:dennissv.severino@gmail.com",
    icon: FaEnvelope,
  },
  {
    href: "https://github.com/dennisseverino",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/dennis-iv-severino-519497320/",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--contrast-bg)] px-4 pb-12 pt-8 text-[var(--contrast-text)] md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65 }}
        className="glass-panel mx-auto max-w-7xl rounded-[2rem] px-6 py-8 md:px-8"
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="section-kicker">Dennis Severino</p>
            <h3 className="mt-4 text-2xl font-semibold">
              Full stack developer with a product-focused eye.
            </h3>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--contrast-muted)]">
              Follow
            </p>
            <div className="mt-5 flex gap-3">
              {socialItems.map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--contrast-border)] text-[var(--contrast-text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[var(--contrast-muted)]">
              <FaEnvelope className="text-[var(--accent)]" />
              <span>dennissv.severino@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-[var(--contrast-muted)]">
              <FaPhone className="text-[var(--accent)]" />
              <span>+63 962-992-5647</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--contrast-border)] pt-6 text-sm text-[var(--contrast-muted)]">
          Copyright 2026 Dennis B. Severino IV. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
