import React from "react";
import ReactDOM from "react-dom/client";
import globalStyles from "./styles/globalStyles";
import { Home } from "./pages/Home/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
