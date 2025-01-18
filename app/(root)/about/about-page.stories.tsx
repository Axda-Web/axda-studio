import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { withHomeLayoutDecorator } from "../../../.storybook/decorators";
import { fireEvent, waitFor, within, expect } from "@storybook/test";
import { URLS } from "../../../constants/nav";

import AboutPage from "./page";

const meta = {
  title: "SCREENS/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [withHomeLayoutDecorator],
} satisfies Meta<typeof AboutPage>;

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
    const aboutDevIllustration = canvas.getByTestId("about-dev-illustration");
    await expect(aboutDevIllustration).toBeInTheDocument();

    const aboutTitle = canvas.getByText(/about/i);
    await expect(aboutTitle).toBeInTheDocument();

    const aboutParagraph = canvas.getByText(
      /Let's create something exceptional together!/i
    );
    await expect(aboutParagraph).toBeInTheDocument();

    // FOOTER
    const themeToggleButton = canvas.getByText(/toggle theme/i);

    await waitFor(async () => {
      await fireEvent.click(themeToggleButton);
    });
  },
};
