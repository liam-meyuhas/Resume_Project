import { Accordion, Box, TextField, Typography } from "@mui/material";
import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";

const GeneralInformation = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="General Information" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>שם</Typography>
            <TextField type="text" name="name" />
          </Box>
          <Box>
            <Typography>תפקיד</Typography>
            <TextField type="text" name="job" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default GeneralInformation;
