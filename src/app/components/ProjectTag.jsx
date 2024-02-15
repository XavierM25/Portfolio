import React from "react";

const ProjectTag = React.memo(({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#121212] border-green-500"
    : "text-[#121212] border-slate-600 hover:border-[#d372dc]";

  const handleClick = React.useCallback(() => {
    onClick(name);
  }, [name, onClick]);

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-1xl cursor-pointer`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
});

ProjectTag.displayName = 'ProjectTag';

export default ProjectTag;
