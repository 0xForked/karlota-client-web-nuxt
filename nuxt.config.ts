import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: '@Karloa - Instant Messaging App',
      htmlAttrs: {lang: 'en', amp: true},
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '@Karloa - Instant Messaging App' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: '@Karlota, instant messaging app, messenger' },
        { name: 'robots', hid: 'robots', content: 'index, follow' }
      ],
    }
  },
  css: ["@/assets/css/main.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.ts")
    },
  },
  router: {
    base: '/',
    routeNameSplitter: '/',
  },
})
