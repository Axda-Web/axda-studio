import { Page, expect } from "@playwright/test";

export class HeaderFixture {
  constructor(private page: Page) {}

  async validateLogo() {
    const axdaStudioLogo = this.page.getByRole("link", {
      name: "Axda Studio Logo",
    });
    await expect(axdaStudioLogo).toBeVisible();

    await axdaStudioLogo.click();
    await expect(this.page).toHaveURL("http://localhost:3000/");
  }

  async validateNavItems() {
    const homeNavItem = this.page.getByRole("link", { name: "Home" });
    const workNavItem = this.page.getByRole("link", { name: /^Work$/ });
    const aboutNavItem = this.page.getByRole("link", { name: "About" });

    await expect(homeNavItem).toBeVisible();
    await expect(workNavItem).toBeVisible();
    await expect(aboutNavItem).toBeVisible();

    await homeNavItem.click();
    await expect(this.page).toHaveURL("http://localhost:3000/");

    await workNavItem.click();
    await expect(this.page).toHaveURL("http://localhost:3000/work");

    await aboutNavItem.click();
    await expect(this.page).toHaveURL("http://localhost:3000/about");
  }

  async validateContactCTA() {
    const contactCTA = this.page.getByTestId("contact-cta").filter({
      hasText: "CONTACT",
    });
    await expect(contactCTA).toBeVisible();

    await contactCTA.click();
    await expect(this.page).toHaveURL("http://localhost:3000/contact");
  }

  async validateEntireHeader() {
    await this.validateLogo();
    await this.validateNavItems();
    await this.validateContactCTA();
  }
}
