import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {

    alias: {
        "@": path.resolve(__dirname, "./src/"),
        "@components": `${path.resolve(__dirname, "./src/components/")}`,
        "@sections": `${path.resolve(__dirname, "./src/sections/")}`,
        "@image": `${path.resolve(__dirname, "./src/assets/image/")}`,
        "@fonts": `${path.resolve(__dirname, "./src/assets/fonts/")}`,
        "@style": `${path.resolve(__dirname, "./src/style/")}`,
        "@utils": `${path.resolve(__dirname, "./src/utils/")}`
    }

}
})
