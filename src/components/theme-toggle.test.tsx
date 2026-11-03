import { MantineProvider } from "@mantine/core";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "./theme-toggle";
describe("ThemeToggle", () => {
  beforeEach(() => { document.documentElement.removeAttribute("data-mantine-color-scheme"); localStorage.clear(); });
  it("switches between light and dark and remembers the choice", () => {
    render(<MantineProvider defaultColorScheme="light"><ThemeToggle /></MantineProvider>);
    fireEvent.click(screen.getByRole("button", { name: /toggle color theme/i }));
    expect(document.documentElement).toHaveAttribute("data-mantine-color-scheme", "dark");
    expect(localStorage.getItem("mantine-color-scheme-value")).toBe("dark");
  });
});
