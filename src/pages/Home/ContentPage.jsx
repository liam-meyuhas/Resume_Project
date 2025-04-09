import React from "react";
import classes from "./contentPage.module.css";
import { Box, Typography } from "@mui/material";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

const ContectPage = () => {
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Typography sx={{ fontSize: "2.5rem" }}>צרו קשר איתנו</Typography>
          <WifiCalling3Icon sx={{ fontSize: "2.5rem" }} />
        </Box>
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
