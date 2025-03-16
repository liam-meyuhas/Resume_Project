import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";

import { useActionState } from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";

const PersonalInformation = () => {
  const sendResume = (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());
    const mail = data.mail;

    let errors = [];

    if (!mail.includes("@")) {
      errors.push("The email must contain '@'");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValue: {
          data,
        },
      };
    }
    return { error: null, resumeData: { ...data } };
  };

  const [formState, formAction] = useActionState(sendResume, { errors: null });
  console.log(formState.resumeData);

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Personal Information" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>מייל</Typography>
            <TextField type="mail" name="mail" required />
          </Box>
          <Box>
            <Typography>כתובת</Typography>
            <TextField type="text" name="address" required />
          </Box>
          <Box>
            <Typography>טלפון</Typography>
            <TextField type="text" name="phone" required />
          </Box>
          <Box>
            <Typography>לינקדין</Typography>
            <TextField type="text" name="Linkdin" required />
          </Box>
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default PersonalInformation;
