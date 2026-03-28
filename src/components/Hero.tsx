import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

type HeroProps = {
  theme: "light" | "dark";
};

const introCards = [
  { label: "Focus", value: "Full stack systems" },
  { label: "Style", value: "Clean, modern UI" },
  { label: "Based", value: "Philippines" },
];

export default function Hero({ theme }: HeroProps) {
  const heroImage = theme === "dark" ? "/profile-dark.JPG" : "/profile.png";

  return (
    <section
      id="home"
      className="section-shell relative flex min-h-screen items-center px-4 pb-20 pt-32 md:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg-strong)] px-4 py-2 text-sm text-[var(--page-muted)]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></span>
            Available for freelance and full-time work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.95] text-[var(--page-text)] md:text-7xl xl:text-[5.5rem]"
          >
            Building digital products that feel sharp, fast, and deliberate.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="mt-6 max-w-2xl"
          >
            <p className="text-lg leading-relaxed text-[var(--page-muted)] md:text-xl">
              Hi!, I&apos;m Dennis B. Severino IV, a{" "}
              <span className="font-semibold text-[var(--accent)]">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1800,
                    "UI-focused Builder",
                    1800,
                    "Problem Solver",
                    1800,
                    "Mobile Developer",
                    1800,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </span>{" "}
              creating modern interfaces and robust application flows that help
              businesses move with clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="projects" smooth duration={500} offset={-90}>
              <button className="group flex items-center justify-center gap-3 rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-soft)] hover:bg-[var(--button-primary-hover)]">
                View Projects
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>

            <Link to="contact" smooth duration={500} offset={-90}>
              <button className="rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-6 py-3 text-sm font-semibold text-[var(--page-text)] hover:border-[var(--accent)] hover:text-[var(--accent)]">
                Start a conversation
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.7 }}
            className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex flex-wrap gap-3">
              {introCards.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel rounded-2xl px-4 py-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--page-muted-soft)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--page-text)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-[var(--page-text)]">
              <a
                href="https://github.com/dennisseverino"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel flex h-12 w-12 items-center justify-center rounded-full hover:-translate-y-1 hover:text-[var(--accent)]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dennis-iv-severino-519497320/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel flex h-12 w-12 items-center justify-center rounded-full hover:-translate-y-1 hover:text-[var(--accent)]"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="relative"
        >
          <div className="hero-orbit absolute -left-8 top-12 h-32 w-32 rounded-full bg-[var(--spotlight-a)] blur-3xl"></div>
          <div className="hero-orbit-delayed absolute -right-2 bottom-8 h-40 w-40 rounded-full bg-[var(--spotlight-b)] blur-3xl"></div>

          <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-5 md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--spotlight-a),transparent_38%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]"></div>

            <div className="relative rounded-[1.6rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-4">
              <img
                key={heroImage}
                src={heroImage}
                alt="Dennis"
                className="h-[420px] w-full rounded-[1.25rem] object-cover object-top shadow-[var(--shadow-soft)] md:h-[560px]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="glass-panel absolute bottom-8 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between rounded-2xl px-5 py-4"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--page-muted-soft)]">
                  Name
                </p>
                <p className="mt-1 text-lg font-semibold text-[var(--page-text)]">
                  Dennis B. Severino IV
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--page-muted-soft)]">
                  Specialty
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--accent)]">
                  Frontend + Backend
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
