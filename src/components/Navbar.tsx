import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border border-[#353535] bg-[#F5F4F0]/80 backdrop-blur z-50 px-10 md:px-20 py-4 flex justify-between items-center">

      <h1 className="font-semibold text-[#353535]">
        Dennis
      </h1>

      <div className="flex gap-6 text-sm text-[#353535]">

        {/* HOME */}
        <Link
          to="home"
          smooth
          duration={500}
          className="relative group cursor-pointer"
        >
          Home
          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#82FFF3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>

        {/* ABOUT */}
        <Link
          to="about"
          smooth
          duration={500}
          className="relative group cursor-pointer"
        >
          About
          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#82FFF3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>

        {/* SKILLS */}
        <Link
          to="skills"
          smooth
          duration={500}
          className="relative group cursor-pointer"
        >
          Skills
          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#82FFF3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>

        {/* PROJECTS */}
        <Link
          to="projects"
          smooth
          duration={500}
          className="relative group cursor-pointer"
        >
          Projects
          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#82FFF3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>

        {/* CONTACT */}
        <Link
          to="contact"
          smooth
          duration={500}
          className="relative group cursor-pointer"
        >
          Contact
          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#82FFF3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>

      </div>
    </nav>
  );
}