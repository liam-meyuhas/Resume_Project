import { Box, Typography } from "@mui/material";
import React from "react";
import "./resumeTemplate.css";
import PersonalInformation from "../ResumeFields/PersonalInformation/PersonalInformation";
import Experience from "../ResumeFields/Experience/Experience";
import Education from "../ResumeFields/Education/Education";
import Language from "../ResumeFields/Language/Language";
import Skills from "../ResumeFields/Skills/Skills";
import GeneralInformation from "../ResumeFields/GeneralInformation/GeneralInformation";

const ResumeTemplate = () => {
  return (
    <Box className="resumeContainer">
      <GeneralInformation />
      <PersonalInformation />
      <Experience />
      <Education />
      <Box className="lenguage-skills-container ">
        <Language />
        <Skills />
      </Box>
    </Box>
  );
};

export default ResumeTemplate;
