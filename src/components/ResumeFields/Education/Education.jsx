import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./education.css";

const Education = () => {
  const resume = useSelector((state) => state.resume);
  const educationData = resume["education"];

  return (
    <Box className="education-container">
      <Typography component="h1">השכלה</Typography>
      <Box className="education-fields-container">
        {educationData &&
          educationData.map((item) => (
            <>
              {item.resumeData && (
                <Box key={item.id} className="education-fields">
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
                    <Typography sx={{ fontWeight: "bold" }}>תואר:</Typography>
                    <Typography>{item.resumeData?.Degree}</Typography>
                  </Box>
                  <Box component="div">
                    <Typography sx={{ fontWeight: "bold" }}>
                      מוסד לימודים:
                    </Typography>
                    <Typography>
                      {item.resumeData?.EducationalInstitution}
                    </Typography>
                  </Box>
                  {item.resumeData?.FieldStudy && (
                    <Box component="div">
                      <Typography sx={{ fontWeight: "bold" }}>
                        תחום לימוד:
                      </Typography>
                      <Typography>{item.resumeData?.FieldStudy}</Typography>
                    </Box>
                  )}
                </Box>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Education;
