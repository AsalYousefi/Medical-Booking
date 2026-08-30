import { createRoot } from "react-dom/client";
import App from "./app";
import { StrictMode } from "react";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./main.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
