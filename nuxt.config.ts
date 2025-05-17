// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: '정원 포트폴리오 | JUNGWON Portfolio',
      meta: [
        { name: 'description', content: '2025년 웹퍼블리셔 정원의 포트폴리오 사이트입니다.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:type', content: 'Website' },
        { property: 'og:title', content: '정원 포트폴리오 | JUNGWON Portfolio' },
        { property: 'og:url', content: 'https://kararico.github.io' },
        { property: 'og:description', content: '2025년 웹퍼블리셔 정원의 포트폴리오 사이트입니다.' },
        { property: 'og:image', content: 'https://kararico.github.io/og-image.png' },
        { property: 'og:site_name', content: '정원 포트폴리오 | JUNGWON Portfolio' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/helvetica-neue-9'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
        }
      ]
    }
  },
  css: [
    '@/assets/scss/imports.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/scss/abstracts/_var" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: 'service_kcpb8c8',
      emailjsTemplateId: 'template_svlyog9',
      emailjsPublicKey: '2mwZfZ5PDdllye2lc'
    }
  }
})
