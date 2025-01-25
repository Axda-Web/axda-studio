import { Page, expect } from "@playwright/test";

export class FooterFixture {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyThemeToggle() {
    const themeToggleButton = this.page.getByRole("button", {
      name: "Toggle theme",
    });
    await expect(themeToggleButton).toBeVisible();
  }

  async verifyCopyright() {
    const currentYear = new Date().getFullYear().toString();
    const copyright = this.page.getByText(new RegExp(`${currentYear}\\s*\\|`));
    const brandName = this.page.getByTestId("footer-brand-name");
    const copyrightSymbol = this.page.getByText("©");

    await expect(copyright).toBeVisible();
    await expect(brandName).toBeVisible();
    await expect(copyrightSymbol).toBeVisible();
  }

  async validateEntireFooter() {
    await this.verifyThemeToggle();
    await this.verifyCopyright();
  }
}
