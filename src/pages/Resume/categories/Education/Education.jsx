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

const Education = (props) => {
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
        payload: { formId: "education", formNumber: props.id, data },
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
          <FormHeader title="Education" id={props.id} />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>תאריך התחלה</Typography>
            <TextField
              type="date"
              name="startDate"
              required
              defaultValue={formState.enteredValue?.startDate}
            />
          </Box>
          <Box className="checkboxField">
            <Typography>תאריך סיום</Typography>
            <TextField
              type="date"
              name="endDate"
              required
              defaultValue={formState.enteredValue?.endDate}
            />
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            <Typography>עובד כאן כרגע</Typography>
          </Box>
          <Box>
            <Typography>תואר</Typography>
            <TextField
              type="text"
              name="Degree"
              required
              defaultValue={formState.enteredValue?.Degree}
            />
          </Box>
          <Box>
            <Typography>מוסד לימודים</Typography>
            <TextField
              type="text"
              name="EducationalInstitution"
              required
              defaultValue={formState.enteredValue?.EducationalInstitution}
            />
          </Box>
          <Box>
            <Typography>תחום לימוד(אופציונאלי)</Typography>
            <TextField
              type="text"
              name="FieldStudy"
              defaultValue={formState.enteredValue?.FieldStudy}
            />
          </Box>
        </Box>
        <DisplayErrors formState={formState} />
        <SubmitButton />
      </Accordion>
    </form>
  );
};

export default Education;
