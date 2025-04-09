import React, { useState } from "react";
import ModeContext from "./ModeContext";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      background: {
        default: mode ? "#333" : "#f5f5f5",
        paper: mode ? "#rgba(104, 89, 89, 0.25)" : "#f5f5f5",
      },
    },
  });

const ModeContextProvider = ({ children }) => {
  const [toggleMode, setToggleMode] = useState(false);

  const changeMode = () => {
    setToggleMode((prev) => !prev);
  };

  const themeMode = theme(toggleMode);

  const ctx = {
    changeMode: changeMode,
    toggleMode: toggleMode,
  };
  return (
    <ModeContext.Provider value={ctx}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
