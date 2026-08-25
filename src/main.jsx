import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import "./i18n"
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
