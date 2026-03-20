import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This is the root site: <username>.github.io
  // No base path needed (defaults to '/')
})
