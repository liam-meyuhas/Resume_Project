import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./award.css";
import LinkIcon from "@mui/icons-material/Link";

const Award = () => {
  const resume = useSelector((state) => state.resume);
  const awardData = resume["award"];

  return (
    <Box className="awards-container">
      <Typography component="h1">פרסים</Typography>
      <Box className="awards-fields-container">
        {awardData &&
          awardData.map(
            (item) =>
              item.resumeData && (
                <Box key={item.id} className="awards-fields">
                  <Typography>{item.resumeData?.startDate}</Typography>
                  <Box className="awards-details">
                    <Box className="awards-link">
                      <Typography>{item.resumeData?.AwardName}</Typography>
                      {item.resumeData?.Link && (
                        <Link href={item.resumeData?.Link}>
                          <LinkIcon />
                        </Link>
                      )}
                    </Box>
                    <Typography>מנפיק: {item.resumeData?.Issuer}</Typography>
                  </Box>
                </Box>
              )
          )}
      </Box>
    </Box>
  );
};

export default Award;
