import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { URLS } from "@/constants/nav";
import { AnimatedElement } from "@/components/animated-element";

export default function HomePage() {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center items-center max-w-3xl mx-auto gap-y-6",
        "md:gap-y-8",
        "lg:gap-y-10"
      )}
    >
      <AnimatedElement
        as="h1"
        className={cn(
          "font-knewave text-5xl text-center",
          "md:text-6xl",
          "lg:text-8xl"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        Fast, Robust, and Elegant UI.
      </AnimatedElement>
      <AnimatedElement
        as="p"
        className={cn(
          "text-center text-xl leading-6 mx-auto font-medium",
          "md:text-2xl md:max-w-xl",
          "lg:max-w-2xl"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        Crafting custom interfaces that blend speed, durability, and style for
        an exceptional user experience.
      </AnimatedElement>
      <AnimatedElement
        as="div"
        className="flex justify-center items-center flex-row gap-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.4,
        }}
      >
        <Button
          data-testid="contact-cta"
          asChild
          className="rounded-none text-base"
          size="lg"
        >
          <Link href={URLS.CONTACT}>Contact</Link>
        </Button>
        <Button
          asChild
          className="rounded-none text-base"
          size="lg"
          variant="outline"
        >
          <Link href={URLS.WORK}>My Work</Link>
        </Button>
      </AnimatedElement>
    </div>
  );
}
