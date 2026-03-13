type SkillCategory = {
  number: string;
  title: string;
  skills: string[];
};

const skills: SkillCategory[] = [
  {
    number: "01",
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript"],
  },
  {
    number: "02",
    title: "Mobile",
    skills: ["Dart", "Flutter"],
  },
  {
    number: "03",
    title: "Backend",
    skills: ["PHP", "MySQL", "Firebase"],
  },
  {
    number: "04",
    title: "Design",
    skills: ["Figma", "Canva", "Prototyping", "Design Systems"],
  },
  {
    number: "05",
    title: "Tools",
    skills: ["Git", "VS Code", "Postman", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F5F4F0] px-10 md:px-20 py-20">

      {/* HEADER */}
      <div className="mb-12">
        <p className="text-gray-500 tracking-widest text-sm mb-2">
          - EXPERTISE
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#353535] mb-4">
          Skills & Tools
        </h2>

        <div className="w-16 h-[2px] bg-[#353535]"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

        {skills.map((category, index) => (
          <div key={index}>
            
            {/* TITLE */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#C0C0C0] font-bold">
                {category.number}
              </span>

              <h2 className="font-semibold text-[#353535] text-xl">
                {category.title}
              </h2>
            </div>

            {/* SKILLS */}
            <ul className="space-y-2 text-gray-600 text-base">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-3 h-3 border border-[#353535] inline-block"></span>
                  {skill}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}