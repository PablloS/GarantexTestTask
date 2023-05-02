import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

const vitePWA = VitePWA({
  registerType: "autoUpdate", 
  outDir: "build", 
  manifest: {
    name: 'Garantex test task', 
    short_name: 'garantex task', 
    description: "test task reactPWA", 
    theme_color: "#ffffff", 
    icons: [{
      src: 'assets/images/android-chrome-192x192.png', 
      sizes: '192x192', 
      type: 'image/png'
    }, 
    {
      src: 'assets/images/android-chrome-384x384.png', 
      sizes: '384x384', 
      type: 'image/png'
    },
    {
      src: 'assets/images/maskable_icon.png', 
      sizes: '384x384', 
      type: 'image/png', 
      purpose: "any maskable"
    }]
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2017",
    outDir: "build",
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.(ttf|otf|fnt|woff)$/.test(name ?? "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
  plugins: [react(), vitePWA],
})


