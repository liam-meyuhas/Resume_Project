import React from "react";
import { useSelector } from "react-redux";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";

const Volunteer = () => {
  const volunteerData = useSelector((state) => state.resume["volunteer"]);

  return (
    <div>
      {volunteerData &&
        volunteerData.map(
          (item) =>
            item.resumeData && (
              <Box className={classes.templateContainer}>
                <Typography sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
                  VOLUNTEER
                </Typography>
                <Box className={classes.mainContent}>
                  <VolunteerActivismIcon />
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {item.resumeData.projectName}
                  </Typography>
                  <Typography>{item.resumeData.job}</Typography>
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

export default Volunteer;
