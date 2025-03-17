import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import Checkbox from "@mui/material/Checkbox";

import { useActionState } from "react";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import { useDispatch } from "react-redux";

const Volunteer = () => {
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
      dispatch({ type: "volunteer", amount: data });
    }
    return { error: null, resumeData: { ...data } };
  };

  const [formState, formAction] = useActionState(sendResume, { errors: null });

  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Volunteer" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>תאריך התחלה</Typography>
            <TextField type="date" name="startDate" required />
          </Box>
          <Box className="checkboxField">
            <Typography>תאריך סיום</Typography>
            <TextField type="date" name="endDate" required />
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            <Typography>עובד כאן כרגע</Typography>
          </Box>
          <Box>
            <Typography>תפקיד</Typography>
            <TextField type="text" name="job" required />
          </Box>
          <Box>
            <Typography>שם פרויקט</Typography>
            <TextField type="text" name="projectName" />
          </Box>
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default Volunteer;
