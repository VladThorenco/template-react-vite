import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      shared: '/src/shared',
      assets: '/src/assets',
      core: '/src/core',
    },
  },
});
