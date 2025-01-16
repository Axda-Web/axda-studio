"use server";

import { z } from "zod";
import { actionClient } from "./safe-action";

const schema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  email: z.string().email({ message: "Email is not valid" }),
  phone: z
    .string()
    .min(10, { message: "Phone number is not valid" })
    .optional(),
  message: z
    .string()
    .min(10, { message: "Message is not valid" })
    .max(500, { message: "Message is too long" }),
});

export const contactAction = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { username, email, phone, message } }) => {
    console.log(username, email, phone, message);

    // TODO: Handle server side form validation
    // TODO: Save to database AND/OR send email (Resend)

    throw new Error("Test error");

    return { message: `Hello ${username}!` };
  });
