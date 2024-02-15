import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <MenuItem key={index} href={link.path} title={link.title} />
      ))}
    </ul>
  );
};

const MenuItem = React.memo(({ href, title }) => {
  return (
    <li>
      <NavLink href={href} title={title} />
    </li>
  );
});

MenuItem.displayName = 'MenuItem';

MenuOverlay.displayName = 'MenuOverlay';

export default MenuOverlay;
