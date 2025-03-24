import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";

import { useActionState } from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import { useDispatch } from "react-redux";

const Language = (props) => {
  const dispatch = useDispatch();

  const sendResume = (prevState, formData) => {
    const data = Object.fromEntries(formData.entries());

    let errors = [];

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
        payload: { formId: "language", formNumber: props.id, data },
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
          <FormHeader title="Language" id={props.id} />
        </Box>
        <Box>
          <Typography>שפות</Typography>
          <TextField
            type="text"
            name="Language"
            required
            defaultValue={formState.enteredValue?.Language}
          />
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default Language;
