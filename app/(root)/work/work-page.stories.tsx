import type { Meta, StoryObj } from "@storybook/react";
import { withHomeLayoutDecorator } from "../../../.storybook/decorators";
import { fireEvent, waitFor, within, expect } from "@storybook/test";
import { URLS } from "../../../constants/nav";

import WorkPage from "./page";

const meta = {
  title: "SCREENS/WorkPage",
  component: WorkPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withHomeLayoutDecorator],
} satisfies Meta<typeof WorkPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

    // FOOTER
    const themeToggleButton = canvas.getByText(/toggle theme/i);

    await waitFor(async () => {
      await fireEvent.click(themeToggleButton);
    });

    // WORK SECTION

    // Movix (first project)
    const movixProjectTitle = canvas.getByText(/movix/i);
    expect(movixProjectTitle).toBeInTheDocument();

    const movixProjectLink = canvas.getByTestId(/project-card-link-movix/i);
    expect(movixProjectLink).toBeInTheDocument();
    expect(movixProjectLink).toHaveAttribute("href", "/work/1");
    await fireEvent.click(movixProjectLink);

    const movixProjectImage = canvas.getAllByAltText(/movix/i)[0];
    expect(movixProjectImage).toBeInTheDocument();

    const movixGithubLinkIcon = canvas.getAllByTestId(
      "project-card-github-icon"
    )[0];
    expect(movixGithubLinkIcon).toBeInTheDocument();

    const movixGithubLink = canvas.getByTestId(
      "project-card-github-link-Movix"
    );
    expect(movixGithubLink).toBeInTheDocument();
    expect(movixGithubLink).toHaveAttribute(
      "href",
      "https://github.com/Axda-Web/axda-studio"
    );

    const movixPlayButton = canvas.getByTestId(
      "project-card-play-button-Movix"
    );
    expect(movixPlayButton).toBeInTheDocument();
    expect(movixPlayButton).toHaveAttribute(
      "href",
      "https://axda-studio.vercel.app/"
    );

    // Eyestetix (last project)
    const eyestetixProjectTitle = canvas.getByText(/eyestetix/i);
    expect(eyestetixProjectTitle).toBeInTheDocument();

    const eyestetixProjectLink = canvas.getByTestId(
      /project-card-link-eyestetix/i
    );
    expect(eyestetixProjectLink).toBeInTheDocument();
    expect(eyestetixProjectLink).toHaveAttribute("href", "/work/9");
    await fireEvent.click(eyestetixProjectLink);

    const eyestetixProjectImage = canvas.getAllByAltText(/eyestetix/i)[0];
    expect(eyestetixProjectImage).toBeInTheDocument();

    const eyestetixGithubLinkIcon = canvas.getAllByTestId(
      "project-card-github-icon"
    )[0];
    expect(eyestetixGithubLinkIcon).toBeInTheDocument();

    const eyestetixGithubLink = canvas.getByTestId(
      "project-card-github-link-Eyestetix"
    );
    expect(eyestetixGithubLink).toBeInTheDocument();
    expect(eyestetixGithubLink).toHaveAttribute(
      "href",
      "https://github.com/Axda-Web/axda-studio"
    );

    const eyestetixPlayButton = canvas.getByTestId(
      "project-card-play-button-Eyestetix"
    );
    expect(eyestetixPlayButton).toBeInTheDocument();
    expect(eyestetixPlayButton).toHaveAttribute(
      "href",
      "https://axda-studio.vercel.app/"
    );
  },
};
