import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";
import Checkbox from "@mui/material/Checkbox";

const Education = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Education" />
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
            <Typography>תואר</Typography>
            <TextField type="text" name="Degree" />
          </Box>
          <Box>
            <Typography>מוסד לימודים</Typography>
            <TextField type="text" name="EducationalInstitution" />
          </Box>
          <Box>
            <Typography>תחום לימוד(אופציונאלי)</Typography>
            <TextField type="text" name="FieldStudy" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default Education;
