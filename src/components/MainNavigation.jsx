import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
