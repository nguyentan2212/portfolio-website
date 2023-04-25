import React from "react";
import { Icon } from "@iconify/react";
import ProjectCard from "./ProjectCard";
import fintech from "@/assets/projects/fintech.png";
import power from "@/assets/projects/power.png";
import shopify from "@/assets/projects/shopify.png";

const projects = [
  {
    image: shopify,
    category: "shopify",
    title: "Furniture Store Customized Website",
    link: "#",
  },
  {
    image: fintech,
    category: "fintech",
    title: "Fintech Service Website Design",
    link: "#",
  },
  {
    image: power,
    category: "power",
    title: "Digital Services & Products Website",
    link: "#",
  },
];

function Projects() {
  return (
    <div className="px-[88px]">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-5xl font-extrabold uppercase grow">feature projects</h1>
        <div className="flex flex-row items-center">
          <p className="text-lg font-semibold capitalize">see all projects</p>
          <a className="p-3 ml-4 border-2 border-black btn">
            <Icon icon="la:long-arrow-alt-right" width="40" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-16">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            image={project.image}
            category={project.category}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
