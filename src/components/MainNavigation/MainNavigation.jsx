import React from "react";
import { Link } from "react-router-dom";
import "./mainNavigation.css";
import { Avatar } from "@mui/material";
import resumeImage from "../../assets/resumeImage.jpg";

const MainNavigation = () => {
  return (
    <ul className="linksRoot">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/resume">
          <Avatar
            sx={{ border: "1px solid gray" }}
            alt="Resume Image"
            src={resumeImage}
          />
        </Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
