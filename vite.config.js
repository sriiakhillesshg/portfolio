import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites are served from /<repo-name>/, not /.
  // If you're using a <username>.github.io repo (user/org site), leave it as '/'.
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
