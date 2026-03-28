import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const VISIBILITY_OFFSET = 320;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > VISIBILITY_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          key="scroll-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 24, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.88 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full border border-[var(--page-border-soft)] bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] shadow-[var(--shadow-strong)] hover:border-[var(--accent)] hover:bg-[var(--button-primary-hover)] md:bottom-8 md:right-8"
        >
          <FaArrowUp />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
