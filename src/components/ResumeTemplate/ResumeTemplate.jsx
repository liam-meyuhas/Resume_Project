import { Box, Typography } from "@mui/material";
import React from "react";
import "./resumeTemplate.css";
import PersonalInformation from "../ResumeFields/PersonalInformation/PersonalInformation";
import Experience from "../ResumeFields/Experience/Experience";
import Education from "../ResumeFields/Education/Education";
import Language from "../ResumeFields/Language/Language";
import Skills from "../ResumeFields/Skills/Skills";
import GeneralInformation from "../ResumeFields/GeneralInformation/GeneralInformation";
import Volunteer from "../ResumeFields/Volunteer/Volunteer";
import MilitaryService from "../ResumeFields/MilitaryService/MilitaryService";
import Certificate from "../ResumeFields/Certificate/Certificate";
import Award from "../ResumeFields/Award/Award";
import Projects from "../ResumeFields/Projects/Projects";
import Publication from "../ResumeFields/Publication/Publication";
import Hobbies from "../ResumeFields/Hobbies/Hobbies";

const ResumeTemplate = () => {
  return (
    <Box className="resumeContainer">
      <GeneralInformation />
      <PersonalInformation />
      <Experience />
      <Education />
      <Hobbies />
      <Publication />
      <Projects />
      <Award />
      <Certificate />
      <MilitaryService />
      <Volunteer />
      <Box className="lenguage-skills-container ">
        <Language />
        <Skills />
      </Box>
    </Box>
  );
};

export default ResumeTemplate;
