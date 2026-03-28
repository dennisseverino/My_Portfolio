import { motion } from "framer-motion";

type LoadingScreenProps = {
  progress: number;
  isBreaking: boolean;
};

const crackLines = [
  "left-[16%] top-[22%] h-[2px] w-[34%] rotate-[18deg]",
  "left-[42%] top-[26%] h-[2px] w-[30%] -rotate-[24deg]",
  "left-[28%] top-[44%] h-[2px] w-[40%] rotate-[7deg]",
  "left-[18%] top-[62%] h-[2px] w-[28%] -rotate-[32deg]",
  "left-[50%] top-[56%] h-[2px] w-[24%] rotate-[38deg]",
  "left-[62%] top-[34%] h-[2px] w-[20%] -rotate-[62deg]",
];

export default function LoadingScreen({
  progress,
  isBreaking,
}: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--page-bg)]"
    >
      <div className="relative w-full max-w-3xl px-6">
        <div className="absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--spotlight-a)] blur-3xl"></div>
        <div className="absolute right-4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[var(--spotlight-b)] blur-3xl"></div>

        <motion.div
          animate={
            isBreaking
              ? {
                  scale: [1, 1.03, 0.96],
                  rotate: [0, 0.35, -0.6],
                  y: [0, -4, 28],
                  opacity: [1, 1, 0.15],
                  filter: [
                    "brightness(1)",
                    "brightness(1.28)",
                    "brightness(0.92)",
                  ],
                }
              : {
                  scale: 1,
                  rotate: 0,
                  y: 0,
                  opacity: 1,
                  filter: "brightness(1)",
                }
          }
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="relative glass-panel-strong overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <motion.div
            initial={false}
            animate={
              isBreaking
                ? { opacity: [0, 0.9, 0], scale: [0.8, 1.2, 1.35] }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 bg-white/40"
          />

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Loading Portfolio</p>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--page-text)] md:text-4xl">
                Preparing the experience
              </h2>
            </div>

            <motion.div
              key={progress}
              initial={{ opacity: 0.35, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-semibold text-[var(--accent)] md:text-6xl"
            >
              {progress}%
            </motion.div>
          </div>

          <div className="mt-10 h-3 overflow-hidden rounded-full bg-[var(--accent-soft)]">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)]"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.12 }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[var(--page-muted-soft)]">
            <span>{isBreaking ? "Cracking Surface" : "Booting UI"}</span>
            <span>{isBreaking ? "Clearing Overlay" : "Rendering Motion"}</span>
          </div>

          {crackLines.map((line, index) => (
            <motion.span
              key={index}
              initial={false}
              animate={
                isBreaking
                  ? {
                      opacity: [0, 1, 0.65],
                      scaleX: [0, 1, 1.12],
                      scaleY: [1, 1, 0.9],
                    }
                  : { opacity: 0, scaleX: 0, scaleY: 1 }
              }
              transition={{
                duration: 0.36,
                delay: index * 0.035,
                ease: "easeOut",
              }}
              className={`absolute rounded-full bg-white/85 shadow-[0_0_18px_rgba(255,255,255,0.7)] origin-left ${line}`}
            />
          ))}

          <motion.div
            initial={false}
            animate={
              isBreaking
                ? { opacity: [0, 1, 0], scale: [0.8, 1.05, 1.2] }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
