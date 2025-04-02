import React, { useActionState, useState } from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../../FormHeader/FormHeader";
import "../categories.css";
import SubmitButton from "../../SubmitButton/SubmitButton";
import DisplayErrors from "../../DisplayErrors/DisplayErrors";
import { useDispatch, useSelector } from "react-redux";
import { isLink } from "../../validation/validation";

const FIELDS = [
  { title: "תאריך קבלה", type: "date", name: "startDate" },
  { title: "שם פרס", type: "text", name: "AwardName" },
  { title: "מנפיק", type: "text", name: "Issuer" },
  { title: "קישור (אתר או הסמכה)", type: "text", name: "Link" },
];

const test = (props) => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
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
        payload: { formId: "award", formNumber: props.id, data },
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

  console.log(resume);
  return (
    <form action={formAction}>
      <Accordion className="form">
        <Box>
          <FormHeader title="Award" id={props.id} />
        </Box>
        <Box className="formFields">
          {FIELDS.map((field) => (
            <Box>
              <Typography>{field.title}</Typography>
              <TextField
                type={field.type}
                name={field.name}
                required
                defaultValue={formState.enteredValue?.field.name}
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

export default test;
