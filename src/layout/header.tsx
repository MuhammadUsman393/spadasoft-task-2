import Search from "../components/search";
import MobileNav from "./mobileNav";
import { navIcons } from "../constants/navIcons";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        paddingLeft: { xs: 1, md: 2 },
        paddingRight: { xs: 1, md: 2 },
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: "white",
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MobileNav />
        <Box
          sx={{
            color: "#343C6A",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Overview
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ display: { lg: "flex", xs: "none" } }}>
            <Search />
          </Box>
          {navIcons.map((item, index) => (
            <Button
              key={index}
              sx={{
                display: { lg: "flex", xs: "none" },
                alignItems: "center",
                py: "0px",
                px: "14px",
                minWidth: "0px",
                borderRadius: "50%",
                backgroundColor: "#F5F7FA",
                cursor: "pointer",
              }}
            >
              {item.icon}
            </Button>
          ))}
          <Box>
            <img
              src="/assets/profile.svg"
              alt=""
              style={{ height: "50px", borderRadius: "50%", cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: "16px", display: { lg: "none" } }}>
        <Search />
      </Box>
    </Box>
  );
};

export default Header;
