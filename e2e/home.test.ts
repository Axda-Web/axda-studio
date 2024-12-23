import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Axda Studio Dev/);
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test.describe("Navbar", () => {
    test("should have the Axda Studio logo", async ({ page }) => {
      const axdaStudioLogo = page.getByRole("link", {
        name: "Axda Studio Logo",
      });
      await expect(axdaStudioLogo).toBeVisible();

      await axdaStudioLogo.click();
      await expect(page).toHaveURL("http://localhost:3000/");
    });

    test("should have the NavItems", async ({ page }) => {
      const homeNavItem = page.getByRole("link", { name: "Home" });
      const workNavItem = page.getByRole("link", { name: /^Work$/ });
      const aboutNavItem = page.getByRole("link", { name: "About" });

      await expect(homeNavItem).toBeVisible();
      await expect(workNavItem).toBeVisible();
      await expect(aboutNavItem).toBeVisible();

      await homeNavItem.click();
      await expect(page).toHaveURL("http://localhost:3000/");

      await workNavItem.click();
      await expect(page).toHaveURL("http://localhost:3000/work");

      await aboutNavItem.click();
      await expect(page).toHaveURL("http://localhost:3000/about");
    });
  });

  test("should have contact cta", async ({ page }) => {
    const contactCTA = page.getByTestId("contact-cta").filter({
      hasText: "CONTACT",
    });
    await expect(contactCTA).toBeVisible();

    await contactCTA.click();
    await expect(page).toHaveURL("http://localhost:3000/contact");
  });

  test.describe("Hero section", () => {
    test("should have a title", async ({ page }) => {
      const heroTitle = page.getByRole("heading", {
        name: "Fast, Robust, and Elegant UI.",
      });
      await expect(heroTitle).toBeVisible();
    });

    test("should have a description", async ({ page }) => {
      const heroDescription = page.getByText(
        "Crafting custom interfaces that blend speed, durability, and style for an exceptional user experience."
      );
      await expect(heroDescription).toBeVisible();
    });

    test("should have a Work CTA", async ({ page }) => {
      const heroMyWorkCTA = page.getByRole("link", { name: "SEE ALL WORK" });
      await expect(heroMyWorkCTA).toBeVisible();

      await heroMyWorkCTA.click();
      await expect(page).toHaveURL("http://localhost:3000/work");
    });
  });
});
