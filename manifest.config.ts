import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: "Volumer",
  version: "0.0.1",
  action: {
    default_icon: {
      16: "src/assets/icon16.png",
      32: "src/assets/icon32.png",
      48: "src/assets/icon48.png",
      128: "src/assets/icon128.png",
    },
    default_title: "Volumer - an audio controller",
    default_popup: "src/pages/popup.html",
  },
  icons: {
    16: "src/assets/icon16.png",
    32: "src/assets/icon32.png",
    48: "src/assets/icon48.png",
    128: "src/assets/icon128.png",
  },
  host_permissions: ["<all_urls>"],
  permissions: ["tabs"],
}));
