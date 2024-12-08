import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { withHomeLayoutDecorator } from "../../.storybook/decorators";
import { fireEvent, waitFor, within } from "@storybook/test";

import HomePage from "./page";

const meta = {
  title: "SCREENS/HomePage",
  component: HomePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [withHomeLayoutDecorator],
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      await fireEvent.click(canvas.getByText("My Work"));
    });
  },
};
