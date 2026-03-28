import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

type HeroProps = {
  theme: "light" | "dark";
};

export default function Hero({ theme }: HeroProps) {
  const heroImage = theme === "dark" ? "/profile-dark.JPG" : "/profile.png";

  return (
    <section
      id="home"
      className="min-h-screen bg-[var(--page-bg)] px-10 md:px-20 flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <h1 className="text-4xl md:text-5xl font-medium text-[var(--page-text)] mb-2 font-instrument">
          <TypeAnimation
            sequence={[
              "Dennis B. Severino IV",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <br />

          <p className="text-[var(--page-muted)] max-w-md mb-6 leading-relaxed">
            I create beautiful, functional digital experiences that help
            businesses grow and users thrive. Specializing in modern web
            technologies and user-centered design.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-6">
            <Link to="projects" smooth duration={500}>
              <button className="bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] px-5 py-2 rounded-md text-sm hover:bg-[var(--button-primary-hover)] transition">
                View my work
              </button>
            </Link>

            <Link to="contact" smooth duration={500} className="border border-[var(--page-border)] text-[var(--page-text)] px-5 py-2 rounded-md text-sm hover:bg-[var(--card-bg)] transition">
            <button>
              Contact Me
            </button>
            </Link>

          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 text-xl text-[var(--page-text)]">
            <a href="https://github.com/dennisseverino" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer hover:opacity-70" />
            </a>
            <a href="https://www.linkedin.com/in/dennis-iv-severino-519497320/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:opacity-70" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.6, // delayed appearance
            ease: "easeOut",
          }}
        >
          {/* IMAGE */}
          <img
            key={heroImage}
            src={heroImage}
            alt="Dennis"
            className="w-[300px] md:w-[350px] relative z-10 transition-opacity duration-300"
          />

          {/* DECORATIVE BOXES */}
          <div className="absolute top-0 right-20 w-40 h-40 border border-[var(--page-border)]" />
          <div className="absolute bottom-0 left-10 w-40 h-40 border border-[var(--page-border)]" />
        </motion.div>

      </div>
    </section>
  );
}
