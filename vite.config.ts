import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          reactThree: [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/rapier",
            "@react-three/postprocessing",
          ],
        },
      },
    },
  },
});
