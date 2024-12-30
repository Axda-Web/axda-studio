import * as Stories from "./page-title.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("PageTitle", () => {
  test("should render page title", async () => {
    await Default.run();
    expect(
      screen.getByRole("heading", { name: "Page Title" })
    ).toBeInTheDocument();
  });
});
