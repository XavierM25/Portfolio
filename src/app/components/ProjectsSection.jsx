"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "FoodV Project Renacyt",
    description: "Project 1 Description",
    image: "/images/projects/1.png",
    tag: ["Todo", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todo");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-[#121212] mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-5 py-10">
        <ProjectTag
          onClick={handleTagChange}
          name="Todo"
          isSelected={tag === "Todo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
