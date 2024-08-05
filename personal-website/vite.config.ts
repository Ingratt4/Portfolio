import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "https://github.com/Ingratt4/Portfolio/build", // Ensure this matches your GitHub Pages project
  plugins: [react()],
  build: {
    outDir: "build",
    rollupOptions: {
      input: "index.html", // Ensure the correct entry point
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
});
