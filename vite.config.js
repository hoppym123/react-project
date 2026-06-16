import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Vite Configuration
 * Production-ready configuration with optimization and caching strategies
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
    target: 'ES2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate third-party dependencies for better caching
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-libs': ['swiper', 'aos'],
        },
      },
    },
    // Generate source maps for production debugging
    sourcemap: false,
    // Chunk size warnings threshold (in kB)
    chunkSizeWarningLimit: 1000,
  },

  // Optimization settings
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'swiper', 'aos'],
  },

  // Environment variables prefix
  envPrefix: 'VITE_',
});

