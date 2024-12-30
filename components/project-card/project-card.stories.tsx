import type { Meta, StoryObj } from "@storybook/react";

import { ProjectCard } from "./project-card";

const meta = {
  title: "SIMPLE COMPONENTS/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    projectId: {
      control: {
        type: "number",
      },
    },
    projectTitle: {
      control: {
        type: "text",
      },
    },
    projectImage: {
      control: {
        type: "text",
      },
    },
    projectGithubLink: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectId: 1,
    projectTitle: "Project Title",
    projectImage: "https://via.placeholder.com/150",
    projectGithubLink: "https://github.com/axda-studio",
    projectLiveLink: "https://axda-studio.com",
  },
};
