import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import "../categories.css";

const Education = () => {
  return (
    <form>
      <Box className="boxForm">
        <Box className="formFiledColumn">
          <Typography>תאריך התחלה</Typography>

          <TextField sx={{ width: "50%" }} type="date" />
        </Box>
        <Box className="formFiledRow">
          <Typography>תאריך סיום</Typography>
          <TextField type="date" />
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
          <Typography>עובד כאן כרגע</Typography>
        </Box>
        <Box className="formFiledColumn">
          <Typography>מוסד לימוד </Typography>
          <TextField type="text" />
        </Box>
        <Box className="formFiledColumn">
          <Typography>תחום לימוד(אופציונאלי) </Typography>
          <TextField type="text" />
        </Box>
      </Box>
    </form>
  );
};

export default Education;
