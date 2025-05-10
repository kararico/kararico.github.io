// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/common.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: '@import "@/assets/scss/variables.scss";'
        // }
      }
    }
  }
})
