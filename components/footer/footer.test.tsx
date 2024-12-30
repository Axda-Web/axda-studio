import * as Stories from "./footer.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("Footer", () => {
  test("should render copyright text", async () => {
    await Default.run();

    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`${currentYear}\\s*\\|`))
    ).toBeInTheDocument();
    expect(screen.getByText("Axda Studio")).toBeInTheDocument();
    expect(screen.getByText("©")).toBeInTheDocument();
  });
  test("should render the theme toggle button", async () => {
    await Default.run();
    expect(
      screen.getByRole("button", { name: "Toggle theme" })
    ).toBeInTheDocument();
  });
});
