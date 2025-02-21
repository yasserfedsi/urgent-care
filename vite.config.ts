import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        blog: './src/blog/index.html',
        main: './index.html',
        // Add more pages here, e.g., about: './src/about/index.html'
      },
    },
  },
});
