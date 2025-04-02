import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import ResumeTemplate from "../ResumeTemplate/ResumeTemplate";
import ResumeTemplatePage2 from "../RsumeTemplatePage2/ResumeTemplate2/ResumeTemplate2";

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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "5px solid gray",
        borderRadius: "10px",
        boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.25)",
        padding: "0.5rem",
        backgroundColor: "rgba(228, 204, 204, 0.25)",
      }}
    >
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
        <ResumeTemplate />
        {/* <ResumeTemplatePage2 /> */}
      </div>

      <button onClick={handleDownLoadPdf}>DownLoad</button>
    </div>
  );
};

export default DownloadPdf;
