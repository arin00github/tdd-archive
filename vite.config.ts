import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tdd-archive",
  server: {
    open: "/tdd-archive",
    port: 2002,
  },
});
