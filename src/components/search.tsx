import SearchIcon from "../icons/search";
import Box from "@mui/material/Box";

const Search = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "50px",
        borderRadius: "40px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          insetY: 0,
          left: 0,
          paddingLeft: 2,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <SearchIcon />
      </Box>
      <input
        type="text"
        placeholder="Search for something"
        style={{
          height: "100%",
          paddingLeft: "40px",
          paddingRight: "16px",
          borderRadius: "40px",
          width: "100%",
          color: "#8BA3CB",
          border: "none",
          backgroundColor: "#F5F7FA",
        }}
      />
    </Box>
  );
};

export default Search;
