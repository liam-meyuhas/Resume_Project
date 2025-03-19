import React from "react";
import { FORMSFIELDS } from "../../categoryTypes/formsFields";
import { Accordion, AccordionSummary, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./resumeAccordionForm.css";
import { useSelector, useDispatch } from "react-redux";

const ResumeAccordionForm = () => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  const addItem = (formId) => {
    dispatch({
      type: "ADD",
      payload: { formId: formId },
    });
  };

  console.log(resume);

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

            <Box className="internalAccordion">
              {resume[form.setting.id] &&
                resume[form.setting.id].map(
                  (
                    item //item.id => the id of the form
                  ) => <Box key={item.id}>{form.form}</Box>
                )}
            </Box>

            <Button onClick={() => addItem(form.setting.id)}>Liam</Button>
          </Accordion>
        </li>
      ))}
    </Box>
  );
};

export default ResumeAccordionForm;
