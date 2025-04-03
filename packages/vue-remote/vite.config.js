import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

const APPLICATION_PORT = 5001

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vueRemote",
      filename: "vueRemote.js",
      exposes: {
        "./VueComponent": "./src/components/VueComponent.vue",
      },
      shared: ["vue"],
    }),
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
});
