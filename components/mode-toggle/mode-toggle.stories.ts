import type { Meta, StoryObj } from "@storybook/react";

import { ModeToggle } from "./mode-toggle";

const meta = {
  title: "SIMPLE COMPONENTS/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { positionAbsolute: false },
} satisfies Meta<typeof ModeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    positionAbsolute: false,
  },
};

export const PositionAbsolute: Story = {
  args: { positionAbsolute: true },
};
