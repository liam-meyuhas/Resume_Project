import { Accordion, AccordionSummary, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaletteComponent from "../../../../components/UI/ColorPalette/PaletteComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import "../categories.css";

const GeneralSettings = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    const openAccordion = () => {
      setAccordionOpen(true);
    };

    window.addEventListener("openAccordion", openAccordion);

    return () => {
      window.removeEventListener("openAccordion", openAccordion);
    };
  }, []);

  const handleAccordionToggle = () => {
    setAccordionOpen((prev) => !prev);
  };

  return (
    <Accordion expanded={accordionOpen} onChange={handleAccordionToggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <SettingsIcon />
        <Typography>הגדרות כלליות</Typography>
      </AccordionSummary>
      <Typography>צבעי ערכת נושא:</Typography>
      <div id="palette-target">
        <PaletteComponent />
      </div>
    </Accordion>
  );
};

export default GeneralSettings;
