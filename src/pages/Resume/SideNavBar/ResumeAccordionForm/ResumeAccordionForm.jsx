import React from "react";
import { FORMSFIELDS } from "../../categoryTypes/formsFields";
import { Accordion, AccordionSummary, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./resumeAccordionForm.css";
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Chip from "@mui/material/Chip";
import {
  addResumeItem,
  removeResumeItem,
} from "../../../../store/resumeActions";
import GeneralSettings from "../../categories/GeneralSettings/GeneralSettings";

const ResumeAccordionForm = () => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  const addItem = (formId) => {
    dispatch(addResumeItem(formId));
  };

  const removeItem = (formId, formNumber) => {
    dispatch(removeResumeItem(formId, formNumber));
  };

  return (
    <Box className="accordion-container">
      <GeneralSettings />
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
                resume[form.setting.id].map((item) => {
                  const CategoryComponent = form.form;
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                      key={item.id}
                    >
                      <CategoryComponent id={item.id} />

                      <DeleteOutlineIcon
                        sx={{
                          cursor: "pointer",
                          color: "red",
                        }}
                        onClick={() => removeItem(form.setting.id, item.id)}
                      />
                    </Box>
                  );
                })}
            </Box>

            <Chip
              label={form.setting.text}
              variant="outlined"
              onClick={() => addItem(form.setting.id)}
            />
          </Accordion>
        </li>
      ))}
    </Box>
  );
};

export default ResumeAccordionForm;
