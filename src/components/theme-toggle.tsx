"use client";
import { useEffect, useRef } from "react";
import { Moon, Sun } from "@/components/icons";
export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (buttonRef.current) buttonRef.current.dataset.hydrated = "true"; }, []);
  function applyTheme(dark: boolean) { document.documentElement.classList.toggle("dark", dark); localStorage.setItem("theme", dark ? "dark" : "light"); }
  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    // Cross-fade the whole page between themes where the View Transitions API exists.
    if (typeof document.startViewTransition === "function" && !reduceMotion) { const root = document.documentElement; root.classList.add("theme-switching"); document.startViewTransition(() => applyTheme(next)).finished.finally(() => root.classList.remove("theme-switching")); }
    else applyTheme(next);
  }
  return <button ref={buttonRef} className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle color theme"><Moon className="icon icon-moon" /><Sun className="icon icon-sun" /></button>;
}
