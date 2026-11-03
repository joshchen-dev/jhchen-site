"use client";
import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { ActionIcon, Box, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "@/components/icons";

export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setColorScheme } = useMantineColorScheme();
  const scheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  useEffect(() => { if (buttonRef.current) buttonRef.current.dataset.hydrated = "true"; }, []);
  function toggleTheme() {
    const next = scheme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    // Cross-fade the whole page between themes where the View Transitions API exists.
    if (typeof document.startViewTransition === "function" && !reduceMotion) document.startViewTransition(() => flushSync(() => setColorScheme(next)));
    else setColorScheme(next);
  }
  // Both icons render and CSS shows the right one, so server HTML matches the first client render whatever theme was saved.
  return <ActionIcon ref={buttonRef} variant="default" size="lg" onClick={toggleTheme} aria-label="Toggle color theme"><Box component="span" lightHidden className="icon-wrap"><Sun className="icon" /></Box><Box component="span" darkHidden className="icon-wrap"><Moon className="icon" /></Box></ActionIcon>;
}
