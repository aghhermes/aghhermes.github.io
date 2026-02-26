import { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState("light"); // domyślnie LIGHT

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}