import Layout from "../layout/layout";
import Cards from "../views/home/cards";
import ActivityBarChart from "../views/home/activityBarChart";
import ExpensePolarArea from "../views/home/expensePolarArea";
import Transfer from "../views/home/transfer";
import BalanceLineChart from "../views/home/balanceLineChart";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ width: "100%", maxWidth: "1440px" }}>
        <Layout>
          <Cards />
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              px: 2,
            }}
          >
            <Box
              sx={{
                width: { lg: "65%", xs: "100%" },
                marginRight: { lg: 2, xs: 0 },
                marginBottom: 4,
              }}
            >
              <ActivityBarChart />
            </Box>
            <Box sx={{ width: { lg: "33%", xs: "100%" }, marginBottom: 4 }}>
              <ExpensePolarArea />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, px: 2 }}>
            <Box sx={{ width: { lg: "45%", xs: "100%" }, marginRight: { lg: 2, xs: 0 }, marginBottom: 4 }}>
              <Transfer />
            </Box>
            <Box sx={{ width: { lg: "52%", xs: "100%" }, marginBottom: 4 }}>
              <BalanceLineChart />
            </Box>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
};

export default Home;
