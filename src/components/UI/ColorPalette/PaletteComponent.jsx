import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ColorComponent from "./ColorComponent";
import classes from "./colorPalette.module.css";
import PaletteContext from "../../../context/PaletteContext/PaletteContext";

const PaletteComponent = () => {
  const { isOpen, clickHandler, change, colors, currentColor } =
    useContext(PaletteContext);

  return (
    <div className={classes.container}>
      <div className={classes.currentColor}>
        <ColorComponent color={currentColor} />
      </div>
      <div className={`${classes.mainContent} ${isOpen ? classes.open : ""}`}>
        {colors.map((color, index) => (
          <ColorComponent
            changeColor={() => change(color, index)}
            key={color}
            color={color}
          />
        ))}
      </div>
      <button className={classes.colorsButton} onClick={clickHandler}>
        {isOpen ? <FaArrowRight /> : <FaArrowLeft />}
      </button>
    </div>
  );
};

export default PaletteComponent;
