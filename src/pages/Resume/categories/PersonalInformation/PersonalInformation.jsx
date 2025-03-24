import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";

import { useActionState } from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import { useDispatch } from "react-redux";
import { isMail } from "../../validation/validation";

const PersonalInformation = (props) => {
  const dispatch = useDispatch();

  const sendResume = (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());
    const mail = data.mail;

    let errors = [];

    isMail(mail, errors);

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
        payload: { formId: "personalInformation", formNumber: props.id, data },
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
      <Accordion className="form">
        <Box>
          <FormHeader title="Personal Information" id={props.id} />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>מייל</Typography>
            <TextField
              type="mail"
              name="mail"
              required
              defaultValue={formState.enteredValue?.mail}
            />
          </Box>
          <Box>
            <Typography>כתובת</Typography>
            <TextField
              type="text"
              name="address"
              required
              defaultValue={formState.enteredValue?.address}
            />
          </Box>
          <Box>
            <Typography>טלפון</Typography>
            <TextField
              type="text"
              name="phone"
              required
              defaultValue={formState.enteredValue?.phone}
            />
          </Box>
          <Box>
            <Typography>לינקדין</Typography>
            <TextField
              type="text"
              name="Linkdin"
              required
              defaultValue={formState.enteredValue?.Linkdin}
            />
          </Box>
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default PersonalInformation;
