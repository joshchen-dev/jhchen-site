"use client";
import { useEffect, useRef } from "react";
import { Moon, Sun } from "@/components/icons";
export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (buttonRef.current) buttonRef.current.dataset.hydrated = "true"; }, []);
  function toggleTheme() { const next = !document.documentElement.classList.contains("dark"); document.documentElement.classList.toggle("dark", next); localStorage.setItem("theme", next ? "dark" : "light"); }
  return <button ref={buttonRef} className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle color theme"><Moon className="icon icon-moon" /><Sun className="icon icon-sun" /></button>;
}
