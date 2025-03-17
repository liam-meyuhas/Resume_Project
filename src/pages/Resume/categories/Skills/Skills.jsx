import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";

import { useActionState } from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import { useDispatch } from "react-redux";

const Skills = () => {
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
      dispatch({ type: "skills", amount: data });
    }
    return { error: null, resumeData: { ...data } };
  };

  const [formState, formAction] = useActionState(sendResume, { errors: null });

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Skills" />
        </Box>
        <Box>
          <Typography>כישורים</Typography>
          <TextField type="text" name="Skills" required />
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default Skills;
