import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaPalette } from "react-icons/fa";

const cards = [
  {
    icon: FaCode,
    title: "Development",
    description:
      "Building robust web applications with React, TypeScript, and scalable backend flows.",
  },
  {
    icon: FaPalette,
    title: "Design",
    description:
      "Designing interfaces that feel minimal, premium, and easy to navigate.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solving",
    description:
      "Turning vague product ideas into practical systems with clear user journeys.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-shell bg-[var(--contrast-bg)] px-4 py-24 text-[var(--contrast-text)] md:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker">About Me</p>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
            Turning ideas into interfaces that look clean and work hard.
          </h2>
          <div className="section-rule mt-6"></div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--contrast-muted)]">
            I&apos;m a full stack & Mobile developer with a strong base in
            frontend and backend development. I care about structure, motion,
            and usability, and I like building products that feel polished from
            the first interaction.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-3xl px-6 py-5">
              <p className="text-sm text-[var(--contrast-muted)]">
                Projects Completed
              </p>
              <p className="mt-3 text-5xl font-semibold text-[var(--accent)]">
                3+
              </p>
            </div>
            <div className="glass-panel rounded-3xl px-6 py-5">
              <p className="text-sm text-[var(--contrast-muted)]">
                Preferred Stack
              </p>
              <p className="mt-3 text-2xl font-semibold">React, PHP, Mobile</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-[1.75rem] p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-xl text-[var(--accent)]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--contrast-text)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-[var(--contrast-muted)]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
