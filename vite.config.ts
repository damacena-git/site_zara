import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multi-page application configuration for Vite & Vercel
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        "construcao-e-reforma": path.resolve(__dirname, "construcao-e-reforma/index.html"),
        "reforma-residencial-curitiba": path.resolve(__dirname, "reforma-residencial-curitiba/index.html"),
        "construtora-curitiba": path.resolve(__dirname, "construtora-curitiba/index.html"),
        "orcamento-construcao-civil": path.resolve(__dirname, "orcamento-construcao-civil/index.html"),
      },
    },
  },
});
