import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, within, expect } from "@storybook/test";
import { cn } from "@/lib/utils";

import { ContactForm } from "./contact-form";

const meta = {
  title: "COMPOSITE COMPONENTS/Contact Form",
  component: ContactForm,
  decorators: [
    (Story) => (
      <div className={cn("max-w-xl mx-auto", "md:mt-6", "lg:mt-8")}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByPlaceholderText("NAME");
    const emailInput = canvas.getByPlaceholderText("EMAIL");
    const phoneInput = canvas.getByPlaceholderText("PHONE");
    const messageInput = canvas.getByPlaceholderText("MESSAGE");
    const submitButton = canvas.getByRole("button", { name: /submit/i });

    await expect(nameInput).toBeInTheDocument();
    await expect(emailInput).toBeInTheDocument();
    await expect(phoneInput).toBeInTheDocument();
    await expect(messageInput).toBeInTheDocument();
    await expect(submitButton).toBeInTheDocument();

    await fireEvent.change(nameInput, { target: { value: "John Doe" } });
    await fireEvent.change(emailInput, {
      target: { value: "john.doe@example.com" },
    });
    await fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    await fireEvent.change(messageInput, {
      target: { value: "Hello, I'm interested in your services." },
    });

    await expect(nameInput).toHaveValue("John Doe");
    await expect(emailInput).toHaveValue("john.doe@example.com");
    await expect(phoneInput).toHaveValue("1234567890");
    await expect(messageInput).toHaveValue(
      "Hello, I'm interested in your services."
    );

    await fireEvent.click(submitButton);
  },
} satisfies Meta<typeof ContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
