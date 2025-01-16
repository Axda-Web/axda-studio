import * as Stories from "./contact-form.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("ContactForm", () => {
  test("should contact form", async () => {
    await Default.run();
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  test("should render all form inputs", async () => {
    await Default.run();
    expect(screen.getByPlaceholderText("NAME")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("EMAIL")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("PHONE")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("MESSAGE")).toBeInTheDocument();
  });

  test("should render submit button", async () => {
    await Default.run();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});
