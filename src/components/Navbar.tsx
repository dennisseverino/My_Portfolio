import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F5F4F0]/80 backdrop-blur z-50 px-10 md:px-20 py-4 flex justify-between items-center">

      <h1 className="font-semibold text-[#353535]">
        Dennis
      </h1>

      <div className="flex gap-6 text-sm text-[#353535]">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          Home
        </Link>
        <Link to="about" smooth duration={500} className="cursor-pointer">
          About
        </Link>
        <Link to="skills" smooth duration={500} className="cursor-pointer">
          Skills
        </Link>
        <Link to="projects" smooth duration={500} className="cursor-pointer">
          Projects
        </Link>
        <Link to="contact" smooth duration={500} className="cursor-pointer">
          Contact
        </Link>
      </div>

    </nav>
  );
}