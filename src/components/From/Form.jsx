import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

const Form = () => {
  return (
    <>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          תאריך התחלה
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              paddingRight: "1rem",
            }}
          >
            <TextField type="date" />
          </Typography>
          תאריך סיום
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              paddingRight: "1rem",
            }}
          >
            <TextField type="date" />
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            עובד כאן כרגע
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              paddingRight: "1rem",
            }}
          >
            מוסד לימוד
            <TextField type="text" />
            תחום לימוד(אופציונאלי)
            <TextField type="text" />
          </Typography>
        </Box>
      </form>
    </>
  );
};

export default Form;
