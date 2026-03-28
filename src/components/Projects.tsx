import { Link } from "react-router-dom";

type Project = {
  id: string;
  type: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: "01",
    type: "Web Application",
    title: "Web Exhibition",
    description:
      "Designing a static website to showcase the 2023 MassKara Festival, capturing the vibrant essence of Bacolod City.",
    image: "/1.svg",
    link: "/masskaraWebsite/index.html",
  },
  {
    id: "02",
    type: "Web/Mobile Application",
    title: "E-Commerce Platform",
    description:
      "ProDuce is a web and mobile e-commerce platform that enables public market vendors to sell vegetables online while reducing waste.",
    image: "/2.svg",
    link: "/produce",
  },
  {
    id: "03",
    type: "System Application",
    title: "HRIS Attendance System",
    description:
      "A role-based employee management system designed to streamline attendance, scheduling, and access control.",
    image: "/3.svg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--contrast-bg)] px-10 py-20 text-[var(--contrast-text)] md:px-20"
    >
      <div className="mb-16">
        <p className="mb-2 text-sm tracking-widest text-[var(--accent)]">
          - PORTFOLIO
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">My Experiences</h2>

        <div className="mt-4 h-[2px] w-16 bg-[var(--accent)]"></div>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={project.id}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={isReverse ? "md:order-2" : ""}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded"
                />
              </div>

              <div className={isReverse ? "md:order-1" : ""}>
                <h3 className="mb-2 text-6xl font-bold text-[var(--contrast-muted)]">
                  {project.id}
                </h3>

                <p className="mb-2 text-medium text-[var(--contrast-muted)]">
                  {project.type}
                </p>

                <h4 className="mb-4 text-3xl font-semibold text-[var(--accent)]">
                  {project.title}
                </h4>

                <p className="mb-4 max-w-md text-[var(--contrast-muted)]">
                  {project.description}
                </p>

                {project.id === "02" && (
                  <Link
                    to="/produce"
                    className="text-sm text-[var(--accent)] hover:underline"
                  >
                    View More →
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
