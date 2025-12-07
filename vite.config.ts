import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 1. Esbuild ayarı: Console.log ve debugger'ları temizler (En hızlı yöntem)
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    // 2. Minify işlemini varsayılan (esbuild) bırakıyoruz, terser'a gerek yok
    minify: 'esbuild', 
    
    // Code splitting ayarların aynen kalabilir
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})