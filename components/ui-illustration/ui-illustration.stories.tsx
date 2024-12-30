import type { Meta, StoryObj } from "@storybook/react";

import { UIIllustration } from "./ui-illustration";

const meta = {
  title: "SIMPLE COMPONENTS/UIIllustration",
  component: UIIllustration,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UIIllustration>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
