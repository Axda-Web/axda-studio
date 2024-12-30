import * as Stories from "./projects-section.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("ProjectsSection", () => {
  test("should render projects section", async () => {
    await Default.run();

    const headings = screen.getAllByRole("heading");
    const links = screen.getAllByRole("link");
    const images = screen.getAllByRole("img");

    expect(headings).toHaveLength(9);
    expect(links).toHaveLength(27);
    expect(images).toHaveLength(27);

    for (let i = 0; i < 9; i++) {
      const projectIndex = i * 3;

      expect(links[projectIndex]).toHaveAttribute("href", `/work/${i + 1}`);

      expect(links[projectIndex + 1]).toHaveAttribute(
        "href",
        "https://github.com/Axda-Web/axda-studio"
      );

      expect(links[projectIndex + 2]).toHaveAttribute(
        "href",
        "https://axda-studio.vercel.app/"
      );
    }
  });
});
