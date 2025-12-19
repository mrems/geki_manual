import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/geki_manual/', // Ajout de l'option de base pour GitHub Pages
  plugins: [react()],
})
