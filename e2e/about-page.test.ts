import { test, expect } from "@playwright/test";

test.describe("About page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/about");
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Axda Studio Dev/);
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/about");
  });

  test.describe("about text block", () => {
    test("should render about text block", async ({ page }) => {
      const aboutTitle = page.getByText(/about/i).nth(1);
      const aboutParagraph = page.getByText(
        /I am a Frontend Developer with five years dedicated to building digital experiences that prioritize performance, scalability, and visual excellence./i
      );
      const aboutParagraph2 = page.getByText(
        /My journey has taken me across borders, working in dynamic tech hubs like Dublin and Amsterdam, where I've honed my skills and embraced diverse perspectives./i
      );
      const aboutParagraph3 = page.getByText(
        /Beyond development, I leverage valuable expertise in Psychology, Marketing and Design, enabling me to approach projects holistically and deliver solutions that truly resonate./i
      );
      const aboutParagraph4 = page.getByText(
        /Let's create something exceptional together!/i
      );

      await expect(aboutTitle).toBeVisible();
      await expect(aboutParagraph).toBeVisible();
      await expect(aboutParagraph2).toBeVisible();
      await expect(aboutParagraph3).toBeVisible();
      await expect(aboutParagraph4).toBeVisible();
    });
  });

  test.describe("Dev illustration", () => {
    test("should render dev illustration", async ({ page }) => {
      const devIllustration = page.getByTestId("about-dev-illustration");
      await expect(devIllustration).toBeVisible();
    });
  });
});
