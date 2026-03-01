import { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "light" | "dark"

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "dark" || saved === "light" ? saved : getSystemTheme();
  });

  useEffect(() => {
    document.body.classList.toggle("theme-dark", theme === "dark");
  }, [theme]);

  // reaguj na zmianę systemu tylko gdy user nie ma zapisanego wyboru
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setTheme(mq.matches ? "dark" : "light");

    mq.addEventListener?.("change", handler);
    mq.addListener?.(handler);

    return () => {
      mq.removeEventListener?.("change", handler);
      mq.removeListener?.(handler);
    };
  }, []);

  const toggle = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  // <-- to będzie wołane przez przycisk System
  const useSystem = () => {
    localStorage.removeItem(STORAGE_KEY);
    setTheme(getSystemTheme());
  };

  const isSystem = !localStorage.getItem(STORAGE_KEY); // boolean

  return { theme, toggle, useSystem, isSystem };
}