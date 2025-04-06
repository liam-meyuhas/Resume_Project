import { Accordion, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import PaletteComponent from "../../../../components/UI/ColorPalette/PaletteComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import "../categories.css";

const GeneralSettings = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <SettingsIcon />
        <Typography>הגדרות כלליות</Typography>
      </AccordionSummary>
      <Typography>צבעי ערכת נושא:</Typography>
      <PaletteComponent />
    </Accordion>
  );
};

export default GeneralSettings;
