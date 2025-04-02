import React from "react";
import { Box, Typography } from "@mui/material";
import "../resumeFields.css";
import { useSelector } from "react-redux";

const Language = () => {
  const resume = useSelector((state) => state.resume);
  const languageResumeData = resume.language;
  console.log(languageResumeData);
  return (
    <Box className="container">
      <header>LANGUAGE</header>
      <Box className="form-data-column">
        {languageResumeData &&
          languageResumeData.map((language) => (
            <>
              {language.resumeData && (
                <Typography key={language.id}>
                  {language.resumeData?.Language}
                </Typography>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Language;
