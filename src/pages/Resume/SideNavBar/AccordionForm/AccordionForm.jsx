import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import "./accordionForm.css";
import AccordionSelected from "../AccordionSelected/AccordionSelected.jsx";

const AccordionForm = ({ title, fields, setting }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={setting.id}>
        <Typography className="accordionTitle" component="span">
          {setting.icon}
          {setting.title}
        </Typography>
      </AccordionSummary>
      <AccordionSelected title={title} fields={fields} setting={setting} />
    </Accordion>
  );
};

export default AccordionForm;
