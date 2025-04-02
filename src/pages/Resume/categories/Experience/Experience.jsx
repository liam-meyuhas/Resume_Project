import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";

import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import useSendFormData from "../useSendFormData";

const FIELDS = [
  { title: "תאריך התחלה", type: "date", name: "startDate" },
  { title: "תאריך סיום", type: "date", name: "endDate" },
  { title: "עובד כאן", type: "checkbox", name: "isWorkHere" },
  { title: "תפקיד", type: "text", name: "job" },
  { title: "שם חברה", type: "text", name: "companyName" },
  { title: "מיקום חברה", type: "text", name: "companyLocation" },
];

const Experience = (props) => {
  const [formState, formAction] = useSendFormData(props.id, "experience");

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Exerience" id={props.id} />
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

export default Experience;
