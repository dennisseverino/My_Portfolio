import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCodeBranch,
  FaMobileAlt,
  FaRobot,
  FaShoppingCart,
  FaLayerGroup,
  FaVial,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaLayerGroup,
    title: "Web and admin system",
    description:
      "Worked on platform features for web users and admin workflows, keeping interfaces clear and connected to real business operations.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile development",
    description:
      "Helped build mobile app experiences that extended the system beyond the browser and supported on-the-go user flows.",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce and payments",
    description:
      "Contributed to commerce features, transaction flows, and payment-related functionality across the product.",
  },
  {
    icon: FaCodeBranch,
    title: "Full stack delivery",
    description:
      "Connected frontend, backend, database, and integration work into maintainable updates for a larger system.",
  },
  {
    icon: FaRobot,
    title: "AI-assisted engineering",
    description:
      "Used AI CLI workflows, MCP, custom AI skills, and automation to speed up debugging, implementation, and project documentation.",
  },
  {
    icon: FaVial,
    title: "Testing and integration quality",
    description:
      "Worked with test integrations, unit testing, and repeatable commands such as Makefiles to make development easier to verify.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell px-4 py-24 text-[var(--page-text)] md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Working to build a multi-platform business system.
            </h2>
            <div className="section-rule mt-6"></div>
          </div>

          <p className="max-w-xl leading-relaxed text-[var(--page-muted)]">
            At Lanky Groups, I worked across a super system that included web,
            mobile, admin tools, payment flows, and an e-commerce platform,
            while using AI-assisted workflows, testing, and automation to ship
            with more confidence.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-panel-strong overflow-hidden rounded-[2rem] p-7 md:p-9"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl text-[var(--accent)]">
                <FaBriefcase />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--page-muted-soft)]">
                  Lanky Groups
                </p>
                <h3 className="mt-3 text-3xl font-semibold">
                  Full Stack Developer
                </h3>
                <p className="mt-3 text-lg font-medium text-[var(--accent)]">
                  Over a year of professional experience
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-[var(--page-muted)]">
              I contributed across the stack, balancing polished UI work,
              mobile development, backend functionality, data-driven features,
              payment-related flows, testing, and automation for real software
              used across multiple roles.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Web", "Mobile", "Admin", "Payments", "E-commerce", "Backend"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-4"
                >
                  <p className="text-sm font-semibold text-[var(--page-text)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {["AI CLI", "MCP", "Unit tests", "Test integrations", "Makefile", "AI skills"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--page-border-soft)] bg-[var(--accent-soft)] px-4 py-4"
                >
                  <p className="text-sm font-semibold text-[var(--page-text)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel rounded-[1.5rem] p-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-xl text-[var(--accent)]">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-[var(--page-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
