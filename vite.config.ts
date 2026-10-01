import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine which page to build based on env variable
const PAGE = process.env.BUILD_PAGE || "main";

const pageInputs: Record<string, string> = {
  main: path.resolve(__dirname, "index.html"),
  "construcao-e-reforma": path.resolve(__dirname, "construcao-e-reforma/index.html"),
  "reforma-residencial-curitiba": path.resolve(__dirname, "reforma-residencial-curitiba/index.html"),
  "construtora-curitiba": path.resolve(__dirname, "construtora-curitiba/index.html"),
  "orcamento-construcao-civil": path.resolve(__dirname, "orcamento-construcao-civil/index.html"),
};

const outDirs: Record<string, string> = {
  main: path.resolve(__dirname, "dist"),
  "construcao-e-reforma": path.resolve(__dirname, "dist"),
  "reforma-residencial-curitiba": path.resolve(__dirname, "dist"),
  "construtora-curitiba": path.resolve(__dirname, "dist"),
  "orcamento-construcao-civil": path.resolve(__dirname, "dist"),
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: outDirs[PAGE] || "dist",
    emptyOutDir: PAGE === "main",
    rollupOptions: {
      input: pageInputs[PAGE] || pageInputs.main,
    },
  },
});
