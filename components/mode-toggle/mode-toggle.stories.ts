import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ModeToggle } from "./mode-toggle";

const meta = {
  title: "SIMPLE COMPONENTS/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof ModeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
