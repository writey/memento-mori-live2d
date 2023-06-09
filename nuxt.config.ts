// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    head: {
      script: [{ src: '/live2dcubismcore.js', async: true, body: true }]
    }
  },
  router: {
    options: {
      hashMode: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
