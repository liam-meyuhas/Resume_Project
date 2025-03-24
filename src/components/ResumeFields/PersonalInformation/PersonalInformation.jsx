import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./personalInformation.css";
const PersonalInformation = () => {
  const resume = useSelector((state) => state.resume);
  const personalInformationData = resume["personalInformation"];
  return (
    <Box className="personal-information-container">
      <Typography component="h1">פרטים אישיים</Typography>
      <Box className="personal-information-fields-container">
        {personalInformationData &&
          personalInformationData.map((item) => (
            <Box key={item} className="personal-information-fields">
              <Box component="div">
                <Typography sx={{ fontWeight: "bold" }}>מייל:</Typography>
                <Typography>{item.resumeData?.mail}</Typography>
              </Box>
              <Box component="div">
                <Typography sx={{ fontWeight: "bold" }}>כתובת:</Typography>
                <Typography>{item.resumeData?.address}</Typography>
              </Box>
              <Box component="div">
                <Typography sx={{ fontWeight: "bold" }}>טלפון:</Typography>
                <Typography>{item.resumeData?.phone}</Typography>
              </Box>
              <Box component="div">
                <Typography sx={{ fontWeight: "bold" }}>לינקדין:</Typography>
                <Typography>{item.resumeData?.Linkdin}</Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default PersonalInformation;
