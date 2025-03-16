import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";

const Language = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Language" />
        </Box>
        <Box>
          <Typography>שפות</Typography>
          <TextField type="text" name="Language" />
        </Box>
      </Accordion>
    </form>
  );
};

export default Language;
