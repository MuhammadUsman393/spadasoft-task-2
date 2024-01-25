import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Box from "@mui/material/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: "100%",
          height: "100vh",
          maxWidth: "245px",
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Header />
        <Box sx={{ backgroundColor: "#F5F7FA" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
