import * as Stories from "./navbar.stories";
import { test, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/nextjs";

const { Default } = composeStories(Stories);

describe("Navbar", () => {
  test("should render logo", async () => {
    await Default.run();
    expect(
      screen.getByRole("link", { name: /axda studio/i })
    ).toBeInTheDocument();
  });

  test("should render navigation items on desktop", async () => {
    await Default.run();
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("should render mobile nav on mobile viewport", async () => {
    await Default.run();

    // Mobile nav button should be visible
    const mobileMenuButton = screen.getByRole("button");
    expect(mobileMenuButton).toBeInTheDocument();

    // Desktop nav should be hidden
    const desktopNav = screen
      .getByRole("navigation")
      .querySelector(".md\\:block");
    expect(desktopNav).toHaveClass("hidden");
  });
});
