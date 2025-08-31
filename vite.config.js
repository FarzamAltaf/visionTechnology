import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    manifest: {
      name: 'VisionTechnology',
      short_name: 'VisionTechnology',
      description: 'Vision Technology website',
      theme_color: '#000000',
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2,woff,ttf,eot}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024 // 🔥 10 MB tak allow
    }
  })
  ],
})