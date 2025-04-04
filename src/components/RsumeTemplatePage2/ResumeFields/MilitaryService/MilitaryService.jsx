import React from "react";
import { useSelector } from "react-redux";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Box, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";

const MilitaryService = () => {
  const militaryServiceData = useSelector(
    (state) => state.resume["militaryService"]
  );

  return (
    <div>
      {militaryServiceData &&
        militaryServiceData.map(
          (item) =>
            item.resumeData && (
              <Box className={classes.templateContainer}>
                <Typography sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
                  MILITARY SERVICE
                </Typography>
                <Box className={classes.mainContent}>
                  <MilitaryTechIcon />
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {item.resumeData.job}
                  </Typography>
                  <Typography>
                    סיווג: {item.resumeData.SecurityClearance}
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

export default MilitaryService;
