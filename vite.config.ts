import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { resolve, basename } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(),
    svgr(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src')
    },
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
  css: {
    modules: {
      generateScopedName(name, path) {
        const filename = basename(path).split('.')[0]
        return `${filename}-${name}`
      },
    }
  }
})
