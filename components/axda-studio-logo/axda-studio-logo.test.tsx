import * as Stories from "./axda-studio-logo.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("AxdaStudioLogo", () => {
  test("should render axda studio logo", async () => {
    await Default.run();
    expect(screen.getByText("Axda Studio Logo")).not.toBeNull();
  });
});
