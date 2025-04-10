import React from "react";
import Box from "@mui/joy/Box";
import ResumeAccordionForm from "./SideNavBar/ResumeAccordionForm/ResumeAccordionForm.jsx";
import DownloadPdf from "../../components/DownloadPdf/DownloadPdf.jsx";
import { CgTemplate } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import classes from "./resumeFormPage.module.css";
import { useTheme } from "@mui/material";

export default function DrawerCloseButton() {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/templates");
  };

  const theme = useTheme();
  return (
    <Box className={classes["accordion-container"]}>
      <Box
        sx={{
          width: "40%",
        }}
        className="resume-fields"
      >
        <button
          className={`${classes["button"]} template-button`}
          onClick={handleRoute}
          style={{
            color: theme.palette.mode === "light" ? "black" : "white",
            border:
              theme.palette.mode === "light"
                ? "1px solid black"
                : "1px solid white",
          }}
        >
          בחר תבנית <CgTemplate />
        </button>
        <ResumeAccordionForm />
      </Box>

      <Box sx={{ width: "60%" }} className="third-step">
        <DownloadPdf />
      </Box>
    </Box>
  );
}
