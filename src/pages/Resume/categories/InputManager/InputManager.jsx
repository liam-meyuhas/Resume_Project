import { TextField } from "@mui/material";
import React from "react";
import DateComponent from "../../../../components/UI/Inputs/Inputs";
import CheckBox from "../../../../components/UI/Checkbox/CheckBox";

const INPUTSENUMS = {
  TEXT: "text",
  CHECKBOX: "checkbox",
  DATE: "date",
};

const inputs = {
  [INPUTSENUMS.TEXT]: TextField,
  [INPUTSENUMS.CHECKBOX]: CheckBox,
  [INPUTSENUMS.DATE]: DateComponent,
};

const InputManager = (props) => {
  const InputComponent = inputs[props.type];
  return (
    <>
      <InputComponent {...props} />
    </>
  );
};

export default InputManager;
