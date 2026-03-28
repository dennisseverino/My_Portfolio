import { FaCode, FaLightbulb, FaPalette } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--contrast-bg)] px-10 py-20 text-[var(--contrast-text)] md:px-20"
    >
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm tracking-widest text-[var(--accent)]">
            - ABOUT ME
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Turning Ideas <br />
            Into <span className="text-[var(--accent)]">Reality</span>
          </h2>

          <div className="mb-6 h-[2px] w-16 bg-[var(--accent)]"></div>

          <p className="mb-10 max-w-md leading-relaxed text-[var(--contrast-muted)]">
            I&apos;m a fresh graduate full stack developer with a solid
            foundation in front-end and back-end technologies. Eager to apply
            my skills to real-world projects, continuously learn new
            technologies, and build efficient, user-friendly web applications.
          </p>

          <div>
            <h3 className="text-4xl font-bold text-[var(--accent)]">3</h3>
            <p className="text-[var(--contrast-muted)]">Projects Completed</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-[var(--contrast-border)] p-6 transition-colors duration-300 hover:border-[var(--accent)]">
            <div className="mb-3 flex items-center gap-4">
              <FaCode className="text-2xl text-[var(--accent)]" />
              <h3 className="text-lg font-semibold">Development</h3>
            </div>
            <p className="text-sm text-[var(--contrast-muted)]">
              Building robust web applications with React, TypeScript, and
              modern frameworks. Clean code, scalable architecture.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--contrast-border)] p-6 transition-colors duration-300 hover:border-[var(--accent)]">
            <div className="mb-3 flex items-center gap-4">
              <FaPalette className="text-2xl text-[var(--accent)]" />
              <h3 className="text-lg font-semibold">Design</h3>
            </div>
            <p className="text-sm text-[var(--contrast-muted)]">
              Creating intuitive interfaces with a focus on user experience.
              Minimalist aesthetics, maximum impact.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--contrast-border)] p-6 transition-colors duration-300 hover:border-[var(--accent)]">
            <div className="mb-3 flex items-center gap-4">
              <FaLightbulb className="text-2xl text-[var(--accent)]" />
              <h3 className="text-lg font-semibold">Problem Solving</h3>
            </div>
            <p className="text-sm text-[var(--contrast-muted)]">
              Hands-on experience building real-world applications, including
              attendance systems and role-based dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
