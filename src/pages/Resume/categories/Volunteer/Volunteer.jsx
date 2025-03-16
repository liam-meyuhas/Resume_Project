import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";
import Checkbox from "@mui/material/Checkbox";

const Volunteer = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Volunteer" />
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
            <Typography>שם פרויקט</Typography>
            <TextField type="text" name="projectName" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default Volunteer;
