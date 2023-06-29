import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3333,
    proxy: {
      '/api': {
        target: 'https://xxx.tech',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将请求中/api用空值替换重写，根据实际业务修改
      },
    }
  }
})
