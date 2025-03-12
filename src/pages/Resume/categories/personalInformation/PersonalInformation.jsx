import React from "react";
import { Typography, TextField, Box } from "@mui/material";
import "../categories.css";

const GeneralInformation = () => {
  return (
    <form>
      <Box className="boxForm">
        <Box className="formFiledColumn">
          <Typography>שם</Typography>

          <TextField sx={{ width: "50%" }} type="text" />
        </Box>
        <Box className="formFiledRow">
          <Typography>תפקיד</Typography>
          <TextField sx={{ width: "50%" }} type="text" />
        </Box>
      </Box>
    </form>
  );
};

export default GeneralInformation;
