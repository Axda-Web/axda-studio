import { test, expect } from "@playwright/test";

// TODO: Add server side form validation tests
// TODO: Add error toast test

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Axda Studio Dev/);
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/contact");
  });

  test.describe("contact text block", () => {
    test("should render contact text block", async ({ page }) => {
      const contactTitle = page.getByText(/LET'S CONNECT!/i);
      const contactSubtitle = page.getByText(
        /I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible./i
      );

      await expect(contactTitle).toBeVisible();
      await expect(contactSubtitle).toBeVisible();
    });
  });

  test.describe("contact form", () => {
    test("should render contact form", async ({ page }) => {
      const contactForm = page.getByTestId("contact-form");
      await expect(contactForm).toBeVisible();
    });

    test.describe("contact form inputs", () => {
      test.describe("name input", () => {
        test("should render name input", async ({ page }) => {
          const nameInput = page.getByPlaceholder("NAME");
          await expect(nameInput).toBeVisible();

          await nameInput.fill("John Doe");
          await expect(nameInput).toHaveValue("John Doe");
        });

        test("should render name input with error", async ({ page }) => {
          const nameInput = page.getByPlaceholder("NAME");
          await expect(nameInput).toBeVisible();

          await nameInput.fill("");

          const submitButton = page.getByRole("button", { name: /submit/i });
          await expect(submitButton).toBeVisible();

          await submitButton.click();

          const errorMessage = page.getByText(
            /Username must be at least 2 characters/i
          );
          await expect(errorMessage).toBeVisible();
        });

        test("should render email input", async ({ page }) => {
          const emailInput = page.getByPlaceholder("EMAIL");
          await expect(emailInput).toBeVisible();

          await emailInput.fill("john.doe@example.com");
          await expect(emailInput).toHaveValue("john.doe@example.com");
        });

        test("should render email input with error", async ({ page }) => {
          const emailInput = page.getByPlaceholder("EMAIL");
          await expect(emailInput).toBeVisible();

          await emailInput.fill("");

          const submitButton = page.getByRole("button", { name: /submit/i });
          await expect(submitButton).toBeVisible();

          await submitButton.click();

          const errorMessage = page.getByText(/Email is not valid/i);
          await expect(errorMessage).toBeVisible();
        });

        test("should render phone input", async ({ page }) => {
          const phoneInput = page.getByPlaceholder("PHONE");
          await expect(phoneInput).toBeVisible();

          await phoneInput.fill("1234567890");
          await expect(phoneInput).toHaveValue("1234567890");
        });

        test("should render phone input with error", async ({ page }) => {
          const phoneInput = page.getByPlaceholder("PHONE");
          await expect(phoneInput).toBeVisible();

          await phoneInput.fill("");

          const submitButton = page.getByRole("button", { name: /submit/i });
          await expect(submitButton).toBeVisible();

          await submitButton.click();

          const errorMessage = page.getByText(/Phone number is not valid/i);
          await expect(errorMessage).toBeVisible();
        });

        test("should render message input", async ({ page }) => {
          const messageInput = page.getByPlaceholder("MESSAGE");
          await expect(messageInput).toBeVisible();

          await messageInput.fill("Hello, I'm interested in your services.");
          await expect(messageInput).toHaveValue(
            "Hello, I'm interested in your services."
          );
        });

        test("should render message input with error", async ({ page }) => {
          const messageInput = page.getByPlaceholder("MESSAGE");
          await expect(messageInput).toBeVisible();

          await messageInput.fill("");

          const submitButton = page.getByRole("button", { name: /submit/i });
          await expect(submitButton).toBeVisible();

          await submitButton.click();

          const errorMessage = page.getByText(/Message is not valid/i);
          await expect(errorMessage).toBeVisible();
        });

        test("should render submit button", async ({ page }) => {
          const submitButton = page.getByRole("button", { name: /submit/i });
          await expect(submitButton).toBeVisible();
        });

        test("should render success toast if form is valid", async ({
          page,
        }) => {
          const nameInput = page.getByPlaceholder("NAME");
          await nameInput.fill("John Doe");

          const emailInput = page.getByPlaceholder("EMAIL");
          await emailInput.fill("john.doe@example.com");

          const phoneInput = page.getByPlaceholder("PHONE");
          await phoneInput.fill("1234567890");

          const messageInput = page.getByPlaceholder("MESSAGE");
          await messageInput.fill("Hello, I'm interested in your services.");

          const submitButton = page.getByRole("button", { name: /submit/i });
          await submitButton.click();

          const successToastTitle = page.getByText(/Message sent/i).first();
          await expect(successToastTitle).toBeVisible();

          const successToastDescription = page
            .getByText(/Talk to you soon!/i)
            .first();
          await expect(successToastDescription).toBeVisible();
        });
      });
    });
  });
});
