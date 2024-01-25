import { pageLinks } from "../constants/pageLinks";
import Button from "@mui/material/Button";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Sidebar = () => {
  const [active, setActive] = useState(0);
  const handleActive = (index: number) => {
    setActive(index);
  };

  return (
    <Box
      sx={{
        width: "220px",
        borderRight: "1px solid #eee",
        backgroundColor: "white",
        height: "100vh",
        flexShrink: 0,
        py: 1,
        px: "12px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: 1,
          }}
        >
          <Box
            sx={{ display: "flex", gap: 2, alignItems: "center", px: 1, pt: 2 }}
          >
            <img
              src="/assets/logo.svg"
              alt=""
              style={{ width: "36px", height: "36px" }}
            />
            <Box
              sx={{
                color: "#343C6A",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              BankDash.
            </Box>
          </Box>
        </Box>

        {pageLinks.map((item, index) => (
          <Box key={index}>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                py: "10px",
                px: 1,
                cursor: "pointer",
                borderRadius: "none",
                boxShadow: "none",
                width: "100%",
                ...(index === active
                  ? { color: "#2D60FF" }
                  : { color: "#B1B1B1" }),
              }}
              onClick={() => handleActive(index)}
            >
              <Typography>{item.icon}</Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                {item.title}
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
