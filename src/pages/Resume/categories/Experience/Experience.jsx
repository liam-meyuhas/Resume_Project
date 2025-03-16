import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";
import Checkbox from "@mui/material/Checkbox";

const Experience = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Experience" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>תאריך התחלה</Typography>
            <TextField type="date" name="startDate" />
          </Box>
          <Box className="checkboxField">
            <Typography>תאריך סיום</Typography>
            <TextField type="date" name="endDate" />
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            <Typography>עובד כאן כרגע</Typography>
          </Box>
          <Box>
            <Typography>תפקיד</Typography>
            <TextField type="text" name="job" />
          </Box>
          <Box>
            <Typography>שם חברה</Typography>
            <TextField type="text" name="companyName" />
          </Box>
          <Box>
            <Typography>מיקום חברה</Typography>
            <TextField type="text" name="companyLocation" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default Experience;
