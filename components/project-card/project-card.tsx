import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { MotionLink } from "@/components/motion-link";
import Image from "next/image";

// TODO: Find a better see live project button icon
// TODO: rename motion-image file

interface ProjectCardProps {
  projectId: number;
  projectTitle: string;
  projectImage: string;
  projectGithubLink: string;
  projectLiveLink: string;
}

export function ProjectCard({
  projectId,
  projectTitle,
  projectImage,
  projectLiveLink,
}: ProjectCardProps) {
  return (
    <article>
      <div className={cn("overflow-hidden")}>
        <MotionLink
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          data-testid={`project-card-link-${projectTitle}`}
          className="group block overflow-hidden max-w-full relative"
          href={`/work/${projectId}`}
        >
          <Image
            src={projectImage}
            alt={projectTitle}
            width={735}
            height={735}
            className={cn(
              "block w-full max-w-[735px] max-h-[735px] object-cover object-center aspect-square",
              "md:hidden"
            )}
          />
          <Image
            src={projectImage}
            alt={projectTitle}
            width={440}
            height={440}
            className={cn(
              "hidden object-cover object-center aspect-square w-full",
              "md:block md:max-w-[440px] md:max-h-[440px]",
              "lg:hidden"
            )}
          />
          <Image
            src={projectImage}
            alt={projectTitle}
            width={416}
            height={416}
            className={cn(
              "hidden object-cover object-center aspect-square w-full",
              "lg:block lg:max-w-[416px] lg:max-h-[416px]"
            )}
          />
          <div className="absolute inset-0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <span
              className={cn(
                "text-transparent group-hover:text-white transition-colors underline underline-offset-4 font-semibold"
              )}
            >
              SEE PROJECT DETAILS
            </span>
          </div>
        </MotionLink>
      </div>
      <div className="flex justify-between items-center py-2">
        <h2 className={cn("font-bold text-xl")}>
          {projectTitle.toUpperCase()}
        </h2>
        <div className="flex items-center gap-x-2">
          <Button asChild className="rounded-full px-2.5">
            <a
              data-testid={`project-card-play-button-${projectTitle}`}
              href={projectLiveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
