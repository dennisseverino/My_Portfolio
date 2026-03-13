import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* your content */}
</motion.div>

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#F5F4F0] flex items-center px-10 md:px-20">
      
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#353535] mb-2">
            Dennis B. Severino IV
          </h1>

          <h2 className="text-lg text-gray-600 mb-6 tracking-wide">
            Full Stack Engineer
          </h2>

          <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
            I create beautiful, functional digital experiences that help
            businesses grow and users thrive. Specializing in modern web
            technologies and user-centered design.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-6">
            <button className="bg-[#353535] text-white px-5 py-2 rounded-md text-sm">
              View my work
            </button>

            <button className="border border-[#353535] px-5 py-2 rounded-md text-sm">
              Contact Me
            </button>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 text-xl text-[#353535]">
            <FaGithub className="cursor-pointer hover:opacity-70" />
            <FaLinkedin className="cursor-pointer hover:opacity-70" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          
          {/* IMAGE */}
          <img
            src="/profile.png" // put your image in public folder
            alt="Dennis"
            className="w-[300px] md:w-[350px] relative z-10"
          />

          {/* DECORATIVE BOXES */}
          <div className="absolute top-0 right-20 w-40 h-40 border border-[#353535]" />
          <div className="absolute bottom-0 left-10 w-40 h-40 border border-[#353535]" />

        </div>

      </div>
    </section>
  );
}