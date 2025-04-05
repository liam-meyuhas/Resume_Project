import { Box, Typography } from "@mui/material";
import React from "react";
import classes from "./fieldTemplate.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const FieldTemplate = (props) => {
  return (
    <Box className={classes.templateContainer}>
      <Typography sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
        {props.title.toUpperCase()}
      </Typography>
      <Box className={classes.mainContent}>
        <props.icon />
        <Typography sx={{ fontSize: "1.5rem" }}>{props.job}</Typography>
        <Typography>{props.companyName}</Typography>
      </Box>
      <Box className={classes.date}>
        <Typography>
          {props.startDate} - {props.endDate}
        </Typography>
        <Typography>{props.companyLocation}:</Typography>
      </Box>
      <Box className={classes.worker}>
        <Typography> :עובד כאן</Typography>
        <Typography>
          {props.isWorkHere === "on" || props.isWorkHere === "true" ? (
            <CheckBoxIcon className={classes.iconWork} />
          ) : (
            <CancelPresentationIcon className={classes.iconNotWorkHere} />
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default FieldTemplate;
