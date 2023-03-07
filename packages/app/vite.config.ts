import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  server: {
    port: 3000,
  },
  // hot reloading for dependencies
  resolve: {
    alias: {
      '@company/app1': path.resolve(__dirname, '../app1/src/index.ts'),
      '@company/app2': path.resolve(__dirname, '../app2/src/index.ts'),
      '@company/shared': path.resolve(__dirname, '../shared/src/index.ts'),
    },
  },
})
