import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { ViteFaviconsPlugin } from "vite-plugin-favicon"; 파비콘 플러그인 추가 [24-02-26]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 파비콘 플러그인 추가 [24-02-26]
    // ViteFaviconsPlugin({
    //   logo: "public/images/favicon.png"
    // })
  ],

  // 새로 추가
  server: {
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      }
    }
  }  
})
