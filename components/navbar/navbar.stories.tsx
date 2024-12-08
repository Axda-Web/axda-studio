import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { cn } from "@/lib/utils";

import { Navbar } from "./navbar";

const meta = {
  title: "COMPOSITE COMPONENTS/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <div className={cn("max-w-7xl mx-auto", "md:mt-6", "lg:mt-8")}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "padded",
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
