import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./selectedTemplate.module.css";
import PaletteContext from "../../context/PaletteContext/PaletteContext";
import { Box } from "@mui/material";

const SelectedTemplate = () => {
  const navigate = useNavigate();

  const { handleSelect } = useContext(PaletteContext);

  return (
    <Box className={classes.container}>
      <button onClick={() => handleSelect("resumeTemplate1", navigate)}>
        <img
          src="https://cdn.enhancv.com/images/1920/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy8xeVZiUldsdG10Z2tFMEZjMDlPVFBRZlQwQUswcmNIOW5Ldk9UNktPL2ltYWdlLnBuZw~~.png"
          alt="image"
        />
      </button>
      <button onClick={() => handleSelect("resumeTemplate2", navigate)}>
        <img
          src="https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg"
          alt="image"
        />
      </button>
    </Box>
  );
};

export default SelectedTemplate;
