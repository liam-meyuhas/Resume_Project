import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";
import Checkbox from "@mui/material/Checkbox";

const MilitaryService = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Military Service" />
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
            <Typography>סיווג בטחוני</Typography>
            <TextField type="text" name="SecurityClearance" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default MilitaryService;
