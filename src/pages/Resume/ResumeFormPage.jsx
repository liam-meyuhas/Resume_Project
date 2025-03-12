import * as React from "react";
import AccordionForm from "./SideNavBar/AccordionForm/AccordionForm.jsx";
import { RESUME } from "./categoryTypes/resumeFileds.jsx";

export default function Resume() {
  return (
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      {RESUME.map((item) => (
        <li key={item.id}>
          <AccordionForm {...item} />
        </li>
      ))}
    </ul>
  );
}
