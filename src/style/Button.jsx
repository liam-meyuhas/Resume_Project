import { Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

const MyButton = ({ onClick, children, ...props }) => {
  return (
    <Box
      display="flex"
      justifyContent={props?.placeY}
      alignItems={props?.placeX}
    >
      <Button onClick={onClick} variant="contained">
        {children}
      </Button>
    </Box>
  );
};

export default MyButton;
