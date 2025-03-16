import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";
import Checkbox from "@mui/material/Checkbox";

const Projects = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Projects" />
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
            <Typography>בתהליך</Typography>
          </Box>
          <Box>
            <Typography>שם</Typography>
            <TextField type="text" name="name" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default Projects;
