import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { withHomeLayoutDecorator } from "../../../../.storybook/decorators";
import { fireEvent, waitFor, within, expect } from "@storybook/test";
import { URLS } from "../../../../constants/nav";

import ProjectPage from "./page";

const meta = {
  title: "SCREENS/ProjectPage",
  component: ProjectPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [withHomeLayoutDecorator],
} satisfies Meta<typeof ProjectPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    console.log("🚀 ~ play: ~ canvas:", canvas);

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

    const projectGithubLink = canvas.getByRole("link", {
      name: /see codebase/i,
    });
    await expect(projectGithubLink).toBeInTheDocument();

    const projectLiveLink = canvas.getByRole("link", {
      name: /see live project/i,
    });
    await expect(projectLiveLink).toBeInTheDocument();

    // FOOTER
    const themeToggleButton = canvas.getByText(/toggle theme/i);

    await waitFor(async () => {
      await fireEvent.click(themeToggleButton);
    });
  },
};
