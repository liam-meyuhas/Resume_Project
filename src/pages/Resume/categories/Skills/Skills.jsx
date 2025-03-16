import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";

const Skills = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Skills" />
        </Box>
        <Box>
          <Typography>כישורים</Typography>
          <TextField type="text" name="Skills" />
        </Box>
      </Accordion>
    </form>
  );
};

export default Skills;
