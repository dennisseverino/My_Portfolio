import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Produce from "./pages/Produce";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";
const LOADER_DURATION_MS = 1800;

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isBreaking, setIsBreaking] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isLoading ? "hidden" : previousOverflow || "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  useEffect(() => {
    let frameId = 0;
    let breakTimer: ReturnType<typeof setTimeout> | undefined;
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const nextProgress = Math.min(
        100,
        Math.max(1, Math.ceil((elapsed / LOADER_DURATION_MS) * 100))
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      setIsBreaking(true);

      breakTimer = window.setTimeout(() => {
        setIsLoading(false);
      }, 720);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      if (breakTimer) {
        window.clearTimeout(breakTimer);
      }
    };
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              theme={theme}
              onToggleTheme={() =>
                setTheme((currentTheme) =>
                  currentTheme === "light" ? "dark" : "light"
                )
              }
            />
          }
        />
        <Route path="/produce" element={<Produce />} />
      </Routes>

      <ScrollToTopButton />

      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen progress={progress} isBreaking={isBreaking} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
