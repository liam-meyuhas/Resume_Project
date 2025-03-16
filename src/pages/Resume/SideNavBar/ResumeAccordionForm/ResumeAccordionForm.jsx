import React, { useState } from "react";
import { FORMSFIELDS } from "../../categoryTypes/formsFields";
import { Accordion, AccordionSummary, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./resumeAccordionForm.css";

const ResumeAccordionForm = () => {
  // const [formsList, setFormsList] = useState([]);
  // const addItem = (formId) => {
  //   setFormsList((prevList) => {
  //     let existingForm = prevList.find((item) => formId === item.id);
  //     if (existingForm) {
  //       return existingForm.map((item) =>
  //         item.id === formId
  //           ? { ...item, formsNumber: item.formsNumber + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevList, { id: formId, formsNumber: 1 }];
  //     }
  //   });
  // };

  return (
    <Box>
      {FORMSFIELDS.map((form) => (
        <li style={{ listStyleType: "none" }} key={form.setting.id}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id={form.setting.id}
            >
              <Typography className="accordionTitle" component="span">
                {form.setting.icon}
                {form.setting.title}
              </Typography>
            </AccordionSummary>

            <Box className="internalAccordion">{form.form}</Box>

            {/* <Button onClick={() => addItem(form.id)}>Liam</Button> */}
          </Accordion>
        </li>
      ))}
    </Box>
  );
};

export default ResumeAccordionForm;
