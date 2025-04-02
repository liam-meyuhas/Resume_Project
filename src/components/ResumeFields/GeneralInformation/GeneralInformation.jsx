import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./generalInformation.css";

const GeneralInformation = () => {
  const resume = useSelector((state) => state.resume);
  const generalInformationData = resume["generalInformation"];
  console.log(generalInformationData, 3);
  return (
    <Box className="general-information-container">
      <Typography component="h1">מידע כללי</Typography>
      <Box className="general-information-fields">
        {generalInformationData &&
          generalInformationData.map(
            (item) =>
              item.resumeData && (
                <Box key={item.id}>
                  <Typography>{item.resumeData?.name}</Typography>
                  <Typography>{item.resumeData?.job}</Typography>
                </Box>
              )
          )}
      </Box>
    </Box>
  );
};

export default GeneralInformation;
