import * as Stories from "./ui-illustration.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("UIIllustration", () => {
  test("should render ui illustration", async () => {
    await Default.run();
    expect(screen.getAllByTestId("ui-illustration")).toHaveLength(3);
    expect(screen.getAllByTestId("ui-illustration")[0]).toBeInTheDocument();
  });
});
