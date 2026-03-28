import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const navItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border border-[var(--page-border)] bg-[var(--nav-bg)] px-10 py-4 backdrop-blur md:px-20">
      <h1 className="font-semibold text-[var(--page-text)]">Dennis</h1>

      <div className="ml-auto flex items-center gap-4 md:gap-8">
        <div className="flex gap-6 text-sm text-[var(--page-text)]">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              className="group relative cursor-pointer"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-[var(--page-text)] transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
          className="flex items-center gap-2 rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-2 text-sm font-medium text-[var(--page-text)] transition hover:border-[var(--page-border)]"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
          <span className="hidden md:inline">{theme === "light" ? "Dark" : "Light"}</span>
        </button>
      </div>
    </nav>
  );
}
