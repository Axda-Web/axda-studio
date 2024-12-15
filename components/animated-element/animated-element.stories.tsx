import type { Meta, StoryObj } from "@storybook/react";
import { cn } from "@/lib/utils";

import { AnimatedElement } from "./animated-element";

const meta = {
  title: "SIMPLE COMPONENTS/AnimatedElement",
  component: AnimatedElement,
  decorators: [
    (Story) => (
      <div className={cn("max-w-3xl mx-auto", "md:mt-6", "lg:mt-8")}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AnimatedElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    as: "h1",
    className: cn(
      "font-knewave text-5xl text-center",
      "md:text-6xl",
      "lg:text-8xl"
    ),
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
    children: "Fast, Robust, and Elegant UI.",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
    className: cn(
      "text-center text-xl leading-6 mx-auto italic",
      "md:text-2xl md:max-w-xl",
      "lg:max-w-2xl"
    ),
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
    children:
      "Crafting custom interfaces that blend speed, durability, and style for an exceptional user experience.",
  },
};
