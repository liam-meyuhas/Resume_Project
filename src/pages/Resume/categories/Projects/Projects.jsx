import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import Checkbox from "@mui/material/Checkbox";

import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import useSendFormData from "../useSendFormData";

const FIELDS = [
  { title: "תאריך התחלה", type: "date", name: "startDate" },
  { title: "תאריך סיום", type: "date", name: "endDate" },
  { title: "בתהליך", type: "checkbox", name: "IsWorkHere" },
  { title: "שם", type: "text", name: "name" },
];

const Projects = (props) => {
  const [formState, formAction] = useSendFormData(props.id, "projects");

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Projects" id={props.id} />
        </Box>
        <Box className="formFields">
          {FIELDS.map((field) => (
            <Box key={field.title}>
              <Typography>{field.title}</Typography>
              <TextField
                type={field.type}
                name={field.name}
                required
                defaultValue={formState.enteredValue?.[field.name]}
              />
            </Box>
          ))}
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default Projects;
