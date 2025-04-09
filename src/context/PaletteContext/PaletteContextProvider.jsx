import React, { useState } from "react";
import PaletteContext from "./PaletteContext";

const initialColors = ["red", "green", "orange", "yellow", "black", "pink"];

const PaletteContextProvider = ({ children }) => {
  const [template, setTemplate] = useState("resumeTemplate2");
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState(initialColors);
  const [currentColor, setCurrentColor] = useState("blue");
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

  const handleSelect = (resumeTemplate, navigate) => {
    setTemplate(resumeTemplate);
    navigate("/resume");
  };
  const ctx = {
    isOpen,
    clickHandler,
    change,
    colors,
    currentColor,
    template,
    handleSelect,
  };
  return (
    <PaletteContext.Provider value={ctx}>{children}</PaletteContext.Provider>
  );
};

export default PaletteContextProvider;
