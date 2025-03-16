import React, { useActionState, useState } from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";

const Award = () => {
  const sendResume = (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());
    const Link = data.Link;

    let errors = [];

    if (!Link.startsWith("http://") && !Link.startsWith("https://")) {
      errors.push("The link must be includes first http://");
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
          <FormHeader title="Award" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>תאריך קבלה</Typography>
            <TextField type="date" name="startDate" required />
          </Box>
          <Box>
            <Typography>שם פרס</Typography>
            <TextField type="text" name="AwardName" required />
          </Box>
          <Box>
            <Typography>מנפיק</Typography>
            <TextField type="text" name="Issuer" required />
          </Box>
          <Box>
            <Typography>קישור (אתר או הסמכה)</Typography>
            <TextField type="text" name="Link" required />
          </Box>
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default Award;
