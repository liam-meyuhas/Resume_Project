import React from "react";
import { useSelector } from "react-redux";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Box, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";

const Publication = () => {
  const publicationData = useSelector((state) => state.resume["publication"]);

  return (
    <div>
      {publicationData &&
        publicationData.map(
          (item) =>
            item.resumeData && (
              <Box className={classes.templateContainer}>
                <Typography sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
                  PUBLICATION
                </Typography>
                <Box className={classes.mainContent}>
                  <NewspaperIcon />
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {item.resumeData.publication}
                  </Typography>
                </Box>
              </Box>
            )
        )}
    </div>
  );
};

export default Publication;
