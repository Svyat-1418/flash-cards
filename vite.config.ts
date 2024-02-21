import * as path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets') },
    ],
  },
})
