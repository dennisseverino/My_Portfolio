type Project = {
  id: string;
  type: string;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "01",
    type: "Web Application",
    title: "Web Exhibition",
    description:
      "Designing a static website to showcase the 2023 MassKara Festival, capturing the vibrant essence of Bacolod City.",
    image: "/1.svg",
  },
  {
    id: "02",
    type: "Web/Mobile Application",
    title: "E-Commerce Platform",
    description:
      "ProDuce is a web and mobile e-commerce platform that enables public market vendors to sell vegetables online while reducing waste.",
    image: "/2.svg",
  },
  {
    id: "03",
    type: "System Application",
    title: "HRIS Attendance System",
    description:
      "A role-based employee management system designed to streamline attendance, scheduling, and access control.",
    image: "/3.svg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#353535] text-white px-10 md:px-20 py-20">

      {/* HEADER */}
      <div className="mb-16">
        <p className="text-[#82FFF3] tracking-widest text-sm mb-2">
          - PORTFOLIO
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          My Experiences
        </h2>

        <div className="w-16 h-[2px] bg-[#82FFF3] mt-4"></div>
      </div>

      {/* PROJECTS */}
      <div className="space-y-24">

        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* IMAGE */}
              <div className={isReverse ? "md:order-2" : ""}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded"
                />
              </div>

              {/* TEXT */}
              <div className={isReverse ? "md:order-1" : ""}>
                <h3 className="text-5xl font-bold text-gray-500 mb-2">
                  {project.id}
                </h3>

                <p className="text-gray-400 text-sm mb-2">
                  {project.type}
                </p>

                <h4 className="text-2xl font-semibold text-[#82FFF3] mb-4">
                  {project.title}
                </h4>

                <p className="text-gray-300 mb-4 max-w-md">
                  {project.description}
                </p>

                <button className="text-[#82FFF3] text-sm">
                  View Site →
                </button>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}