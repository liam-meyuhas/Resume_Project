import React from "react";
import classes from "./conectPage.module.css";
import { Box, Typography } from "@mui/material";

const ContectPage = () => {
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography sx={{ fontSize: "2.5rem" }}>צרו קשר איתנו</Typography>
        <Typography sx={{ color: "gray" }}>זמינים לכל שאלה והצעה</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>
          LiamResume.supp@gmail.com
        </Typography>
      </Box>
      <Box className={classes.content}>
        <Typography sx={{ fontSize: "1.5rem" }}>כללי</Typography>
        <Typography sx={{ color: "gray" }}>מאמרים</Typography>
        <Typography sx={{ color: "gray" }}>קידום אתרים</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>תמיכה</Typography>
        <Typography sx={{ color: "gray" }}>צרו קשר איתנו</Typography>
        <Typography sx={{ color: "gray" }}>מדיניות פרטיות</Typography>
        <Typography sx={{ color: "gray" }}>תנאי שימוש</Typography>
      </Box>
    </Box>
  );
};

export default ContectPage;
