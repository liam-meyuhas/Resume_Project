import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./militaryService.css";

const MilitaryService = () => {
  const resume = useSelector((state) => state.resume);
  const militaryServiceData = resume["militaryService"];

  return (
    <Box className="military-service-container">
      <Typography component="h1">שירות צבאי</Typography>
      <Box className="military-service-fields-container">
        {militaryServiceData &&
          militaryServiceData.map((item) => (
            <>
              {item.resumeData && (
                <Box key={item.id} className="military-service-fields">
                  <Typography>
                    {item.resumeData?.startDate}-{item.resumeData?.endDate}
                  </Typography>

                  <Box className="military-service-details">
                    <Typography>{item.resumeData?.job}</Typography>
                    <Typography>
                      רמת סיווג: {item.resumeData?.SecurityClearance}
                    </Typography>
                  </Box>
                </Box>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default MilitaryService;
