// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  build: {
    rollupOptions: {
      external: ['src/dummy/**'],
    },
  },
  optimizeDeps: {
    exclude: ['src/dummy/*'], // ✅ Vite가 이 폴더를 최적화 대상에서 제외
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3006',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
