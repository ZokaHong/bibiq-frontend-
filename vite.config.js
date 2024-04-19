import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/views"),
    },
  },
  // 設置一個代理來轉發前端發送的請求，以避免 CORS 限制
  // sever: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8001", // 後端地址
  //       changeOrigin: true,
  //       pathRewrite: { "^/api/v1": "" },
  //     },
  //   },
  // },
});
