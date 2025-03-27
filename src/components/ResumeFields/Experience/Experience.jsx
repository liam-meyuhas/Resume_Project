import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./experience.css";
const Experience = () => {
  const resume = useSelector((state) => state.resume);
  const experienceData = resume["experience"];

  return (
    <Box className="experience-container">
      <Typography component="h1">נסיון תעסוקתי</Typography>
      <Box className="experience-fields-container">
        {experienceData &&
          experienceData.map((item) => (
            <>
              {item.resumeData && (
                <Box key={item.id} className="experience-fields">
                  <Box component="div">
                    <Typography sx={{ fontWeight: "bold" }}>
                      תאריך התחלה:
                    </Typography>
                    <Typography>{item.resumeData?.startDate}</Typography>
                  </Box>
                  <Box component="div">
                    <Typography sx={{ fontWeight: "bold" }}>
                      תאריך סיום:
                    </Typography>
                    <Typography>{item.resumeData?.endDate}</Typography>
                  </Box>
                  <Box component="div">
                    <Typography sx={{ fontWeight: "bold" }}>תפקיד:</Typography>
                    <Typography>{item.resumeData?.job}</Typography>
                  </Box>
                  <Box component="div">
                    <Typography sx={{ fontWeight: "bold" }}>
                      שם חברה:
                    </Typography>
                    <Typography>{item.resumeData?.companyName}</Typography>
                  </Box>
                  <Box component="div">
                    <Typography sx={{ fontWeight: "bold" }}>
                      מיקום חברה:
                    </Typography>
                    <Typography>{item.resumeData?.companyLocation}</Typography>
                  </Box>
                </Box>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Experience;
