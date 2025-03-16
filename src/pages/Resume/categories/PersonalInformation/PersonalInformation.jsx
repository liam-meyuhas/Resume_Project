import React from "react";
import "../categories.css";
import { Accordion, Box, TextField, Typography } from "@mui/material";
import FormHeader from "../FormHeader/FormHeader";
import "../categories.css";

const PersonalInformation = () => {
  return (
    <form>
      <Accordion className="form">
        <Box>
          <FormHeader title="Personal Information" />
        </Box>
        <Box className="formFields">
          <Box>
            <Typography>מייל</Typography>
            <TextField type="text" name="name" />
          </Box>
          <Box>
            <Typography>כתובת</Typography>
            <TextField type="text" name="address" />
          </Box>
          <Box>
            <Typography>טלפון</Typography>
            <TextField type="text" name="phone" />
          </Box>
          <Box>
            <Typography>לינקדין</Typography>
            <TextField type="text" name="Linkdin" />
          </Box>
        </Box>
      </Accordion>
    </form>
  );
};

export default PersonalInformation;
