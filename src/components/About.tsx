import { FaCode, FaPalette, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-[#353535] text-white px-10 md:px-20 py-20">

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-[#82FFF3] tracking-widest text-sm mb-4">
            - ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Turning Ideas <br />
            Into <span className="text-[#82FFF3]">Reality</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#82FFF3] mb-6"></div>

          <p className="text-gray-300 max-w-md leading-relaxed mb-10">
            I’m a fresh graduate full stack developer with a solid foundation
            in front-end and back-end technologies. Eager to apply my skills to
            real-world projects, continuously learn new technologies, and build
            efficient, user-friendly web applications.
          </p>

          {/* PROJECT COUNT */}
          <div>
            <h3 className="text-4xl font-bold text-[#82FFF3]">3</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
        </div>

        {/* RIGHT SIDE (CARDS) */}
        <div className="space-y-6 ">

          {/* CARD 1 */}
          <div className="border border-gray-500 rounded-lg p-6 hover:border-[#82FFF3] transition-colors duration-300">
            <div className="flex items-center gap-4 mb-3">
              <FaCode className="text-[#82FFF3] text-2xl" />
              <h3 className="text-lg font-semibold">Development</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Building robust web applications with React, TypeScript, and modern frameworks. Clean code, scalable architecture.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border border-gray-500 rounded-lg p-6 hover:border-[#82FFF3] transition-colors duration-300">
            <div className="flex items-center gap-4 mb-3">
              <FaPalette className="text-[#82FFF3] text-2xl" />
              <h3 className="text-lg font-semibold">Design</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Creating intuitive interfaces with a focus on user experience. Minimalist aesthetics, maximum impact.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="border border-gray-500 rounded-lg p-6 hover:border-[#82FFF3] transition-colors duration-300">
            <div className="flex items-center gap-4 mb-3">
              <FaLightbulb className="text-[#82FFF3] text-2xl" />
              <h3 className="text-lg font-semibold">Problem Solving</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Hands-on experience building real-world applications, including attendance systems and role-based dashboards.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}