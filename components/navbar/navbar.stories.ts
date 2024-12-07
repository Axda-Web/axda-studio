import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Navbar } from "./navbar";

const meta = {
  title: "",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
