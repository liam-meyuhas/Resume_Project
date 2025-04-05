import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import useSendFormData from "../useSendFormData";
import InputManager from "../InputManager/InputManager";

const FIELDS = [
  { title: "מייל", type: "text", name: "mail" },
  { title: "כתובת", type: "text", name: "address" },
  { title: "טלפון", type: "text", name: "phone" },
  { title: "לינקדין", type: "text", name: "Linkdin" },
];

const PersonalInformation = (props) => {
  const [formState, formAction] = useSendFormData(
    props.id,
    "personalInformation"
  );

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Personal Information" id={props.id} />
        </Box>
        <Box className="formFields">
          {FIELDS.map((field) => (
            <Box key={field.title}>
              <Typography>{field.title}</Typography>
              <InputManager
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

export default PersonalInformation;
