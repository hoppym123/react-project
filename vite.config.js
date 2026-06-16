import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Vite Configuration
 * Production-ready configuration with optimization and compatibility fixes
 */
export default defineConfig({
  plugins: [tailwindcss(), react()],

  // Server configuration for development
  server: {
    host: true,
    port: 5173,
    open: true,
  },

  // Build optimization
  build: {
    // Fixed: Bypasses the lightningcss target compilation restriction
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Removed custom manualChunks function to allow Vite to bundle dependencies safely
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