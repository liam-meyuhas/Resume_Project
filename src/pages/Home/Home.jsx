import React from "react";
import MyButton from "../../style/Button";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Box } from "@mui/joy";

const Home = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("resume");
  };
  return (
    <MyButton onClick={handleRoute} placeX="center" placeY="center">
      התחל כאן
    </MyButton>
  );
};

export default Home;
