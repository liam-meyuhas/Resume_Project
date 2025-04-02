import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./publication.css";

const Publication = () => {
  const resume = useSelector((state) => state.resume);
  const publicationData = resume["publication"];

  return (
    <Box className="publication-container">
      <Typography component="h1">פרסומים</Typography>
      <Box className="publication-fields">
        {publicationData &&
          publicationData.map(
            (item) =>
              item.resumeData && (
                <Box key={item}>{item.resumeData?.publication}</Box>
              )
          )}
      </Box>
    </Box>
  );
};

export default Publication;
