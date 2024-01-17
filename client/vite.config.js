import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    server : {
      proxy: {
        '/spots': {
          target: 'https://localhost:5000',
           changeOrigin: true,
           secure: false,      
           ws: true,
        }
      }
    }
    plugins: [react()],
  };
});