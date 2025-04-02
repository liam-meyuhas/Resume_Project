import { Box } from "@mui/material";
import React from "react";
import "./resumeTemplate2.css";
import Skills from "../ResumeFields/Skills/Skills";
import Language from "../ResumeFields/Language/Language";
import Certificate from "../ResumeFields/Certicficate/Certificate";
import Hobbies from "../ResumeFields/Hobbies/Hobbies";

const ResumeTemplate2 = () => {
  return (
    <Box className="template-container">
      <Box>grgrew</Box>
      <Box className="side-content">
        <Skills />
        <Language />
        <Certificate />
        <Hobbies />
      </Box>
    </Box>
  );
};

export default ResumeTemplate2;
