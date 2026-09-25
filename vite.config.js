import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // На GitHub Pages сайт открывается по адресу
  // https://coderrrcoffee.github.io/antonina-karanfil/ — в подпапке.
  // При локальной разработке — в корне.
  base: command === 'build' ? '/antonina-karanfil/' : '/',
  plugins: [react()],
}))
