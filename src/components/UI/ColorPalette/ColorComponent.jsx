import React from "react";
import { IoIosColorPalette } from "react-icons/io";
import "./colorComponent.css";

const ColorComponent = (props) => {
  return (
    <button
      onClick={props.changeColor}
      className={`colorContainer ${props.color}`}
    >
      <IoIosColorPalette />
    </button>
  );
};
export default ColorComponent;
