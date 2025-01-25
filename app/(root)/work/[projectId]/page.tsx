import { AnimatedElement } from "@/components/animated-element";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";
import { MotionImage } from "@/components/motion-image";

export default function ProjectPage() {
  const mockedProjectData = {
    id: 3,
    title: "Li",
    description:
      "A high-performance e-commerce application built with Next.js and the React ecosystem. The project features server-side rendering for optimized SEO, dynamic routing for seamless navigation, and a scalable architecture. Key functionalities include a user-friendly product catalog, secure authentication, a responsive design, and fast checkout workflows. Designed for speed, accessibility, and an engaging user experience.",
    image: "/img/projects/li.jpg",
    tech: [
      "Next.js",
      "Tailwind",
      "Shadcn",
      "React",
      "TypeScript",
      "Framer Motion",
      "Neon postgres",
      "Vercel",
      "Drizzle",
      "NextAuth",
      "Stripe",
    ],
    type: "WEB APP",
    github: "https://github.com/Axda-Web/axda-studio",
    live: "https://axda-studio.vercel.app/",
  };

  return (
    <section
      className={cn(
        "mb-10 mt-10 flex flex-col gap-y-8 items-center",
        "xl:flex-row xl:mt-16 xl:gap-y-0 xl:gap-x-20"
      )}
    >
      <AnimatedElement
        data-testid="project-image"
        className={cn(
          "overflow-hidden w-full",
          "xl:flex-1 xl:max-h-[550px] xl:max-w-[550px]"
        )}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={mockedProjectData.image}
          alt="project image"
          width={550}
          height={550}
          className={cn(
            "block object-cover object-center aspect-square",
            "md:hidden"
          )}
        />
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={mockedProjectData.image}
          alt="project image"
          width={1000}
          height={1000}
          className={cn(
            "hidden object-cover object-center aspect-square",
            "md:block",
            "xl:hidden"
          )}
        />
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={mockedProjectData.image}
          alt="project image"
          width={550}
          height={550}
          className={cn(
            "hidden object-cover object-center aspect-square",
            "xl:block xl:h-[550px] xl:aspect-square"
          )}
        />
      </AnimatedElement>
      <div
        className={cn(
          "space-y-8",
          "xl:flex-1 xl:self-stretch xl:justify-between xl:flex xl:flex-col xl:gap-y-8"
        )}
      >
        <div className={cn("space-y-4")}>
          <AnimatedElement
            className={cn("flex justify-between items-baseline")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h1
              data-testid="project-title"
              className={cn("text-6xl font-bold", "md:text-8xl", "xl:text-9xl")}
            >
              {mockedProjectData.title}
            </h1>
            <span
              data-testid="project-type"
              className={cn("font-semibold text-muted-foreground")}
            >
              ({mockedProjectData.type})
            </span>
          </AnimatedElement>
          <AnimatedElement
            as="div"
            data-testid="project-tech-stack"
            className={cn("flex flex-wrap gap-2")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            {mockedProjectData.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </AnimatedElement>
          <AnimatedElement
            data-testid="project-description"
            as="p"
            className={cn(
              "text-md text-justify",
              "md:text-lg",
              "xl:text-start"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            {mockedProjectData.description}
          </AnimatedElement>
        </div>
        <AnimatedElement
          className={cn("flex items-center gap-x-4")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <Button
            asChild
            variant="outline"
            className={cn("rounded-full text-base")}
          >
            <a
              data-testid={`project-card-github-link`}
              href={mockedProjectData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={cn("hidden", "md:block")}>SEE</span> CODEBASE
              <Github data-testid="project-card-github-icon" />
            </a>
          </Button>
          <Button asChild className={cn("rounded-full text-base")}>
            <a
              data-testid={"project-card-play-button"}
              href={mockedProjectData.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={cn("hidden", "md:block")}>SEE</span> LIVE PROJECT
              <Play className="w-4 h-4" />
            </a>
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
