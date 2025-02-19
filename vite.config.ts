import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true, // Exposes the app on the network (0.0.0.0)
    // port: 5174, // Specify the port if necessary
  },
  build: {
    sourcemap: false, // Disable source maps
    outDir: "dist", // Optional: Specify the output directory for build files
  },
});
