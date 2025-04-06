import React from "react";
import { Link } from "react-router-dom";
import "./mainNavigation.css";
import { Avatar } from "@mui/material";
import resumeImage from "../../assets/resumeImage.jpg";
import Theme from "../UI/ThemeProvider/Theme";

const MainNavigation = () => {
  return (
    <div className="linksRoot">
      <Link to="/resume">
        <Avatar
          sx={{ border: "1px solid gray" }}
          alt="Resume Image"
          src={resumeImage}
        />
      </Link>
      <Link to="/">Home</Link>
      <Theme />
    </div>
  );
};

export default MainNavigation;
