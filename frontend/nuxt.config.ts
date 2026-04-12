// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
  ],

  i18n: {
    defaultLocale: "en",
  },
});
