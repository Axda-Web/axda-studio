import * as Stories from "./theme-toggle-btn.stories";
import { test, expect, describe, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";
import { useTheme } from "next-themes";

vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

const { MobileNav, Footer } = composeStories(Stories);

describe("ThemeToggleBtn", () => {
  describe("MobileNav", () => {
    test("should render dark border icon in light mode", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await MobileNav.run();
      const themeToggleBtn = document.querySelector(".fill-foreground");
      expect(themeToggleBtn).toBeInTheDocument();

      expect(screen.getByText("Toggle theme")).toBeInTheDocument();
    });

    test("should render light border icon in dark mode", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "dark",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await MobileNav.run();
      const themeToggleBtn = document.querySelector(".fill-foreground");
      expect(themeToggleBtn).toBeInTheDocument();

      expect(screen.getByText("Toggle theme")).toBeInTheDocument();
    });

    test("should toggle theme when clicked", async () => {
      const setTheme = vi.fn();
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme,
        themes: ["light", "dark"],
      });

      await MobileNav.run();
      fireEvent.click(screen.getByText("Toggle theme"));
      expect(setTheme).toHaveBeenCalledWith("dark");
    });
  });

  describe("Footer", () => {
    test("should render light border icon in light mode", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await Footer.run();
      const themeToggleBtn = document.querySelector(".fill-background");
      expect(themeToggleBtn).toBeInTheDocument();

      expect(screen.getByText("Toggle theme")).toBeInTheDocument();
    });

    test("should render dark border icon in dark mode", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "dark",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await Footer.run();
      const themeToggleBtn = document.querySelector(".fill-background");
      expect(themeToggleBtn).toBeInTheDocument();

      expect(screen.getByText("Toggle theme")).toBeInTheDocument();
    });

    test("should toggle theme when clicked", async () => {
      const setTheme = vi.fn();
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme,
        themes: ["light", "dark"],
      });

      await Footer.run();
      fireEvent.click(screen.getByText("Toggle theme"));
      expect(setTheme).toHaveBeenCalledWith("dark");
    });
  });
});
