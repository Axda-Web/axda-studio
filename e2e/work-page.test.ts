import { test, expect } from "@playwright/test";

test.describe("Work page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/work");
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Axda Studio Dev/);
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/work");
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

        const movixGithubLink = page.getByTestId(
          /project-card-github-link-movix/i
        );
        await expect(movixGithubLink).toBeVisible();
        await movixGithubLink.click();

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

        const eyestetixGithubLink = page.getByTestId(
          /project-card-github-link-eyestetix/i
        );
        await expect(eyestetixGithubLink).toBeVisible();
        await eyestetixGithubLink.click();

        const eyestetixSeeLiveProjectBtn = page.getByTestId(
          /project-card-play-button-eyestetix/i
        );
        await expect(eyestetixSeeLiveProjectBtn).toBeVisible();
        await eyestetixSeeLiveProjectBtn.click();
      });
    });
  });
});
