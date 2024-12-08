import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AxdaStudioLogo } from "./axda-studio-logo";

const meta = {
  title: "SIMPLE COMPONENTS/AxdaStudioLogo",
  component: AxdaStudioLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof AxdaStudioLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
