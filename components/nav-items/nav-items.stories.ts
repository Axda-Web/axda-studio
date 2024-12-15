import type { Meta, StoryObj } from "@storybook/react";
import { withSheetDecorator } from "../../.storybook/decorators";

import { NavItems } from "./nav-items";

const meta = {
  title: "SIMPLE COMPONENTS/NavItems",
  component: NavItems,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { inSheet: false },
} satisfies Meta<typeof NavItems>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { inSheet: false },
};

export const InSheet: Story = {
  args: { inSheet: true },
  decorators: [withSheetDecorator],
};
