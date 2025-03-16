import React from "react";
import { Button, Stack } from "@mui/material";
const SubmitButton = () => {
  return (
    <Stack spacing={2} direction="row" margin={2}>
      <Button type="submit" variant="contained">
        שלח
      </Button>
      <Button type="reset" variant="text">
        מחק
      </Button>
    </Stack>
  );
};

export default SubmitButton;
