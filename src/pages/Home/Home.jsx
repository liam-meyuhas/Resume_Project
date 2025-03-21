import React from "react";
import MyButton from "../../style/Button";
import { useNavigate } from "react-router-dom";

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
