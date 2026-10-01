import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import OrcamentoConstrucaoPage from "../pages/OrcamentoConstrucaoPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OrcamentoConstrucaoPage />
  </StrictMode>
);
