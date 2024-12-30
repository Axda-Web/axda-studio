import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";

import { ProjectsSection } from "@/components/projects-section";

export const metadata: Metadata = {
  title: "Axda Studio Dev | Work",
  description:
    "Explore my portfolio of fast, robust, and beautiful web interfaces. Showcasing innovative projects that combine creative design with seamless functionality.",
};

export default function WorkPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Movix",
      image: "/img/projects/movix.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 2,
      title: "Shubham",
      image: "/img/projects/shubham.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 3,
      title: "Li",
      image: "/img/projects/li.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 4,
      title: "Galina",
      image: "/img/projects/galina.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 5,
      title: "Nemo",
      image: "/img/projects/nemo.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 6,
      title: "Maxim",
      image: "/img/projects/maxim.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 7,
      title: "Buddha",
      image: "/img/projects/buddha.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 8,
      title: "Madeline",
      image: "/img/projects/madeline.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
    {
      id: 9,
      title: "Eyestetix",
      image: "/img/projects/eyestetix.jpg",
      github: "https://github.com/Axda-Web/axda-studio",
      live: "https://axda-studio.vercel.app/",
    },
  ];

  return (
    <div className="mb-6">
      <PageTitle title="WORK" />
      <ProjectsSection projects={projects} />
    </div>
  );
}
