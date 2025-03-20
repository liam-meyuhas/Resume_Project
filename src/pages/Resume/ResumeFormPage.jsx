import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import ResumeAccordionForm from "./SideNavBar/ResumeAccordionForm/ResumeAccordionForm.jsx";

export default function DrawerCloseButton() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer
        open={open}
        size="md"
        anchor="right"
        onClose={() => setOpen(false)}
      >
        <Box sx={{ padding: "1rem" }}>
          <ModalClose onClick={() => setOpen(false)} />

          <ResumeAccordionForm />
        </Box>
      </Drawer>
    </Box>
  );
}
