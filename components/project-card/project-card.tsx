"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Github, Play } from "lucide-react";
import { motion } from "motion/react";

const MotionImage = motion(Image);

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
  projectGithubLink,
  projectLiveLink,
}: ProjectCardProps) {
  return (
    <article>
      <Link
        data-testid={`project-card-link-${projectTitle}`}
        className="block overflow-hidden max-w-full"
        href={`/work/${projectId}`}
      >
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={projectImage}
          alt={projectTitle}
          width={735}
          height={735}
          className={cn(
            "block w-full max-w-[735px] max-h-[735px] object-cover object-center aspect-square",
            "md:hidden"
          )}
        />
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
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
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={projectImage}
          alt={projectTitle}
          width={416}
          height={416}
          className={cn(
            "hidden object-cover object-center aspect-square w-full",
            "lg:block lg:max-w-[416px] lg:max-h-[416px]"
          )}
        />
      </Link>
      <div className="flex justify-between items-center py-2">
        <h2 className={cn("font-bold text-xl")}>
          {projectTitle.toUpperCase()}
        </h2>
        <div className="flex items-center gap-x-2">
          <Button
            asChild
            variant="link"
            className="rounded-full px-2.5 cursor-pointer border-foreground"
          >
            <a
              data-testid={`project-card-github-link-${projectTitle}`}
              href={projectGithubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github data-testid="project-card-github-icon" />
            </a>
          </Button>
          <Button asChild className="rounded-full px-2.5 cursor-pointer">
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

// TODO: Find a better see live project button icon
// TODO: Find a better way to display the github button
