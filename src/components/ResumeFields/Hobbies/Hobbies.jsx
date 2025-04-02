import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./hobbies.css";

const Hobbies = () => {
  const resume = useSelector((state) => state.resume);
  const hobbiesData = resume["hobbies"];

  return (
    <Box className="hobbies-container">
      <Typography component="h1">תחביבים</Typography>
      <Box className="hobbies-fields">
        {hobbiesData &&
          hobbiesData.map(
            (item) =>
              item.resumeData && (
                <Box key={item.id}>
                  <Typography>{item.resumeData?.Hobbies}</Typography>
                </Box>
              )
          )}
      </Box>
    </Box>
  );
};

export default Hobbies;
