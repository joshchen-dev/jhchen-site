import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "./theme-toggle";
describe("ThemeToggle", () => { beforeEach(() => { document.documentElement.classList.remove("dark"); localStorage.clear(); }); it("toggles and persists the theme", () => { render(<ThemeToggle />); fireEvent.click(screen.getByRole("button", { name: /toggle color theme/i })); expect(document.documentElement).toHaveClass("dark"); expect(localStorage.getItem("theme")).toBe("dark"); }); });
