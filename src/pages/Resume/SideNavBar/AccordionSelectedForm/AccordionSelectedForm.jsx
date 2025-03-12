import { Box, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import "../AccordionSelectedForm/accordionSelectedForm.css";
import "./accordionSelectedForm.css";
import { Accordion, AccordionSummary, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import "../AccordionSelectedForm/accordionSelectedForm.css";

const AccordionSelectedForm = ({ onDelete, title, fields, id }) => {
  return (
    <Accordion className="accordionForm">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box className="accordionBox" component="span">
          <IconButton aria-label="delete" sx={{ color: "red" }}>
            <DeleteIcon onClick={onDelete} className="icon" />
          </IconButton>
          {title} #{id}
        </Box>
      </AccordionSummary>
      <Box className="formFileds">
        <ul>
          <Box key={title} className="boxForm">
            <Typography variant="h6">{title}</Typography>
            {fields.map((field) => (
              <Box key={field.label} className="formFiledColumn">
                <Typography>{field.name}</Typography>
                {field.type === "checkbox" ? (
                  <Checkbox inputProps={{ "aria-label": "controlled" }} />
                ) : (
                  <TextField sx={{ width: "50%" }} type={field.type} />
                )}
              </Box>
            ))}
          </Box>
        </ul>
      </Box>
    </Accordion>
  );
};

export default AccordionSelectedForm;
