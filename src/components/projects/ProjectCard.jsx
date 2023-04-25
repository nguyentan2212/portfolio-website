import React from "react";

function ProjectCard(props) {
  const { image, category, title, link } = props;

  return (
    <div className="shadow-xl">
      <img src={image} alt={title} />
      <div className="flex flex-col gap-5 px-4 py-6">
        <p className="text-sm font-extrabold uppercase">{category}</p>
        <p className="text-2xl font-semibold capitalize">{title}</p>
        <a
          className="py-2 border-2 border-black rounded-md px-7 w-fit hover:bg-secondary"
          href={link}
        >
          Read Case Study
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
