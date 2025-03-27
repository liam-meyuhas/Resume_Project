import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./projects.css";

const Projects = () => {
  const resume = useSelector((state) => state.resume);
  const projectsData = resume["projects"];

  return (
    <Box className="projects-container">
      <Typography component="h1">פרויקטים</Typography>
      <Box className="projects-fields-container">
        {projectsData &&
          projectsData.map((item) => (
            <>
              {item.resumeData && (
                <Box key={item.id} className="volunteer-fields">
                  <Typography>
                    {item.resumeData?.startDate}-{item.resumeData?.endDate}
                  </Typography>
                  <Typography>{item.resumeData?.name}</Typography>
                </Box>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Projects;
