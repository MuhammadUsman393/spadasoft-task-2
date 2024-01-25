import { useState } from "react";
import Bar from "../icons/bar";
import Sidebar from "./sidebar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: { lg: "none" }, alignItems: "center" }}>
      <Box
        sx={{ display: { lg: "none" }, cursor: "pointer" }}
        onClick={toggleMenu}
      >
        <Bar />
      </Box>
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={toggleMenu}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            right: 0,
          },
        }}
      >
        <Sidebar />
      </Drawer>
    </Box>
  );
};

export default MobileNav;
