import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./volunteer.css";

const Volunteer = () => {
  const resume = useSelector((state) => state.resume);
  const volunteerData = resume["volunteer"];

  return (
    <Box className="volunteer-container">
      <Typography component="h1">התנדבות</Typography>
      <Box className="volunteer-fields-container">
        {volunteerData &&
          volunteerData.map(
            (item) =>
              item.resumeData && (
                <Box key={item.id} className="volunteer-fields">
                  <Typography>
                    {item.resumeData?.startDate}-{item.resumeData?.endDate}
                  </Typography>
                  <Typography sx={{ fontSize: "2rem" }}>
                    {item.resumeData?.job}
                  </Typography>
                  <Typography>{item.resumeData?.projectName}</Typography>
                </Box>
              )
          )}
      </Box>
    </Box>
  );
};

export default Volunteer;
