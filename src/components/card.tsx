import { cardItem } from "../types/cardItem";
import BankCard from "../icons/bankCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Card = ({ check, item }: { check: boolean; item: cardItem }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        height: "100%",
        backgroundColor: check ? "#6478f0" : "white",
        color: check ? "white" : "#343C6A",
        border: check ? "none" : "1px solid #dcdcdc",
      }}
    >
      <Box sx={{ p: 2, pb: "28px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="body2"
              sx={{ color: !check ? "gray.500" : "inherit" }}
            >
              Balance
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {item.balance}
            </Typography>
          </Box>
          <Box>
            {check ? (
              <img
                src="/assets/card1.svg"
                alt=""
                style={{ width: "29px", height: "29px" }}
              />
            ) : (
              <img
                src="/assets/card2.svg"
                alt=""
                style={{ width: "29px", height: "29px" }}
              />
            )}
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{ color: check ? "inherit" : "gray.500" }}
            >
              CARD HOLDER
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {item.cardHolder}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: check ? "inherit" : "gray.500" }}
            >
              VALID THRU
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {item.valid}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
          backgroundColor: check ? "rgba(255, 255, 255, 0.1)" : "transparent",
          borderTop: check ? "none" : "1px solid #dcdcdc",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>{item.cardNumber}</Typography>
          <Box sx={{ color: check ? "white" : "#9199AF" }}>
            <BankCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
