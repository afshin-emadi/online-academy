import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ title, address }) {
  return (
    <li className="px-4">
      <NavLink to={address}>{title}</NavLink>
    </li>
  );
}

export default NavItem;
