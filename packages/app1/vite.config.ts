import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
// library mode
export default defineConfig({
  plugins: [react(), visualizer(), dts({ outputDir: 'dist/app1/types' })],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          dir: 'dist/app1/es',
          entryFileNames: '[name].mjs',
          format: 'es',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          preserveModules: true,
        },
        {
          dir: 'dist/app1/cjs',
          format: 'cjs',
          entryFileNames: '[name].js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          preserveModules: true,
        },
      ],
    },
  },
})
