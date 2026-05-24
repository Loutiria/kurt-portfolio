import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { RecruiterModeProvider } from "./context/RecruiterModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <RecruiterModeProvider>
          <App />
        </RecruiterModeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);