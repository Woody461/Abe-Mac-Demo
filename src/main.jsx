import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import theme from "./config/theme";

import App from "./App";

// ---------------------------
// Apply Theme
// ---------------------------

document.documentElement.style.setProperty(
  "--primary",
  theme.primary
);

document.documentElement.style.setProperty(
  "--secondary",
  theme.secondary
);

document.documentElement.style.setProperty(
  "--background",
  theme.background
);

document.documentElement.style.setProperty(
  "--text",
  theme.text
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);