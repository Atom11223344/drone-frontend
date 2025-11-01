import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page2: resolve(__dirname, 'page2.html'),
        page3: resolve(__dirname, 'page3.html'),
        config: resolve(__dirname, 'config.html'), // <--- เพิ่มบรรทัดนี้
      },
    },
  },
})