import { Accordion, Box, TextField, Typography } from "@mui/material";
import React from "react";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import { useActionState } from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import { useDispatch } from "react-redux";

const GeneralInformation = () => {
  const dispatch = useDispatch();

  const sendResume = (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());

    let errors = [];

    if (errors.length > 0) {
      return {
        errors,
        enteredValue: {
          data,
        },
      };
    } else {
      dispatch({ type: "generalInformation", amount: data });
    }
    return { error: null, resumeData: { ...data } };
  };

  const [formState, formAction] = useActionState(sendResume, { errors: null });

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="General Information" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>שם</Typography>
            <TextField type="text" name="name" required />
          </Box>
          <Box>
            <Typography>תפקיד</Typography>
            <TextField type="text" name="job" required />
          </Box>
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default GeneralInformation;
