import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite.
// `base: './'` hace que las rutas de los assets generados sean relativas,
// lo que evita problemas de rutas absolutas tanto en Vercel como en
// cualquier hosting estático.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
