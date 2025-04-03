import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'container',
      remotes: {
        vueRemote: 'http://localhost:5001/assets/vueRemote.js',
        reactRemote: 'http://localhost:5002/assets/reactRemote.js'
      },
      shared: ['vue', 'react', 'react-dom'],
    })
  ],
  
  server: {
    port: 5000
  }
})
