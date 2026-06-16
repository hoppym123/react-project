import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Vite Configuration
 * Fixed for production compatibility using built-in esbuild
 */
export default defineConfig({
  plugins: [tailwindcss(), react()],

  // Server configuration for development
  server: {
    host: true,
    port: 5173,
    open: true,
  },

  // Built-in cleaner tool settings (Replaces Terser)
  esbuild: {
    drop: ['console', 'debugger'], // Safely deletes console logs on deployment
  },

  // Build optimization rules
  build: {
    target: 'esnext',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },

  // Optimization settings
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'swiper', 'aos'],
  },

  // Environment variables prefix
  envPrefix: 'VITE_',
});