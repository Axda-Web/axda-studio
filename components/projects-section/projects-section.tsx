"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "../project-card";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-8">
      <motion.ul
        className={cn(
          "grid grid-cols-1 gap-4",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
          hidden: {},
        }}
      >
        {projects.map((project) => (
          <motion.li
            key={project.id}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
              hidden: {
                opacity: 0,
                y: 20,
              },
            }}
          >
            <ProjectCard
              projectId={project.id}
              projectTitle={project.title}
              projectImage={project.image}
              projectGithubLink={project.github}
              projectLiveLink={project.live}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
