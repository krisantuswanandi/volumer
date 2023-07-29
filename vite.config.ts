import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import uno from "unocss/vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.config";

export default defineConfig({
  plugins: [vue(), uno(), crx({ manifest })],
  server: {
    port: 3000,
    hmr: {
      port: 3000,
    },
  },
});
