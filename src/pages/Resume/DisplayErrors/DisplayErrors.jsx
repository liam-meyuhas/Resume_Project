import { Box } from "@mui/material";
import React from "react";
import "./displayErrors.css";

const DisplayErrors = ({ formState }) => {
  return (
    <Box className="errors">
      {formState.errors && (
        <ul>
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default DisplayErrors;
