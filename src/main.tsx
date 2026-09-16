import { createRoot } from "react-dom/client";
import App from "./app";
import { StrictMode } from "react";
import "./i18n";
import "./main.css";
import AuthContextProvider from "./context/AuthContext";
import { loadBootstrap } from "./utils/bootstrap";

(async function startApp() {
  const direction = document.documentElement.dir as "ltr" | "rtl";

  await loadBootstrap(direction);

  const rootElement = document.getElementById("root")!;

  createRoot(rootElement).render(
    <StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </StrictMode>
  );
})()
