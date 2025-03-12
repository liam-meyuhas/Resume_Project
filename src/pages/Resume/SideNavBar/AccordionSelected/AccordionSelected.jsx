import { Box } from "@mui/material";
import "./accordionSelected.css";
import MyButton from "../../../../style/Button.jsx";
import { useState } from "react";
import AccordionSelectedForm from "../AccordionSelectedForm/AccordionSelectedForm.jsx";
const AccordionSelected = ({ title, fields, setting }) => {
  const [forms, setForm] = useState([]);
  const addForm = () => {
    setForm((prevForms) => [
      ...prevForms,
      { formName: title, id: prevForms.length + 1 },
    ]);
  };

  const removeForm = (id) => {
    setForm((prevForm) => prevForm.filter((form) => form.id !== id));
  };

  return (
    <Box className="formFileds">
      {forms.map((form) => (
        <li key={form.formName}>
          <AccordionSelectedForm
            onDelete={() => removeForm(form.id)}
            title={title}
            id={form.id}
            fields={fields}
          />
        </li>
      ))}
      <MyButton onClick={addForm} placeX="start" placeY="start">
        {setting.text}
      </MyButton>
    </Box>
  );
};

export default AccordionSelected;
