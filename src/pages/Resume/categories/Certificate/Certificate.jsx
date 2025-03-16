import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";

const Certificate = () => {
  return (
    <form>
      <Accordion className="Certificate">
        <Box>
          <FormHeader title="Certificate" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>תאריך קבלה</Typography>
            <TextField type="date" name="startDate" />
          </Box>
          <Box>
            <Typography>שם הסמכה</Typography>
            <TextField type="text" name="CertificationName" />
          </Box>
          <Box>
            <Typography>מנפיק</Typography>
            <TextField type="text" name="Issuer" />
          </Box>
          <Box>
            <Typography>קישור (אתר או הסמכה)</Typography>
            <TextField type="text" name="Link" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default Certificate;
