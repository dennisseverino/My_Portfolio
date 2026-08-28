import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

type Project = {
  id: string;
  type: string;
  title: string;
  description: string;
  image: string;
  link: string;
  accessLabel?: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    id: "01",
    type: "Web / Mobile / Design Project",
    title: "ProDuce",
    description:
      "An E-Commerce Platform that connects public market vendors and customers through a streamlined buying flow designed to reduce waste and improve accessibility.",
    image: "/2.svg",
    link: "/produce",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Flutter",
      "Dart",
      "MySQL",
    ],
  },
  {
    id: "02",
    type: "HRIS attendance system",
    title: "iReply",
    description:
      "A role-based employee management system for attendance, scheduling, and controlled access across teams.",
    image: "/3.svg",
    link: "#",
    techStack: ["HTML", "CSS", "PHP", "React.js", "MySQL", "Vite", "Vercel"],
  },
  {
    id: "03",
    type: "Family Law Consultation Website",
    title: "BrightWater",
    description:
      "A compassionate family-law consultation website designed to help people navigating mental-health challenges find clear, supportive legal guidance.",
    image: "/4.png",
    link: "https://brightwater-one.vercel.app/",
    techStack: ["React 19", "JavaScript", "Vite", "Tailwind CSS 4"],
  },
  {
    id: "04",
    type: "Web & Mobile Application",
    title: "BABCS Accounting App",
    description:
      "A full-stack accounting, compliance, and client document-management platform for internal accounting teams, with a companion mobile app for secure document capture and offline uploads.",
    image: "/5.png",
    link: "#",
    accessLabel: "Private Internal System",
    techStack: [
      "React 19",
      "React Native",
      "Expo",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "05",
    type: "Restaurant Operations & POS System",
    title: "POS & Inventory System",
    description:
      "A full-stack restaurant management and POS web application combining sales processing, recipe-based inventory, purchasing, expense management, reporting, role-based access, and audit logging.",
    image: "/6.png",
    link: "#",
    accessLabel: "Personal System",
    techStack: [
      "React",
      "TypeScript",
      "Laravel 11",
      "PHP 8.2",
      "PostgreSQL",
      "Vite",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell bg-[var(--contrast-bg)] px-4 py-24 text-[var(--contrast-text)] md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="section-kicker">Portfolio</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold md:text-5xl">
              Selected work focused on usability, structure, and polish.
            </h2>
            <div className="section-rule mt-6"></div>
          </div>

          <p className="max-w-xl text-[var(--contrast-muted)]">
            These projects reflect how I approach product design and
            implementation: clear hierarchy, clean interaction, and practical
            system thinking.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-[2rem] p-6 md:p-8"
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--contrast-border)] bg-[var(--card-bg-strong)] p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--spotlight-a),transparent_40%)]"></div>
                    <motion.img
                      whileHover={{ scale: 1.04 }}
                      src={project.image}
                      alt={project.title}
                      className="relative w-full rounded-[1.2rem]"
                    />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                      {project.type}
                    </p>
                    <div className="mt-4 flex items-end gap-4">
                      <span className="text-5xl font-semibold text-[var(--contrast-muted)]">
                        {project.id}
                      </span>
                      <h3 className="text-3xl font-semibold md:text-4xl">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-6 max-w-xl leading-relaxed text-[var(--contrast-muted)]">
                      {project.description}
                    </p>

                    <div className="mt-7 max-w-xl rounded-[1.4rem] border border-[var(--contrast-border)] bg-[rgba(255,255,255,0.03)] p-5">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--contrast-muted)]">
                        Tech Used
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[var(--contrast-border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--contrast-text)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(project.link !== "#" || project.accessLabel) && (
                      <div className="mt-8">
                        {project.link !== "#" ? (
                          <a
                            href={project.link}
                            target={project.link.startsWith("http") ? "_blank" : "_self"}
                            rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                            className="inline-flex items-center gap-3 rounded-full border border-[var(--contrast-border)] px-5 py-3 text-sm font-semibold text-[var(--contrast-text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          >
                            Explore Project
                            <FaArrowRight />
                          </a>
                        ) : (
                          <span className="inline-flex items-center rounded-full border border-[var(--contrast-border)] px-5 py-3 text-sm font-semibold text-[var(--contrast-muted)]">
                            {project.accessLabel}
                          </span>
                        )}
                      </div>
                    )}
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
