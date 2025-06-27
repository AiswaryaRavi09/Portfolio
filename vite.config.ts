import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // 👈 This is the correct fix
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


