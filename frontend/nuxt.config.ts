// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
  ],

  icon: {
    serverBundle: {
      collections: ["ion"],
    },
  },

  alias: {
    "~": fileURLToPath(new URL("./", import.meta.url)),
  },

  colorMode: {
    preference: "light",
  },

  tailwindcss: {
    exposeConfig: true,
    config: {
      theme: {
        extend: {
          colors: {
            dark: "#151516",
            light: "#ffffff",
            gray: "#f5f5f5",
            darkGray: "#696969",
          },
        },
      },
    },
  },

  i18n: {
    defaultLocale: "en",
  },
});
