import React from "react";
import { Box, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { LinkedIn } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";

const PersonalInformaion = () => {
  const personalInformationData = useSelector(
    (state) => state.resume["personalInformation"]
  );
  console.log(personalInformationData);
  return (
    <div>
      {personalInformationData &&
        personalInformationData.map(
          (item) =>
            item.resumeData && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: "1rem",
                }}
              >
                <Box className={classes.mainContent}>
                  <PhoneEnabledIcon />
                  <Typography>{item.resumeData.phone}</Typography>
                  <LocationOnIcon />
                  <Typography>{item.resumeData.address}</Typography>
                </Box>
                <Box className={classes.mainContent}>
                  <LinkedIn />
                  <Typography>{item.resumeData.Linkdin}</Typography>
                  <MailOutlineIcon />
                  <Typography>{item.resumeData.mail}</Typography>
                </Box>
              </Box>
            )
        )}
    </div>
  );
};

export default PersonalInformaion;
