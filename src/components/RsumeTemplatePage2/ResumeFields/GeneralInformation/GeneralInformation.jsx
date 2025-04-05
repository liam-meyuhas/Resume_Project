import React from "react";
import { useSelector } from "react-redux";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Box, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";

const GeneralInformation = () => {
  const generalInformationData = useSelector(
    (state) => state.resume["generalInformation"]
  );

  return (
    <div>
      {generalInformationData &&
        generalInformationData.map(
          (item) =>
            item.resumeData && (
              <Box key={item.id} className={classes.templateContainer}>
                <Typography sx={{ fontSize: "3rem" }}>
                  {item.resumeData.name}
                </Typography>
                <Typography>{item.resumeData.job}</Typography>
              </Box>
            )
        )}
    </div>
  );
};

export default GeneralInformation;
