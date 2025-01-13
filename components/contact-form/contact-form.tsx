"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

// TODO: Handle server side form validation

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { contactAction } from "@/actions";

const formSchema = z.object({
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

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    execute(values);
  }

  const { execute } = useAction(contactAction, {
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "Talk to you soon!",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => onSubmit(form.getValues())}
          >
            Try again
          </ToastAction>
        ),
      });
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("border border-foreground p-4 rounded")}
                  placeholder="NAME"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("border border-foreground p-4 rounded")}
                  placeholder="EMAIL"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn("border border-foreground p-4 rounded")}
                  placeholder="PHONE"
                  type="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className={cn(
                    "border border-foreground p-4 resize-none rounded"
                  )}
                  placeholder="MESSAGE"
                  rows={7}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={cn("rounded-full text-base px-8 self-end")}
          type="submit"
        >
          SUBMIT <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </Form>
  );
}
