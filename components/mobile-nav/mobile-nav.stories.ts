import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MobileNav } from "./mobile-nav";

const meta = {
  title: "",
  component: MobileNav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof MobileNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
