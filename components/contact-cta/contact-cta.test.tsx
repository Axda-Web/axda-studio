import * as Stories from "./contact-cta.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("ContactCta", () => {
  test("should render contact cta", async () => {
    await Default.run();
    expect(screen.getByRole("link", { name: "CONTACT" })).toBeInTheDocument();
  });
});
