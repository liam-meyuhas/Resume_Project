import React from "react";
import Box from "@mui/joy/Box";
import ResumeAccordionForm from "./SideNavBar/ResumeAccordionForm/ResumeAccordionForm.jsx";
import DownloadPdf from "../../components/DownLoadPdf/DownLoadPdf.jsx";

export default function DrawerCloseButton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box sx={{ width: "40%" }}>
        <ResumeAccordionForm />
      </Box>
      <Box sx={{ width: "60%" }}>
        <DownloadPdf />
      </Box>
    </Box>
  );
}
