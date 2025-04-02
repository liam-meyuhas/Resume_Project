import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";

import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import useSendFormData from "../useSendFormData";

const FIELDS = [{ title: "תחביבים", type: "text", name: "Hobbies" }];
const Hobbies = (props) => {
  const [formState, formAction] = useSendFormData(props.id, "hobbies");
  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Hobbies" id={props.id} />
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

export default Hobbies;
