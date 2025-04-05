import React from "react";
import { useSelector } from "react-redux";
import FieldTemplate from "../FieldTemplate/FieldTemplate";
import BusinessIcon from "@mui/icons-material/Business";

const Experience = () => {
  const experienceData = useSelector((state) => state.resume["experience"]);

  return (
    <div>
      {experienceData &&
        experienceData.map(
          (item) =>
            item.resumeData && (
              <FieldTemplate
                key={item.id}
                title="experience"
                icon={BusinessIcon}
                {...item.resumeData}
              />
            )
        )}
    </div>
  );
};

export default Experience;
