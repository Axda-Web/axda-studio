import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedElement } from "@/components/animated-element";

// TODO: Review responsiveness appearance (mobile & tablet)
// TODO: Replace illustration by portrait photo
// TODO: Add a 'tech stack' section

export const metadata: Metadata = {
  title: "Axda Studio Dev | About",
  description:
    "Learn more about my journey as a creative web developer. Passionate about crafting fast, robust, and beautiful user interfaces that deliver exceptional experiences.",
};

export default function AboutPage() {
  return (
    <section
      className={cn("my-10 flex flex-col items-center", "lg:flex-row lg:mt-16")}
    >
      <AnimatedElement
        className={cn("flex-1 hidden", "xl:block")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Image
          data-testid="about-dev-illustration"
          src="/svg/about/avatar.svg"
          alt="avatar illustration"
          width={550}
          height={550}
          className={cn("block flex-1 lg:h-[550px] w-auto")}
        />
      </AnimatedElement>
      <div className={cn("lg:flex-1 self-start")}>
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
          ABOUT
        </AnimatedElement>
        <div
          className={cn("space-y-3 text-justify", "sm:text-xl", "md:text-xl")}
        >
          <AnimatedElement
            as="p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            I am a Frontend Developer with five years dedicated to building
            digital experiences that prioritize performance, scalability, and
            visual excellence.
          </AnimatedElement>
          <AnimatedElement
            as="p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            My journey has taken me across borders, working in dynamic tech hubs
            like Dublin and Amsterdam, where I&apos;ve honed my skills and
            embraced diverse perspectives. I’ve collaborated on projects
            spanning SaaS, e-commerce, and media tech, building products that
            grow and drive impact.
          </AnimatedElement>
          <AnimatedElement
            as="p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            As a React expert, I specialize in crafting modern web applications
            with Nextjs and building seamless mobile experiences using Expo.
            Beyond development, I leverage valuable expertise in Psychology,
            Marketing and Design, enabling me to approach projects holistically
            and deliver solutions that truly resonate.
          </AnimatedElement>
          <AnimatedElement
            as="p"
            className={cn("font-bold")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            Let&apos;s create something exceptional together!
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
