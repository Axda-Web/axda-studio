import * as Stories from "./mobile-nav.stories";
import { test, expect, describe } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("MobileNav", () => {
  test("should render mobile nav button", async () => {
    await Default.run();

    const menuButton = screen.getByRole("button");

    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  test("should open mobile nav when clicked", async () => {
    await Default.run();

    const menuButton = screen.getByRole("button");
    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });

  test("should close mobile nav when close button clicked", async () => {
    await Default.run();
    fireEvent.click(screen.getByRole("button")); // Open nav
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("should render navigation links", async () => {
    await Default.run();

    const menuButton = screen.getByRole("button");
    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
