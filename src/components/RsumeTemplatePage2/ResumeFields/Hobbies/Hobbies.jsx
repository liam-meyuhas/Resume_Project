import React from "react";
import { Box, Typography } from "@mui/material";
import "../resumeFields.css";
import { useSelector } from "react-redux";

const Hobbies = () => {
  const resume = useSelector((state) => state.resume);
  const hobbiesResumeData = resume.hobbies;
  return (
    <Box className="container">
      <header>HOBBIES</header>
      <Box className="form-data-column">
        {hobbiesResumeData &&
          hobbiesResumeData.map(
            (hobbies) =>
              hobbies.resumeData && (
                <Typography key={hobbies.id}>
                  {hobbies.resumeData?.Hobbies}
                </Typography>
              )
          )}
      </Box>
    </Box>
  );
};

export default Hobbies;
