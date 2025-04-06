import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import { Box } from "@mui/material";

const Root = () => {
  return (
    <Box>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default Root;
