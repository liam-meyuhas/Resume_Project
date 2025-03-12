import React, { useState } from "react";
import { Box } from "@mui/material";
import AccordionSelected from "../AccordionSelected/AccordionSelected";
import MyButton from "../../../../style/Button";
import "./accordionSelectedForm.css";

const AccordionSelectedForm = ({ id, text }) => {
  const [forms, setForm] = useState([]);
  const addForm = () => {
    setForm((prevForms) => [...prevForms, { id: prevForms.length + 1 }]);
  };

  const removeForm = (id) => {
    setForm((prevForm) => prevForm.filter((form) => form.id !== id));
  };

  return (
    <Box className="accordionForm">
      <ul className="formFileds">
        {forms.map((form) => (
          <li key={form.id}>
            <AccordionSelected
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
  );
};

export default AccordionSelectedForm;
