import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import ReformaResidencialPage from "../pages/ReformaResidencialPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReformaResidencialPage />
  </StrictMode>
);
