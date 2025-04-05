import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";

import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import useSendFormData from "../useSendFormData";
import InputManager from "../InputManager/InputManager";

const FIELDS = (text) => [
  { title: "תאריך התחלה", type: "date", name: "startDate" },
  { title: "תאריך סיום", type: "date", name: "endDate" },
  {
    title: "עובד כאן",
    isChecked: text,
    required: false,
    type: "checkbox",
    name: "isWorkHere",
  },
  { title: "תואר", type: "text", name: "Degree" },
  { title: "מוסד לימודים", type: "text", name: "EducationalInstitution" },
  {
    title: "תחום לימוד(אופציונאלי)",
    type: "text",
    name: "FieldStudy",
    required: false,
  },
];

const Education = (props) => {
  const [formState, formAction] = useSendFormData(props.id, "education");

  const [checked, setChecked] = React.useState(false);
  const FIELDARR = FIELDS(checked);
  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Education" id={props.id} />
        </Box>
        <Box className="formFields">
          {FIELDARR.map((field) => (
            <Box key={field.title}>
              <Typography>{field.title}</Typography>
              <InputManager
                type={field.type}
                name={field.name}
                required={field.required === false ? field.required : true}
                defaultValue={formState.enteredValue?.[field.name]}
                checked={field.isChecked}
                setChecked={setChecked}
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

export default Education;
