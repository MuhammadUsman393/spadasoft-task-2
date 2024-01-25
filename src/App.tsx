import { AppProvider } from "./context/activeLink";
import Home from "./pages/home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1000,
        xl: 1440,
      },
    },
  });

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
