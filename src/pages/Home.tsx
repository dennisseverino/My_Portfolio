import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type HomeProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export default function Home({ theme, onToggleTheme }: HomeProps) {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <Hero theme={theme} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
