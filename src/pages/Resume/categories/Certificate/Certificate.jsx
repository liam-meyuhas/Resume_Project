import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";

import { useActionState } from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import { useDispatch } from "react-redux";
import { isLink } from "../../validation/validation";

const Certificate = (props) => {
  const dispatch = useDispatch();

  const sendResume = (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());
    const Link = data.Link;
    let errors = [];

    isLink(Link, errors);

    if (errors.length > 0) {
      return {
        errors,
        enteredValue: {
          ...data,
        },
      };
    } else {
      dispatch({
        type: "UPDATE",
        payload: { formId: "certificate", formNumber: props.id, data },
      });
    }
    return {
      error: null,
      enteredValue: {
        ...data,
      },
    };
  };

  const [formState, formAction] = useActionState(sendResume, { errors: null });

  return (
    <form action={formAction}>
      <Accordion className="Certificate">
        <Box>
          <FormHeader title="Certificate" id={props.id} />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>תאריך קבלה</Typography>
            <TextField
              type="date"
              name="startDate"
              required
              defaultValue={formState.enteredValue?.startDate}
            />
          </Box>
          <Box>
            <Typography>שם הסמכה</Typography>
            <TextField
              type="text"
              name="CertificationName"
              required
              defaultValue={formState.enteredValue?.CertificationName}
            />
          </Box>
          <Box>
            <Typography>מנפיק</Typography>
            <TextField
              type="text"
              name="Issuer"
              required
              defaultValue={formState.enteredValue?.Issuer}
            />
          </Box>
          <Box>
            <Typography>קישור (אתר או הסמכה)</Typography>
            <TextField
              type="text"
              name="Link"
              required
              defaultValue={formState.enteredValue?.Link}
            />
          </Box>
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default Certificate;
