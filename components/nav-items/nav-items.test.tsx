import * as Stories from "./nav-items.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("NavItems", () => {
  test("should render nav items", async () => {
    await Default.run();
    expect(screen.getByText("Home")).not.toBeNull();
    expect(screen.getByText("Work")).not.toBeNull();
    expect(screen.getByText("About")).not.toBeNull();
    expect(screen.getByText("Contact")).not.toBeNull();
  });
});
