import { AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const FormHeader = ({ title }) => {
  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{title}</Typography>
    </AccordionSummary>
  );
};

export default FormHeader;
