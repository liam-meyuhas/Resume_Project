import { Box } from "@mui/material";
import React from "react";
import "./resumeTemplate2.css";
import Skills from "../ResumeFields/Skills/Skills";
import Language from "../ResumeFields/Language/Language";
import Certificate from "../ResumeFields/Certicficate/Certificate";
import Hobbies from "../ResumeFields/Hobbies/Hobbies";
import Experience from "../ResumeFields/Experience/Experience";
import Education from "../ResumeFields/Education/Education";
import MilitaryService from "../ResumeFields/MilitaryService/MilitaryService";
import Projects from "../ResumeFields/Projects/Projects";
import Publication from "../ResumeFields/Publication/Publication";
import Volunteer from "../ResumeFields/Volunteer/Volunteer";
import PersonalInformaion from "../ResumeFields/PersonalInformation/PersonalInformaion";
import GeneralInformation from "../ResumeFields/GeneralInformation/GeneralInformation";

const ResumeTemplate2 = () => {
  return (
    <Box className="template-container">
      <Box className="midel-content">
        <GeneralInformation />
        <PersonalInformaion />
        <Experience />
        <Education />
        <Volunteer />
        <MilitaryService />
        <Projects />
        <Publication />
      </Box>
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
