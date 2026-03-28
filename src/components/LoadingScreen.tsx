import { motion } from "framer-motion";

type LoadingScreenProps = {
  progress: number;
};

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--page-bg)]"
    >
      <div className="relative w-full max-w-3xl px-6">
        <div className="absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--spotlight-a)] blur-3xl"></div>
        <div className="absolute right-4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[var(--spotlight-b)] blur-3xl"></div>

        <div className="relative glass-panel-strong rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
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
            <span>Booting UI</span>
            <span>Rendering Motion</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
