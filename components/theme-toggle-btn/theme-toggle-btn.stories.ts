import type { Meta, StoryObj } from "@storybook/react";

import { ThemeToggleBtn } from "./theme-toggle-btn";

const meta = {
  title: "SIMPLE COMPONENTS/ThemeToggleBtn",
  component: ThemeToggleBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fillColor: {
      control: {
        type: "select",
        options: ["foreground", "background"],
      },
    },
  },
} satisfies Meta<typeof ThemeToggleBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MobileNav: Story = {
  args: {
    fillColor: "foreground",
  },
};

export const Footer: Story = {
  args: {
    fillColor: "background",
  },
};
