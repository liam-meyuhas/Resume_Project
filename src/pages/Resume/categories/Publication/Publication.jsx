import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";

const Publication = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Publication" />
        </Box>
        <Box>
          <Typography>פרסומים</Typography>
          <TextField type="text" name="publication" />
        </Box>
      </Accordion>
    </form>
  );
};

export default Publication;
