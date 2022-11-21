import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://alexsancast.github.io/avocadoShopV2/",
  plugins: [react()]
})
