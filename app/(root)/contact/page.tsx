import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { cn } from "@/lib/utils";
import { AnimatedElement } from "@/components/animated-element";

export const metadata: Metadata = {
  title: "Axda Studio Dev | Contact",
  description:
    "Get in touch with a creative web developer specializing in fast, robust, and beautiful interfaces. Let's bring your ideas to life together!",
};

// TODO: Add svg pattern background behind the contact form

export default function ContactPage() {
  return (
    <div
      className={cn(
        "flex flex-col mt-10 gap-y-4 mb-10",
        "md:gap-y-10",
        "xl:flex-row xl:items-center xl:gap-x-24 xl:mt-32"
      )}
    >
      <div className={cn("space-y-4", "lg:flex-1")}>
        <AnimatedElement
          as="h1"
          className={cn(
            "text-6xl font-bold",
            "md:text-7xl",
            "md:text-9xl",
            "lg:font-bold"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          LET&apos;S CONNECT!
        </AnimatedElement>
        <AnimatedElement
          as="p"
          className={cn("text-lg", "md:text-3xl")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </AnimatedElement>
      </div>
      <AnimatedElement
        className={cn(
          "px-2 py-4 bg-foreground/20 rounded-md",
          "md:p-8 md:rounded-3xl",
          "xl:flex-1"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.4,
        }}
      >
        <ContactForm />
      </AnimatedElement>
    </div>
  );
}
