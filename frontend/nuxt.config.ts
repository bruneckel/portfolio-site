// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "motion-v"],
    },
  },

  modules: [
    "@nuxtjs/color-mode",
    "./modules/nuxt-theme-transition",
    "@nuxt/image",
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/eslint",
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
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },

  themeTransition: {
    variant: "spread",
    duration: "1s",
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

  eslint: {
    config: {
      stylistic: {
        indent: "tab",
        quotes: "single",
        semi: true,
      },
    },
  },

  i18n: {
    defaultLocale: "en",
  },
});
