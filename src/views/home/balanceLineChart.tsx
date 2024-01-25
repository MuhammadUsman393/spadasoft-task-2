import { Line } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const balanceData = [
  { month: "Jul", balance: 100 },
  { month: "Aug", balance: 220 },
  { month: "Sep", balance: 410 },
  { month: "Oct", balance: 770 },
  { month: "Nov", balance: 200 },
  { month: "Dec", balance: 580 },
  { month: "Jan", balance: 220 },
];

function BalanceLineChart() {
  const data = {
    labels: balanceData.map((data) => data.month),
    datasets: [
      {
        label: "Balance",
        data: balanceData.map((data) => data.balance),
        borderColor: "#1814F3",
        borderWidth: 3,
        pointBorderColor: "#1814F3",
        pointBorderWidth: 2,
        tension: 0.5,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "#BBDEFB");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: false,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
            weight: "normal",
          },
          stepSize: 200,
          color: "#718EBF",
        },
        title: {
          display: false,
        },
        min: 0,
      },
      x: {
        ticks: {
          font: {
            size: 12,
            weight: "normal",
          },
          color: "#718EBF",
        },
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <Box>
      <Typography variant="h6" color="#343C6A" fontWeight="bold" mb={4}>
        Balance History
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          p: { xs: 1, md: 2 },
          borderRadius: "20px",
          "&:hover": { boxShadow: "7px 5px 4px 0px #dcdcdc" },
        }}
      >
        <Line data={data} options={options}></Line>
      </Box>
    </Box>
  );
}

export default BalanceLineChart;
