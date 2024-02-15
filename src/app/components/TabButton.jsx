import React from 'react'

const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active
    ? "text-[#121212] border-b border-green-500"
    : "text-[#121212]";

  return (
    <button className={`mr-6 font-semibold hover:text-[#d372dc] ${buttonClasses}`} onClick={selectTab}>
          {children}
  
    </button>
  );
};

export default TabButton
