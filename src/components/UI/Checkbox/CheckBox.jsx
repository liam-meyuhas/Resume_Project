import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function CheckBox(props) {
  const handleChange = (event) => {
    props.setChecked(event.target.checked);
  };

  return (
    <>
      <input type="hidden" name={props.name} value={props.checked} />
      <Checkbox
        checked={props.checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        name={props.name}
        required={props.required}
      />
    </>
  );
}
