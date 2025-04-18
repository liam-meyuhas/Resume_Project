import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import React, { useContext } from "react";
import ModeContext from "../../../context/ModeContext/ModeContext";
import { Switch } from "@mui/material";

const Theme = () => {
  const { toggelMode, changeMode } = useContext(ModeContext);

  return (
    <Switch
      checked={!toggelMode}
      onChange={changeMode}
      icon={<NightsStayIcon />}
      checkedIcon={<WbSunnyIcon />}
    />
  );
};

export default Theme;
