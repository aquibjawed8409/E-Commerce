import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = () => {
  return (
    <NavLink to="/">
      <span className="text-blue-800">Home</span>
    </NavLink>
  );
};

export default PageNavigation;
