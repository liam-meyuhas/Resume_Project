import React, { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import { Box } from "@mui/material";
import AccordionFrom from "./AccordionForm/AccordionFrom";
import MyButton from "../style/Button";

const AcordionSelect = ({ id, title, icon, text }) => {
  const [forms, setForm] = useState([]);
  const addForm = () => {
    setForm((prevForms) => [...prevForms, { id: prevForms.length + 1 }]);
  };

  const removeForm = (id) => {
    setForm((prevForm) => prevForm.filter((form) => form.id !== id));
  };

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "80%",
          paddingRight: "2rem",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {forms.map((form) => (
            <li key={form.id}>
              <AccordionFrom
                id={form.id}
                title={id}
                onClick={() => removeForm(form.id)}
              />
            </li>
          ))}
        </ul>
        <MyButton onClick={addForm} placeX="start" placeY="start">
          {text}
        </MyButton>
      </Box>
    </Accordion>
  );
};

export default AcordionSelect;
