import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";

const Hobbies = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Hobbies" />
        </Box>
        <Box>
          <Typography>תחביבים</Typography>
          <TextField type="text" name="Hobbies" />
        </Box>
      </Accordion>
    </form>
  );
};

export default Hobbies;
