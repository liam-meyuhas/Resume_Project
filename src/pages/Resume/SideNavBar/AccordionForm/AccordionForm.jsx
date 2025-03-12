import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSelectedForm from "../AccordionSelectedForm/AccordionSelectedForm.jsx";
import "./accordionForm.css";

const AccordionForm = ({ id, title, icon, text }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
        <Typography className="accordionTitle" component="span">
          {icon}
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionSelectedForm id={id} text={text} />
    </Accordion>
  );
};

export default AccordionForm;
