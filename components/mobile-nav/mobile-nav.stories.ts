import type { Meta, StoryObj } from "@storybook/react";

import { MobileNav } from "./mobile-nav";

const meta = {
  title: "SIMPLE COMPONENTS/MobileNav",
  component: MobileNav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
