import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aditya.github.io/', // Add this line — must match your repo name
  plugins: [react()]
})
