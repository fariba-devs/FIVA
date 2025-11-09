import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'supabase': ['@supabase/supabase-js'],
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          'framer-motion': ['framer-motion'],
          'swiper': ['swiper'],
          'react-query': ['@tanstack/react-query'],
          'form-libs': ['react-hook-form', 'react-hot-toast', 'zustand'],
          'icons': ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
});