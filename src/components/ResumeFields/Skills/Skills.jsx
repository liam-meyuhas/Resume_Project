import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./skills.css";
const Skills = () => {
  const resume = useSelector((state) => state.resume);
  const skillsData = resume["skills"];

  return (
    <Box className="skills-container">
      <Typography component="h1">קישורים</Typography>
      <Box className="skills-fields">
        {skillsData &&
          skillsData.map((item) => (
            <>
              {item.resumeData && (
                <Box key={item}>{item.resumeData?.Skills}</Box>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Skills;
