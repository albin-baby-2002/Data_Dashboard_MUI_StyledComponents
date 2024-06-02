import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import { theme } from "./Theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
