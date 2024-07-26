import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TripProvider } from "./context/TripProvider";
import { InfoProvider } from "./context/InfoContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TripProvider>
        <InfoProvider>
          <App />
        </InfoProvider>
      </TripProvider>
    </BrowserRouter>
  </React.StrictMode>
);
