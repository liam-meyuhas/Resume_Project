import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./certificate.css";
import LinkIcon from "@mui/icons-material/Link";

const Certificate = () => {
  const resume = useSelector((state) => state.resume);
  const certificateData = resume["certificate"];

  return (
    <Box className="certificate-container">
      <Typography component="h1">הסמכות</Typography>
      <Box className="certificate-fields-container">
        {certificateData &&
          certificateData.map((item) => (
            <>
              {item.resumeData && (
                <Box key={item.id} className="certificate-fields">
                  <Typography>{item.resumeData?.startDate}</Typography>

                  <Box className="certificate-details">
                    <Box className="certificate-link">
                      <Typography>
                        {item.resumeData?.CertificationName}
                      </Typography>
                      {item.resumeData?.Link && (
                        <Link href={item.resumeData?.Link}>
                          <LinkIcon />
                        </Link>
                      )}
                    </Box>
                    <Typography>מנפיק: {item.resumeData?.Issuer}</Typography>
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
