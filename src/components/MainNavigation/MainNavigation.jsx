import React from "react";
import { Link } from "react-router-dom";
import "./mainNavigation.css";
const MainNavigation = () => {
  return (
    <ul className="linksRoot">
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
