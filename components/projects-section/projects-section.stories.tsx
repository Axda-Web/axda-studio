import type { Meta, StoryObj } from "@storybook/react";

import { ProjectsSection } from "./projects-section";
import ProjectCardStories from "../project-card/project-card.stories";

const meta = {
  title: "COMPOSITE COMPONENTS/ProjectsSection",
  component: ProjectsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    projects: {
      ...ProjectCardStories.argTypes,
    },
  },
} satisfies Meta<typeof ProjectsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projects: [
      {
        id: 1,
        title: "Movix",
        image: "/img/projects/movix.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 2,
        title: "Shubham",
        image: "/img/projects/shubham.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 3,
        title: "Li",
        image: "/img/projects/li.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 4,
        title: "Galina",
        image: "/img/projects/galina.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 5,
        title: "Nemo",
        image: "/img/projects/nemo.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 6,
        title: "Maxim",
        image: "/img/projects/maxim.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 7,
        title: "Buddha",
        image: "/img/projects/buddha.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 8,
        title: "Madeline",
        image: "/img/projects/madeline.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
      {
        id: 9,
        title: "Eyestetix",
        image: "/img/projects/eyestetix.jpg",
        github: "https://github.com/Axda-Web/axda-studio",
        live: "https://axda-studio.vercel.app/",
      },
    ],
  },
};
