import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import ResumeTemplate from "../ResumeTemplate/ResumeTemplate";

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
      }}
    >
      <div
        ref={printRef}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <ResumeTemplate />
      </div>

      <button onClick={handleDownLoadPdf}>DownLoad</button>
    </div>
  );
};

export default DownloadPdf;
