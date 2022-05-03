import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), reactRefresh()],
});
