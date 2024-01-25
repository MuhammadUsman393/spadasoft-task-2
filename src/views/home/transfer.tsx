import { createRef, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SidebarToggle from "../../icons/sidebarToggle";
import Send from "../../icons/send";
import { quickTransfer } from "../../constants/quickTransfer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Transfer = () => {
  const SliderRef = createRef<Slider>();
  const [amount, setAmount] = useState("");
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };

  return (
    <Box>
      <Typography
        variant="h6"
        color="#343C6A"
        fontFamily="inter"
        fontWeight="bold"
        mb={4}
      >
        Quick Transfer
      </Typography>
      <Box p={2} bgcolor="white" borderRadius="20px">
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Box
            sx={{
              width: {
                xs: "70vw",
                sm: "40vw",
                md: "32vw",
                lg: "25vw",
                xl: "450px",
              },
            }}
          >
            <Slider ref={SliderRef} {...settings}>
              {quickTransfer.map((data, index) => (
                <Box key={index}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={data.image}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="#232323"
                    sx={{
                      fontSize: "xs",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#718EBF"
                    sx={{
                      fontSize: "xs",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {data.position}
                  </Typography>
                </Box>
              ))}
            </Slider>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              height: "fit-content",
              p: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50px",
              border: "1px solid #000",
            }}
            onClick={() => SliderRef.current?.slickNext()}
          >
            <SidebarToggle />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            ml: 2,
            mt: 4,
          }}
        >
          <Typography variant="body2" color="#718EBF" sx={{ fontSize: "sm" }}>
            Write Amount
          </Typography>
          <Box
            sx={{ position: "relative", display: "flex", alignItems: "center" }}
          >
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              style={{
                backgroundColor: "#EDF1F7",
                color: "#718EBF",
                fontSize: "sm",
                paddingTop: "15px",
                paddingBottom: "15px",
                borderRadius: "50px",
                border: "none",
                paddingLeft: "10px",
              }}
            />
            <Button
              sx={{
                marginLeft: "-80px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
                backgroundColor: "#2196f3",
                padding: "14px",
                height: "fit-content",
                borderRadius: "50px",
                paddingLeft: "16px",
                "&:hover": { backgroundColor: "#2196f3" },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "normal",
                }}
              >
                Send
              </Typography>
              <Send />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Transfer;
