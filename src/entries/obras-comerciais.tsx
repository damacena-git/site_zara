import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import ObrasComerciaisPage from "../pages/ObrasComerciaisPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ObrasComerciaisPage />
  </StrictMode>
);
