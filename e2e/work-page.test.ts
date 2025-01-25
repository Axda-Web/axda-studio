import { test, expect } from "@playwright/test";
import { HeaderFixture } from "./fixtures/header";
import { FooterFixture } from "./fixtures/footer";

test.describe("Work page", () => {
  let header: HeaderFixture;
  let footer: FooterFixture;

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/work");
    header = new HeaderFixture(page);
    footer = new FooterFixture(page);
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Axda Studio Dev/);
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/work");
  });

  test("should have a valid header", async () => {
    await header.validateEntireHeader();
  });

  test("should have a valid footer", async () => {
    await footer.validateEntireFooter();
  });

  test.describe("Work section", () => {
    test("should display work title", async ({ page }) => {
      const workTitle = page.getByRole("heading", { name: "WORK" });
      await expect(workTitle).toBeVisible();
    });

    test.describe("should display the Work section", () => {
      test("should display the Movix project card", async ({ page }) => {
        const movixProjectLink = page.getByTestId(/project-card-link-movix/i);
        await expect(movixProjectLink).toBeVisible();
        await movixProjectLink.click();
        await expect(page).toHaveURL("http://localhost:3000/work/1");

        await page.goBack();
        await expect(page).toHaveURL("http://localhost:3000/work");

        const movixSeeLiveProjectBtn = page.getByTestId(
          /project-card-play-button-movix/i
        );
        await expect(movixSeeLiveProjectBtn).toBeVisible();
        await movixSeeLiveProjectBtn.click();
      });

      test("should display the Eyestetix project card", async ({ page }) => {
        const eyestetixProjectLink = page.getByTestId(
          /project-card-link-eyestetix/i
        );
        await expect(eyestetixProjectLink).toBeVisible();

        await eyestetixProjectLink.click();
        await expect(page).toHaveURL("http://localhost:3000/work/9");

        await page.goBack();
        await expect(page).toHaveURL("http://localhost:3000/work");

        const eyestetixSeeLiveProjectBtn = page.getByTestId(
          /project-card-play-button-eyestetix/i
        );
        await expect(eyestetixSeeLiveProjectBtn).toBeVisible();
        await eyestetixSeeLiveProjectBtn.click();
      });
    });
  });
});
