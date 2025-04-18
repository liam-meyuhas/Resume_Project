import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useContext, useRef } from "react";
import ResumeTemplate from "../ResumeTemplate/ResumeTemplate";
import ResumeTemplatePage2 from "../RsumeTemplatePage2/ResumeTemplate2/ResumeTemplate2";
import classes from "./downLoad.module.css";
import { Box, Button } from "@mui/material";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CgTemplate } from "react-icons/cg";
import PaletteContext from "../../context/PaletteContext/PaletteContext";

const DownloadPdf = () => {
  const printRef = useRef(null);

  const handleDownLoadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }
    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("exsamplepdf.pdf");
  };

  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/templates");
  };

  const { template } = useContext(PaletteContext);

  return (
    <Box className={classes["downLoad-container"]}>
      <Box className={classes.buttons}>
        <Button onClick={handleDownLoadPdf}>
          <MdOutlineFileDownload />
        </Button>
        <Button onClick={handleRoute}>
          בחר תבנית <CgTemplate />
        </Button>
      </Box>

      <div
        ref={printRef}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "auto",
          maxHeight: "100vh",
        }}
      >
        {template === "resumeTemplate1" ? (
          <ResumeTemplate />
        ) : (
          <ResumeTemplatePage2 />
        )}
      </div>
    </Box>
  );
};

export default DownloadPdf;
