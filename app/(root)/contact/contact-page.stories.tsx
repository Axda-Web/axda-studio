import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { withHomeLayoutDecorator } from "../../../.storybook/decorators";
import { fireEvent, waitFor, within, expect } from "@storybook/test";
import { URLS } from "../../../constants/nav";

import ContactPage from "./page";

const meta = {
  title: "SCREENS/ContactPage",
  component: ContactPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [withHomeLayoutDecorator],
} satisfies Meta<typeof ContactPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // NAV
    const axdaStudioLogo = canvas.getByRole("link", { name: /axda studio/i });
    const homeNavLink = canvas.getByRole("link", { name: /home/i });
    const workNavLink = canvas.getByRole("link", { name: /^work$/i });
    const aboutNavLink = canvas.getByRole("link", { name: /about/i });
    const contactCTA = canvas.getByRole("link", { name: /CONTACT/i });

    await expect(axdaStudioLogo).toHaveAttribute("href", URLS.HOME);
    await expect(homeNavLink).toHaveAttribute("href", URLS.HOME);
    await expect(workNavLink).toHaveAttribute("href", URLS.WORK);
    await expect(aboutNavLink).toHaveAttribute("href", URLS.ABOUT);
    await expect(contactCTA).toHaveAttribute("href", URLS.CONTACT);

    // MAIN SECTION
    const nameInput = canvas.getByPlaceholderText(/name/i);
    const emailInput = canvas.getByPlaceholderText(/email/i);
    const phoneInput = canvas.getByPlaceholderText(/phone/i);
    const messageInput = canvas.getByPlaceholderText(/message/i);
    const submitButton = canvas.getByRole("button", { name: /submit/i });

    await fireEvent.change(nameInput, { target: { value: "John Doe" } });
    await fireEvent.change(emailInput, {
      target: { value: "john.doe@example.com" },
    });
    await fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    await fireEvent.change(messageInput, {
      target: { value: "Hello, I'm interested in working with you." },
    });

    await fireEvent.click(submitButton);

    // FOOTER
    const themeToggleButton = canvas.getByText(/toggle theme/i);

    await waitFor(async () => {
      await fireEvent.click(themeToggleButton);
    });
  },
};
