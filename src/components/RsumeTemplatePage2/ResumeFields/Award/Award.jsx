import React from "react";
import { useSelector } from "react-redux";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Link, Typography } from "@mui/material";
import classes from "../FieldTemplate/fieldTemplate.module.css";
import LinkIcon from "@mui/icons-material/Link";

const Volunteer = () => {
  const awardData = useSelector((state) => state.resume["award"]);

  return (
    <div>
      {awardData &&
        awardData.map(
          (item) =>
            item.resumeData && (
              <Box key={item.id} className={classes.templateContainer}>
                <Typography sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
                  VOLUNTEER
                </Typography>
                <Box className={classes.mainContent}>
                  <VolunteerActivismIcon />
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {item.resumeData.AwardName}
                  </Typography>
                  <Link href={item.resumeData.Link}>
                    <LinkIcon />
                  </Link>
                </Box>
                <Box className={classes.date}>
                  <Typography>{item.resumeData.startDate}</Typography>
                  <Typography>מנפיק: {item.resumeData.Issuer}</Typography>
                </Box>
              </Box>
            )
        )}
    </div>
  );
};

export default Volunteer;
