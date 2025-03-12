import { Accordion, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "../From/Form";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const AccordionFrom = ({ onClick, title, id }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          component="span"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton aria-label="delete" onClick={onClick}>
            <DeleteIcon />
          </IconButton>
          {title} #{id}
        </Typography>
      </AccordionSummary>
      <Form />
    </Accordion>
  );
};

export default AccordionFrom;
