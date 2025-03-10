import * as React from "react";
import AcordionSelect from "./AcordionSelect";
import { RESUME } from "../utils/resumeFileds.jsx";

export default function Resume() {
  return (
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      {RESUME.map((item) => (
        <li key={item.id}>
          <AcordionSelect {...item} />
        </li>
      ))}
    </ul>
  );
}
