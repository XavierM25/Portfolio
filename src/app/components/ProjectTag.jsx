import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#121212] border-green-500"
    : "text-[#121212] border-slate-600 hover:border-[#d372dc]";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-1xl cursos-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;