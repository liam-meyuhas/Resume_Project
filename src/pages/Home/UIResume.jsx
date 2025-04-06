import { Box, Typography } from "@mui/material";
import React from "react";
import classes from "./uiResume.module.css";
const UIResume = () => {
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography sx={{ fontSize: "2.5rem" }}>למה ליצור משתמש?</Typography>
      </Box>
      <Box className={classes.images}>
        <Box className={classes.content}>
          <Typography>יכולת לערוך קורות חיים קודמים</Typography>
          <img
            src="https://gencv.app/static/media/WhyAccount1.5407898a803f31a2a6b62b3dad87ef7a.svg"
            alt="Landing Page Section"
            loading="lazy"
          />
        </Box>
        <Box className={classes.content}>
          <img
            src="https://gencv.app/static/media/WhyAccount2.f3283149a9c9e0c41394620f22df4912.svg"
            alt="Landing Page Section"
            loading="lazy"
          />
          <Typography>אפשר לטעון מחדש קורות חיים שכבר הורדתם אצלנו</Typography>
        </Box>

        <Box className={classes.content}>
          <Typography>עוד הפתעות בהמשך</Typography>
          <img
            src="https://gencv.app/static/media/WhyAccount3.5d2e9c48ace777d3ddf837fae8a98118.svg"
            alt="Landing Page Section"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UIResume;
