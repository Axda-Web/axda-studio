import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { URLS } from "@/constants/nav";
import { AnimatedElement } from "@/components/animated-element";
import { UIIllustration } from "@/components/ui-illustration";

// TODO: Change font size | font weight | font family of the hero section subtitle
// TODO: Improve responsiveness of the hero section title (adjust max-width of the container)
// TODO: Add Performance, Robustness, Accessibility, Aesthetics sections (with scrol animations + sticky header)

export default function HomePage() {
  return (
    <div
      className={cn(
        "flex mt-28 flex-col justify-center items-center max-w-5xl mx-auto gap-y-6",
        "md:gap-y-8"
      )}
    >
      <AnimatedElement
        as="h1"
        className={cn(
          "font-extrabold text-4xl text-center",
          "md:text-7xl",
          "lg:text-9xl"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {/* Fast, Robust, & Elegant <UIIllustration />. */}
        FAST, ROBUST, & ELEGANT <UIIllustration />.
      </AnimatedElement>
      <AnimatedElement
        as="p"
        className={cn(
          "text-center text-xl leading-6 mx-auto",
          "md:text-2xl md:max-w-xl",
          "lg:text-3xl lg:max-w-3xl"
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
          asChild
          className="rounded-full text-base text-foreground border-foreground hover:text-foreground hover:bg-foreground/10"
          size="lg"
          variant="outline"
        >
          <Link href={URLS.WORK}>SEE ALL WORK</Link>
        </Button>
      </AnimatedElement>
    </div>
  );
}
