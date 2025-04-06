import React from "react";
import PaletteContext from "./PaletteContext";

const initialColors = ["red", "green", "orange", "yellow", "black", "pink"];

const PaletteContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [colors, setColors] = React.useState(initialColors);
  const [currentColor, setCurrentColor] = React.useState("blue");
  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const change = (color, index) => {
    setColors((prev) => {
      const updateArray = [...prev];
      updateArray[index] = currentColor;
      return updateArray;
    });
    setCurrentColor(color);
  };
  const ctx = { isOpen, clickHandler, change, colors, currentColor };
  return (
    <PaletteContext.Provider value={ctx}>{children}</PaletteContext.Provider>
  );
};

export default PaletteContextProvider;
