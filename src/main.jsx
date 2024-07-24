import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TripProvider } from "./context/TripProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TripProvider>
        <App />
      </TripProvider>
    </BrowserRouter>
  </React.StrictMode>
);
