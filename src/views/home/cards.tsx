import Card from "../../components/card";
import { cardData } from "../../constants/cardData";
import { recentTransaction } from "../../constants/recentTransaction";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <Box sx={{ p: "20px" }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "66%" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              mt: { xs: "3px", lg: 0 },
            }}
          >
            <Typography variant="h6" color="#343C6A" fontWeight="bold">
              My Cards
            </Typography>
            <Typography
              variant="subtitle2"
              color="#343C6A"
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
            >
              See All
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", gap: 2, overflowX: "auto", width: "100%" }}
          >
            {cardData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "270px", sm: "50%" },
                  height: "100%",
                  flexShrink: {xs: 0, sm:1 }
                }}
              >
                <Card check={index === 0 ? true : false} item={item} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "33%" }}}>
          <Typography
            variant="h6"
            color="#343C6A"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Recent Transaction
          </Typography>
          <Box
            sx={{
              borderRadius: "20px",
              backgroundColor: "white",
              p: 2,
              height: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": { boxShadow: "7px 5px 4px 0px #dcdcdc" },
            }}
          >
            {recentTransaction.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box sx={{display:"flex", gap:1}}>
                  <Box
                    sx={{
                      backgroundColor: "#FFF5D9",
                      px: "10px",
                      py: "10px",
                      display: "flex",
                      alignItems: "center",
                      justigyContent: "center",
                      borderRadius: "50%",
                      height: "fit-content"
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      color="#232323"
                      fontSize={{ xs: "13px", lg: "14px" }}
                      fontWeight="bold"
                      sx={{ mb: "0px" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="#718EBF" fontSize="xs">
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="subtitle1"
                  color={item.increase ? "#41D4A8" : "#FF4B4A"}
                  fontSize={{ xs: "11px", lg: "14px" }}
                  fontWeight="bold"
                >
                  {item.increase ? `+${item.amount}` : `-${item.amount}`}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
