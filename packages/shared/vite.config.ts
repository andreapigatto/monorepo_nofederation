import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
// library mode
export default defineConfig({
  plugins: [react(), visualizer(), dts({ outputDir: 'dist/shared/types' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          dir: 'dist/shared/es',
          entryFileNames: '[name].mjs',
          format: 'es',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          preserveModules: true,
        },
        {
          dir: 'dist/shared/cjs',
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
