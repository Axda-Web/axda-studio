import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { NavItems } from "./nav-items";

const meta = {
  title: "",
  component: NavItems,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof NavItems>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
