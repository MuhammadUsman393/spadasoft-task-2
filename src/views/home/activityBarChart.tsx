import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const activityData = [
  { week: "Sat", Withdraw: 490, Diposit: 240 },
  { week: "Sun", Withdraw: 330, Diposit: 120 },
  { week: "Mon", Withdraw: 330, Diposit: 270 },
  { week: "Tue", Withdraw: 490, Diposit: 380 },
  { week: "Wed", Withdraw: 160, Diposit: 220 },
  { week: "Thu", Withdraw: 410, Diposit: 250 },
  { week: "Fri", Withdraw: 400, Diposit: 330 },
];

function ActivityBarChart() {
  const data = {
    labels: activityData.map((data) => data.week),
    datasets: [
      {
        label: "Withdraw",
        data: activityData.map((data) => data.Withdraw),
        borderColor: "#1814F3",
        backgroundColor: "#1814F3",
        borderRadius: 30,
      },
      {
        label: "Diposit",
        data: activityData.map((data) => data.Diposit),
        borderColor: "#16DBCC",
        backgroundColor: "#16DBCC",
        borderRadius: 30,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
            weight: "normal",
          },
          usePointStyle: true,
          color: "#718EBF",
        },
      },
    },
    barPercentage: 0.6,
    categoryPercentage: 0.5,
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
            weight: "normal",
          },
          color: "#718EBF",
          stepSize: 100,
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
        Weekly Activity
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          p: { xs: 1, md: 2 },
          borderRadius: "20px",
        }}
      >
        <Bar data={data} options={options}></Bar>
      </Box>
    </Box>
  );
}

export default ActivityBarChart;
