import React, { useState } from "react";
import ModeContext from "./ModeContext";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

const ModeContextProvider = ({ children }) => {
  const [toggelMode, setToggelMode] = useState(false);

  const changeMode = () => {
    setToggelMode((prev) => !prev);
  };

  const themeMode = theme(toggelMode);

  const ctx = {
    changeMode: changeMode,
    toggelMode: toggelMode,
  };
  return (
    <ModeContext.Provider value={ctx}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
