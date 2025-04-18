import React from "react";
import { Accordion, Box, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import useSendFormData from "../useSendFormData";
import InputManager from "../InputManager/InputManager";

const FIELDS = [
  { title: "תאריך קבלה", type: "date", name: "startDate" },
  { title: "שם הסמכה", type: "text", name: "certificationName" },
  { title: "מנפיק", type: "text", name: "Issuer" },
  { title: "קישור (אתר או הסמכה)", type: "text", name: "Link" },
];

const Certificate = (props) => {
  const [formState, formAction] = useSendFormData(props.id, "certificate");

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Certificate" id={props.id} />
        </Box>
        <Box className="formFields">
          {FIELDS.map((field) => (
            <Box key={field.title}>
              <Typography>{field.title}</Typography>
              <InputManager
                type={field.type}
                name={field.name}
                required={field.required === false ? field.required : true}
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

export default Certificate;
