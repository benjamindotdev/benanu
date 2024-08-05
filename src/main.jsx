import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TripProvider } from "./context/TripProvider";
import { InfoProvider } from "./context/InfoContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProviderWrapper } from "./context/AuthContext.jsx";

const root = createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider>
//         <AuthProviderWrapper>
//           <App />
//         </AuthProviderWrapper>
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TripProvider>
        <InfoProvider>
          <ThemeProvider>
            <AuthProviderWrapper>
              <App />
            </AuthProviderWrapper>
          </ThemeProvider>
        </InfoProvider>
      </TripProvider>
    </BrowserRouter>
  </React.StrictMode>
);
