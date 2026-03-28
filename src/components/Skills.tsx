import type { CSSProperties } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaDraftingCompass, FaLayerGroup } from "react-icons/fa";
import {
  SiCss3,
  SiCanva,
  SiDart,
  SiFirebase,
  SiFigma,
  SiFlutter,
  SiGit,
  SiHtml5,
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
  { category: "Frontend", name: "HTML", icon: SiHtml5, iconClassName: "text-orange-500" },
  { category: "Frontend", name: "CSS", icon: SiCss3, iconClassName: "text-blue-500" },
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
const rowDurations = ["32s", "36s"];

function expandRow(items: SkillItem[]) {
  if (!items.length) {
    return [];
  }

  const minimumItems =
    items.length >= 6 ? items.length : items.length * Math.ceil(6 / items.length);

  return Array.from({ length: minimumItems }, (_, index) => items[index % items.length]);
}

function createMarqueeRows(items: SkillItem[]) {
  const top = items.filter((_, index) => index % 2 === 0);
  const bottom = items.filter((_, index) => index % 2 === 1);
  return [expandRow(top), expandRow(bottom.length ? bottom : top)];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const visibleSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((item) => item.category === activeCategory);

  const marqueeRows =
    activeCategory === "All"
      ? createMarqueeRows(visibleSkills)
      : [visibleSkills];

  return (
    <section id="skills" className="section-shell px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="section-kicker">Expertise</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold text-[var(--page-text)] md:text-5xl">
              A working stack shaped around product quality and execution speed.
            </h2>
            <div className="section-rule mt-6"></div>
          </div>

          <p className="max-w-xl text-[var(--page-muted)]">
            I work across frontend, backend, mobile, design, and delivery tools,
            with a bias for systems that are maintainable and visually refined.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="relative overflow-hidden rounded-full border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-5 py-2.5 text-sm font-medium text-[var(--page-text)]"
              >
                {isActive && (
                  <motion.div
                    layoutId="skills-active-pill"
                    className="absolute inset-0 rounded-full bg-[var(--button-primary-bg)]"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
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
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {marqueeRows.map((row, index) => {
              const style = {
                "--marquee-duration": rowDurations[index],
              } as CSSProperties;

              if (activeCategory !== "All") {
                return (
                  <div key={index} className="flex flex-wrap gap-5">
                    {row.map(({ name, icon: Icon, iconClassName }) => (
                      <motion.article
                        key={name}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className="glass-panel flex min-w-[220px] items-center gap-4 rounded-[1.5rem] px-5 py-4"
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--card-icon-bg)] text-2xl">
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

              return (
                <div
                  key={index}
                  className={`marquee ${index % 2 ? "marquee--reverse" : ""}`}
                  style={style}
                >
                  <div className="marquee__track">
                    {[0, 1].map((copy) => (
                      <div key={copy} className="marquee__group">
                        {row.map(({ category, name, icon: Icon, iconClassName }) => (
                          <motion.article
                            key={`${copy}-${name}`}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="glass-panel flex min-w-[240px] items-center gap-4 rounded-[1.5rem] px-5 py-4"
                          >
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--card-icon-bg)] text-2xl">
                              <Icon className={iconClassName} />
                            </span>
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--page-muted-soft)]">
                                {category}
                              </p>
                              <p className="mt-1 font-semibold text-[var(--page-text)]">
                                {name}
                              </p>
                            </div>
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
      </div>
    </section>
  );
}
