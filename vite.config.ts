import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { inspectAttr } from 'kimi-plugin-inspect-react';

export default defineConfig(({ mode }) => ({
  base: '/Portfolio/',
  plugins: [
    react(),
    mode === 'development' ? inspectAttr() : null
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
