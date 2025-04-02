import React from "react";
import { Box, Link, Typography } from "@mui/material";
import "../resumeFields.css";
import { useSelector } from "react-redux";
import LinkIcon from "@mui/icons-material/Link";

const Certificate = () => {
  const resume = useSelector((state) => state.resume);
  const certificateResumeData = resume.certificate;
  console.log(certificateResumeData);
  return (
    <Box className="container">
      <header>CERTIFICATION</header>
      <Box className="form-data-column">
        {certificateResumeData &&
          certificateResumeData.map((certificate) => (
            <>
              {certificate.resumeData && (
                <Box className="form-data-column" key={certificate.id}>
                  <Box
                    className="form-data-row"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Link href={certificate.resumeData?.Link}>
                      <LinkIcon />
                    </Link>
                    <Typography>
                      {certificate.resumeData?.CertificationName}
                    </Typography>
                  </Box>
                  <Box
                    className="form-data-row"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Typography>{certificate.resumeData?.Issuer}</Typography>
                    <Typography>{certificate.resumeData?.startDate}</Typography>
                  </Box>
                </Box>
              )}
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Certificate;
