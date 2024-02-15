import React from 'react'

const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active
    ? "text-[#121212] border-b border-green-500"
    : "text-[#ADB7BE]";

  return (
    <button className={`mr-6 font-semibold hover:text-[#000000] ${buttonClasses}`} onClick={selectTab}>
          {children}
  
    </button>
  );
};

export default TabButton
