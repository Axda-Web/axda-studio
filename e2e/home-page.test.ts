import { test, expect } from "@playwright/test";
import { HeaderFixture } from "./fixtures/header";
import { FooterFixture } from "./fixtures/footer";

test.describe("Home page", () => {
  let header: HeaderFixture;
  let footer: FooterFixture;

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    header = new HeaderFixture(page);
    footer = new FooterFixture(page);
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Axda Studio Dev/);
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("should have a valid header", async () => {
    await header.validateEntireHeader();
  });

  test("should have a valid footer", async () => {
    await footer.validateEntireFooter();
  });

  test.describe("Hero section", () => {
    test("should have a title", async ({ page }) => {
      const heroTitle = page.getByRole("heading", {
        name: "Fast, Robust, & Elegant ",
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
