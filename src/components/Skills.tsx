import type { CSSProperties } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaDraftingCompass,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiCanva,
  SiDart,
  SiFirebase,
  SiFigma,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPostman,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type SkillItem = {
  category: string;
  name: string;
  icon: IconType;
  iconClassName: string;
};

const skills: SkillItem[] = [
  { category: "Frontend", name: "React", icon: SiReact, iconClassName: "text-sky-500" },
  { category: "Frontend", name: "TypeScript", icon: SiTypescript, iconClassName: "text-blue-600" },
  { category: "Frontend", name: "JavaScript", icon: SiJavascript, iconClassName: "text-yellow-500" },

  { category: "Mobile", name: "Dart", icon: SiDart, iconClassName: "text-cyan-600" },
  { category: "Mobile", name: "Flutter", icon: SiFlutter, iconClassName: "text-sky-400" },

  { category: "Backend", name: "PHP", icon: SiPhp, iconClassName: "text-indigo-500" },
  { category: "Backend", name: "MySQL", icon: SiMysql, iconClassName: "text-blue-500" },
  { category: "Backend", name: "Firebase", icon: SiFirebase, iconClassName: "text-amber-500" },

  { category: "Design", name: "Figma", icon: SiFigma, iconClassName: "text-rose-500" },
  { category: "Design", name: "Canva", icon: SiCanva, iconClassName: "text-cyan-500" },
  { category: "Design", name: "Prototyping", icon: FaDraftingCompass, iconClassName: "text-orange-500" },
  { category: "Design", name: "Design Systems", icon: FaLayerGroup, iconClassName: "text-emerald-600" },

  { category: "Tools", name: "Git", icon: SiGit, iconClassName: "text-orange-600" },
  { category: "Tools", name: "VS Code", icon: VscVscode, iconClassName: "text-blue-500" },
  { category: "Tools", name: "Postman", icon: SiPostman, iconClassName: "text-orange-500" },
  { category: "Tools", name: "Vercel", icon: SiVercel, iconClassName: "text-black" },
];

const categories = ["All", "Frontend", "Backend", "Mobile", "Design", "Tools"] as const;
const rowDurations = ["28s", "32s"];

function expandRow(items: SkillItem[]) {
  if (!items.length) return [];
  const min = items.length >= 6 ? items.length : items.length * Math.ceil(6 / items.length);
  return Array.from({ length: min }, (_, i) => items[i % items.length]);
}

function createMarqueeRows(items: SkillItem[]) {
  const top = items.filter((_, i) => i % 2 === 0);
  const bottom = items.filter((_, i) => i % 2 === 1);
  return [expandRow(top), expandRow(bottom.length ? bottom : top)];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const visibleSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
          (s) => s.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const marqueeRows =
    activeCategory === "All"
      ? createMarqueeRows(visibleSkills)
      : [visibleSkills];

  return (
    <section
      id="skills"
      className="bg-[var(--page-bg)] px-10 py-20 md:px-20"
    >
      {/* HEADER */}
      <div className="mb-12">
        <p className="mb-2 text-sm tracking-widest text-[var(--page-muted-soft)]">
          - EXPERTISE
        </p>
        <h2 className="mb-4 text-3xl font-bold text-[var(--page-text)] md:text-4xl">
          Skills & Tools
        </h2>
        <div className="h-[2px] w-16 bg-[var(--page-border)]" />
      </div>

      {/* FILTER */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="relative rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-5 py-2 text-sm font-medium"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-[var(--button-primary-bg)]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              <span
                className={`relative z-10 ${
                  isActive
                    ? "text-[var(--button-primary-text)]"
                    : "text-[var(--page-text)]"
                }`}
              >
                {category}
              </span>
            </button>
          );
        })}
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {marqueeRows.map((row, index) => {
            const style = {
              "--marquee-duration": rowDurations[index],
            } as CSSProperties;

            // 🔥 FILTER MODE (GRID)
            if (activeCategory !== "All") {
              return (
                <div key={index} className="flex flex-wrap gap-5">
                  {row.map(({ name, icon: Icon, iconClassName }) => (
                    <motion.article
                      key={name}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-4 shadow-lg backdrop-blur-lg"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--card-icon-bg)] text-2xl">
                        <Icon className={iconClassName} />
                      </span>
                      <span className="font-semibold text-[var(--page-text)]">
                        {name}
                      </span>
                    </motion.article>
                  ))}
                </div>
              );
            }

            // 🔥 MARQUEE MODE (LOOPING)
            return (
              <div
                key={index}
                className={`marquee ${index % 2 ? "marquee--reverse" : ""}`}
                style={style}
              >
                <div className="marquee__track">
                  {[0, 1].map((copy) => (
                    <div key={copy} className="marquee__group">
                      {row.map(({ name, icon: Icon, iconClassName }) => (
                        <motion.article
                          whileHover={{ scale: 1.1 }}
                          key={`${copy}-${name}`}
                          className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-4 shadow-md backdrop-blur-lg"
                        >
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--card-icon-bg)] text-2xl">
                            <Icon className={iconClassName} />
                          </span>
                          <span className="font-semibold text-[var(--page-text)]">
                            {name}
                          </span>
                        </motion.article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
