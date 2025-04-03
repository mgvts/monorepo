import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const APPLICATION_PORT = 5002

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'reactRemote',
      filename: 'reactRemote.js',
      exposes: {
        './mountReactComponent': './src/ReactComponent.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
  },
  server: {
    port: APPLICATION_PORT,
  },
  preview: {
    port: APPLICATION_PORT,
  },
})
