import type { Meta, StoryObj } from "@storybook/react";

import { ContactCta } from "./contact-cta";

const meta = {
  title: "SIMPLE COMPONENTS/ContactCta",
  component: ContactCta,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
