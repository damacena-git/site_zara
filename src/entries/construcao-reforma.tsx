import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import ConstrucaoReformaPage from "../pages/ConstrucaoReformaPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConstrucaoReformaPage />
  </StrictMode>
);
