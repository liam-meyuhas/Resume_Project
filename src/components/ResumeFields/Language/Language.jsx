import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./language.css";

const Language = () => {
  const resume = useSelector((state) => state.resume);
  const languageData = resume["language"];

  return (
    <Box className="language-container">
      <Typography component="h1">שפות</Typography>

      <Box className="language-fields">
        {languageData &&
          languageData.map((item) => (
            <>
              {item.resumeData && (
                <Box key={item}>
                  <Typography>{item.resumeData?.Language}</Typography>
                </Box>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Language;
