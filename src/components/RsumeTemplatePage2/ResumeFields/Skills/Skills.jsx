import React from "react";
import { Box, Typography } from "@mui/material";
import "../resumeFields.css";
import { useSelector } from "react-redux";

const Skills = () => {
  const resume = useSelector((state) => state.resume);
  const skillsResumeData = resume.skills;
  console.log(skillsResumeData);
  return (
    <Box className="container">
      <header>SKILLS</header>
      <Box className="form-data-row">
        {skillsResumeData &&
          skillsResumeData.map((skill) => (
            <>
              {skill.resumeData && (
                <Typography key={skill.id}>
                  {skill.resumeData?.Skills}
                </Typography>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Skills;
