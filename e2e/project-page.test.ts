import { test, expect } from "@playwright/test";
import { HeaderFixture } from "./fixtures/header";
import { FooterFixture } from "./fixtures/footer";

// TODO: Add specific tests for first/last projects

test.describe("Project page", () => {
  let header: HeaderFixture;
  let footer: FooterFixture;

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/work/1");
    header = new HeaderFixture(page);
    footer = new FooterFixture(page);
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Axda Studio Dev/);
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/work/1");
  });

  test("should have a valid header", async () => {
    await header.validateEntireHeader();
  });

  test("should have a valid footer", async () => {
    await footer.validateEntireFooter();
  });

  test.describe("Project section", () => {
    test.describe("project image", () => {
      test("should render project image", async ({ page }) => {
        const projectImage = page.getByTestId("project-image");
        await expect(projectImage).toBeVisible();
      });
    });

    test.describe("project title", () => {
      test("should render project title", async ({ page }) => {
        const projectTitle = page.getByTestId("project-title");
        await expect(projectTitle).toBeVisible();
      });
    });

    test.describe("project-type", () => {
      test("should render project type", async ({ page }) => {
        const projectType = page.getByTestId("project-type");
        await expect(projectType).toBeVisible();
      });
    });

    test.describe("project-tech-stack", () => {
      test("should render project tech stack", async ({ page }) => {
        const projectTechStack = page.getByTestId("project-tech-stack");
        await expect(projectTechStack).toBeVisible();
      });
    });

    test.describe("project description", () => {
      test("should render project description", async ({ page }) => {
        const projectDescription = page.getByTestId("project-description");
        await expect(projectDescription).toBeVisible();
      });
    });

    test.describe("project-links", () => {
      test.describe("project-card-github-link", () => {
        test("should render project github link", async ({ page }) => {
          const projectGithubLink = page.getByTestId(
            "project-card-github-link"
          );
          await expect(projectGithubLink).toBeVisible();
        });
      });

      test.describe("project-card-play-button", () => {
        test("should render project play button", async ({ page }) => {
          const projectPlayButton = page.getByTestId(
            "project-card-play-button"
          );
          await expect(projectPlayButton).toBeVisible();
        });
      });
    });
  });
});
