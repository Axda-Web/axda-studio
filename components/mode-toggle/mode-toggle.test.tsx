import * as Stories from "./mode-toggle.stories";
import { test, expect, describe, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";
import { useTheme } from "next-themes";

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

const { Default, PositionAbsolute } = composeStories(Stories);

describe("ModeToggle", () => {
  describe("default", () => {
    test("should render sun icon in light mode", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await Default.run();
      expect(screen.getByText("Toggle theme")).toBeInTheDocument();
      expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
    });

    test("should render moon icon in dark mode", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "dark",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await Default.run();
      expect(screen.getByText("Toggle theme")).toBeInTheDocument();
      expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    });

    test("should toggle theme when clicked", async () => {
      const setTheme = vi.fn();
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme,
        themes: ["light", "dark"],
      });

      await Default.run();
      fireEvent.click(screen.getByText("Toggle theme"));
      expect(setTheme).toHaveBeenCalledWith("dark");
    });

    test("should apply position absolute class when prop is true", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await Default.run({ args: { positionAbsolute: true } });
      expect(screen.getByRole("button")).toHaveClass("md:absolute");
    });
  });

  describe("position absolute", () => {
    test("should apply position absolute class when prop is true", async () => {
      vi.mocked(useTheme).mockReturnValue({
        theme: "light",
        setTheme: vi.fn(),
        themes: ["light", "dark"],
      });

      await PositionAbsolute.run();
      expect(screen.getByRole("button")).toHaveClass("md:absolute");
    });
  });
});
