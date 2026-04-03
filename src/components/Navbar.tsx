import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const nextTheme = theme === "light" ? "dark" : "light";
  const logoSrc =
    theme === "light" ? "/light-theme_logo.png" : "/dark-theme_logo.png";
  const wordmarkSrc =
    theme === "light" ? "/light-theme_name.png" : "/dark-theme_name.png";
  const logoBadgeClass =
    theme === "light"
      ? "border-slate-900/10 bg-white/90 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
      : "border-white/10 bg-slate-950/70 shadow-[0_14px_30px_rgba(2,6,23,0.34)]";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8 lg:px-12"
    >
      <div
        className={`glass-panel mx-auto max-w-7xl px-5 py-3 md:px-7 ${
          isMobileOpen ? "rounded-[2rem]" : "rounded-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link
            to="home"
            smooth
            duration={500}
            offset={-90}
            onClick={() => setIsMobileOpen(false)}
            className="group flex cursor-pointer items-center gap-3"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border p-1 ${logoBadgeClass}`}
            >
              <img
                src={logoSrc}
                alt="Dennis logo"
                className="h-full w-full object-contain"
              />
            </span>
            <img
              src={wordmarkSrc}
              alt="Dennis"
              className="hidden h-10 w-auto object-contain sm:block"
            />
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg)]/80 px-2 py-2 md:flex">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-90}
                className="rounded-full px-4 py-2 text-sm text-[var(--page-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--page-text)]"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
              className="flex items-center gap-2 rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg-strong)] px-4 py-2 text-sm font-medium text-[var(--page-text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
              <span className="hidden sm:inline">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </span>
            </button>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileOpen((current) => !current)}
                aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg-strong)] text-[var(--page-text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {isMobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 grid gap-2 border-t border-[var(--page-border-soft)] pt-4">
                {navItems.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    smooth
                    duration={500}
                    offset={-90}
                    onClick={() => setIsMobileOpen(false)}
                    className="rounded-2xl bg-[var(--card-bg)] px-4 py-3 text-sm font-medium text-[var(--page-text)] hover:bg-[var(--accent-soft)] hover:text-[var(--page-text)]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
