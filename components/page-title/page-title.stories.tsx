import type { Meta, StoryObj } from "@storybook/react";

import { PageTitle } from "./page-title";

const meta = {
  title: "SIMPLE COMPONENTS/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Page Title",
  },
};
