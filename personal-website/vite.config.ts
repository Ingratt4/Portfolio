import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  base: "/Portfolio/", // Ensure this matches your GitHub repository name
});
