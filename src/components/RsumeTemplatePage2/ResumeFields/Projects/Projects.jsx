import React from "react";
import { useSelector } from "react-redux";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Box, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";

const Projects = () => {
  const projectsData = useSelector((state) => state.resume["projects"]);

  return (
    <div>
      {projectsData &&
        projectsData.map(
          (item) =>
            item.resumeData && (
              <Box className={classes.templateContainer}>
                <Typography sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
                  PROJECTS
                </Typography>
                <Box className={classes.mainContent}>
                  <AccountTreeIcon />
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {item.resumeData.name}
                  </Typography>
                </Box>
                <Box className={classes.date}>
                  <Typography>
                    {item.resumeData.startDate} - {item.resumeData.endDate}
                  </Typography>
                </Box>
              </Box>
            )
        )}
    </div>
  );
};

export default Projects;
