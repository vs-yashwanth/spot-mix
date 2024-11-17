import Home from "./components/Home";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({});
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
