import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // นี่คือการบอก Vite ให้ Build ทุกหน้า ไม่ใช่แค่ index
        main: resolve(__dirname, 'index.html'),
        page2: resolve(__dirname, 'page2.html'),
        page3: resolve(__dirname, 'page3.html'),
      },
    },
  },
})