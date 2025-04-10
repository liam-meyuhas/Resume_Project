import React from "react";
import MyButton from "../../style/Button";
import { useNavigate } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/joy";
import classes from "./home.module.css";
import UIResume from "./UIResume";
import ContentPage from "./ContentPage";

const Home = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("resume");
  };
  const theme = useTheme();
  return (
    <>
      <Box
        className={classes.homeContainer}
        sx={{
          backgroundColor:
            theme.palette.mode === "light" ? "rgb(193, 212, 241)" : "#0D1B2A",
        }}
      >
        <Box className={classes.header}>
          <Typography sx={{ fontSize: "2.5rem" }}>צור את הקו"ח</Typography>
          <Typography
            sx={{
              fontSize: "2.5rem",
              color:
                theme.palette.mode === "light" ? "blue" : "rgb(102, 134, 182)",
            }}
          >
            המקצועי שלך
          </Typography>
        </Box>

        <Box className={classes.appExplain}>
          <Typography>
            ב-GenCV, תוכלו ליצור קורות חיים מקצועיים שמדגישים את הכישורים
            והניסיון הייחודיים שלכם בקלות. עם תבניות ידידותיות למשתמש ואפשרויות
            התאמה אישית, עיצוב קורות חיים בולטים הופך פשוט, כך שתוכלו להתמקד
            בהזדמנות הבאה שלכם. בחרו ב-GenCV לדרך קלה וללא מאמץ לבניית קורות
            חיים עם השפעה.
          </Typography>
        </Box>
        <MyButton onClick={handleRoute} placeX="center" placeY="center">
          התחל כאן
        </MyButton>

        <img
          src="https://gencv.app/static/media/LandingPageSection1.866e068e7c59e63dc87ee6883a1a86e3.svg"
          alt="Landing Page Section"
          loading="lazy"
        />
      </Box>
      <UIResume />
      <ContentPage />
    </>
  );
};

export default Home;
