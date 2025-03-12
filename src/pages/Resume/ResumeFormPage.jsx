import * as React from "react";
import AccordionForm from "./SideNavBar/AccordionForm/AccordionForm.jsx";
import { FORMSFIELDS } from "./categoryTypes/formsFields.jsx";

export default function Resume() {
  return (
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      {FORMSFIELDS.map((item) => (
        <li key={item.id}>
          <AccordionForm {...item} />
        </li>
      ))}
    </ul>
  );
}
