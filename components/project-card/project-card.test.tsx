import * as Stories from "./project-card.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("ProjectCard", () => {
  test("should render project card", async () => {
    await Default.run();
    expect(screen.getAllByRole("link")).toHaveLength(2);

    const projectImage = screen.getAllByRole("img")[0];
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F150&w=1920&q=75"
    );

    const projectDetailsLink = screen.getAllByRole("link")[0];
    expect(projectDetailsLink).toHaveAttribute("href", "/work/1");

    const projectLiveLink = screen.getAllByRole("link")[1];
    expect(projectLiveLink).toHaveAttribute("href", "https://axda-studio.com");

    expect(
      screen.getByRole("heading", { name: "PROJECT TITLE" })
    ).toBeInTheDocument();
  });
});
