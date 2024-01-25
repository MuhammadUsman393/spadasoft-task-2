import { PolarArea } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const expenseData = [
  { name: "Entertainment", expense: 30, color: "rgba(52,60,106,0.5)" },
  { name: "Bill Expense", expense: 15, color: "rgba(252,121,0,0.5)" },
  { name: "Investment", expense: 20, color: "rgba(250,0,255,0.5)" },
  { name: "Others", expense: 35, color: "rgba(24,20,243,0.5)" },
];

function ExpensePolarArea() {
  const data = {
    labels: expenseData.map((data) => data.name),
    datasets: [
      {
        label: "Expense",
        data: expenseData.map((data) => data.expense),
        backgroundColor: expenseData.map((data) => data.color),
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: false,
    },
    responsive: true,
    scales: {
      r: {
        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: {
            size: 10,
            color: "#718EBF",
          },
        },
        min: 0,
      },
    },
    angleLines: {
      display: false,
    },
  };

  return (
    <Box>
      <Typography variant="h6" color="#343C6A" fontWeight="bold" mb={4}>
        Expense Statistics
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          p: { xs: 1, sm: 2 },
          borderRadius: "20px",
          "&:hover": { boxShadow: "7px 5px 4px 0px #dcdcdc" },
        }}
      >
        <PolarArea data={data} options={options}></PolarArea>
      </Box>
    </Box>
  );
}

export default ExpensePolarArea;
