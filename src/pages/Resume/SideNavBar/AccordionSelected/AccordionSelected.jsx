import { Accordion, AccordionSummary, Box } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Education from "../../categories/Education/Education";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./accordionSelected.css";

const AccordionSelected = ({ onClick, title, id }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box className="accordionBox" component="span">
          <IconButton
            aria-label="delete"
            onClick={onClick}
            sx={{ color: "red" }}
          >
            <DeleteIcon className="icon" />
          </IconButton>
          {title} #{id}
        </Box>
      </AccordionSummary>
      <Education />
    </Accordion>
  );
};

export default AccordionSelected;
