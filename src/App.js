import React from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import "./App.css";

import theme from "./theme";
import Routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
