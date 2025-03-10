import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";

const AcordionSelect = ({ id, title, icon, text }) => {
  return (
    <Accordion sx={{ direction: "rtl" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
        <Typography
          sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
          component="span"
        >
          {icon}
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: "start" }}>{text}</AccordionDetails>
    </Accordion>
  );
};

export default AcordionSelect;
