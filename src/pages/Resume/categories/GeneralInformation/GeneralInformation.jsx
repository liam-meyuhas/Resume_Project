import { Accordion, Box, TextField, Typography } from "@mui/material";
import React from "react";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import useSendFormData from "../useSendFormData";

const FIELDS = [
  { title: "שם", type: "text", name: "name" },
  { title: "תפקיד", type: "text", name: "job" },
];

const GeneralInformation = (props) => {
  const [formState, formAction] = useSendFormData(
    props.id,
    "generalInformation"
  );

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="GeneralInformation" id={props.id} />
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

export default GeneralInformation;
