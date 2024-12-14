import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { withHomeLayoutDecorator } from "../../.storybook/decorators";
import { fireEvent, waitFor, within, expect } from "@storybook/test";
import { URLS } from "../../constants/nav";

import HomePage from "./page";

const meta = {
  title: "SCREENS/HomePage",
  component: HomePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [withHomeLayoutDecorator],
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const axdaStudioLogo = canvas.getByRole("link", { name: /axda studio/i });
    const homeNavLink = canvas.getByRole("link", { name: /home/i });
    const workNavLink = canvas.getByRole("link", { name: /^work$/i });
    const aboutNavLink = canvas.getByRole("link", { name: /about/i });
    const contactNavLink = canvas.getAllByRole("link", { name: /contact/i })[0];
    const workButton = canvas.getByRole("link", { name: /my work/i });
    const contactButton = canvas.getAllByRole("link", { name: /contact/i })[1];
    // const themeToggleButton = canvas.getByRole("button", {
    //   name: /toggle theme/i,
    // });

    await expect(axdaStudioLogo).toHaveAttribute("href", URLS.HOME);
    await expect(homeNavLink).toHaveAttribute("href", URLS.HOME);
    await expect(workNavLink).toHaveAttribute("href", URLS.WORK);
    await expect(aboutNavLink).toHaveAttribute("href", URLS.ABOUT);
    await expect(contactNavLink).toHaveAttribute("href", URLS.CONTACT);
    await expect(workButton).toHaveAttribute("href", URLS.WORK);
    await expect(contactButton).toHaveAttribute("href", URLS.CONTACT);
    // await expect(themeToggleButton).toHaveAttribute(
    //   "aria-label",
    //   "Toggle theme"
    // );

    // Test clicking the buttons
    await waitFor(async () => {
      await fireEvent.click(axdaStudioLogo);
      await fireEvent.click(homeNavLink);
      await fireEvent.click(workNavLink);
      await fireEvent.click(aboutNavLink);
      await fireEvent.click(contactNavLink);
      await fireEvent.click(workButton);
      await fireEvent.click(contactButton);
      // await fireEvent.click(themeToggleButton);
    });
  },
};
