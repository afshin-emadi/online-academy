import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@stores": path.resolve(__dirname, "src/stores/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
    },
  },
  plugins: [react()],
});
