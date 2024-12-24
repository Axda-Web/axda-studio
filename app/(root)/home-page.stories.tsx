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
    const contactCTA = canvas.getByRole("link", { name: /CONTACT/i });
    const workCTA = canvas.getByRole("link", { name: /SEE ALL WORK/i });
    // const themeToggleButton = canvas.getByRole("button", {
    //   name: /toggle theme/i,
    // });

    await expect(axdaStudioLogo).toHaveAttribute("href", URLS.HOME);
    await expect(homeNavLink).toHaveAttribute("href", URLS.HOME);
    await expect(workNavLink).toHaveAttribute("href", URLS.WORK);
    await expect(aboutNavLink).toHaveAttribute("href", URLS.ABOUT);
    await expect(contactCTA).toHaveAttribute("href", URLS.CONTACT);
    await expect(workCTA).toHaveAttribute("href", URLS.WORK);
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
      await fireEvent.click(workCTA);
      await fireEvent.click(contactCTA);
      // await fireEvent.click(themeToggleButton);
    });
  },
};
