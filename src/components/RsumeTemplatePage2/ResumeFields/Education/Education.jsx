import React from "react";
import { useSelector } from "react-redux";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const Education = () => {
  const educationData = useSelector((state) => state.resume["education"]);

  return (
    <div>
      {educationData &&
        educationData.map(
          (item) =>
            item.resumeData && (
              <Box key={item.id} className={classes.templateContainer}>
                <Typography sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
                  EDUCATION
                </Typography>
                <Box className={classes.mainContent}>
                  <MenuBookIcon />
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {item.resumeData.Degree}
                  </Typography>
                  <Typography>
                    {item.resumeData.EducationalInstitution}
                  </Typography>
                </Box>
                <Typography>
                  {item.resumeData.startDate} - {item.resumeData.endDate}
                </Typography>
                <Box className={classes.date}>
                  <Typography>
                    תחום לימוד: {item.resumeData.FieldStudy}
                  </Typography>
                </Box>
                <Box className={classes.worker}>
                  <Typography> :עובד כאן</Typography>
                  <Typography>
                    {item.resumeData.isWorkHere === "on" ||
                    item.resumeData.isWorkHere === "true" ? (
                      <CheckBoxIcon className={classes.iconWork} />
                    ) : (
                      <CancelPresentationIcon
                        className={classes.iconNotWorkHere}
                      />
                    )}
                  </Typography>
                </Box>
              </Box>
            )
        )}
    </div>
  );
};

export default Education;
