import React from "react";
import { Box, Link, Typography } from "@mui/material";
import "../resumeFields.css";
import { useSelector } from "react-redux";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

const Certificate = () => {
  const resume = useSelector((state) => state.resume);
  const certificateResumeData = resume.certificate;
  return (
    <Box className="container">
      <header>CERTIFICATION</header>
      <Box className="form-data-column">
        {certificateResumeData &&
          certificateResumeData.map(
            (certificate) =>
              certificate.resumeData && (
                <Box className="form-data-column" key={certificate.id}>
                  <Box className="form-data-row">
                    <Link href={certificate.resumeData?.Link}>
                      <CardMembershipIcon />
                    </Link>
                    <Typography>
                      {certificate.resumeData?.certificationName}
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
              )
          )}
      </Box>
    </Box>
  );
};

export default Certificate;
