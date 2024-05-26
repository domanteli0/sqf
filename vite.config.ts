import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
      proxy: {
        '/api/recipe': 'http://localhost:7001',
        '/api/images': 'http://localhost:7004',
      },
    },
})
