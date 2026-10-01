import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import ConstrutoraCuritibaPage from "../pages/ConstrutoraCuritibaPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConstrutoraCuritibaPage />
  </StrictMode>
);
