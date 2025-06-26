// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // GitHub Pages 배포를 위한 설정
  app: {
    baseURL: '/',
    head: {
      title: '정원 포트폴리오 | JUNGWON Portfolio',
      meta: [
        { name: 'description', content: '2025년 웹퍼블리셔 정원의 포트폴리오 사이트입니다.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:type', content: 'Website' },
        { property: 'og:title', content: '정원 포트폴리오 | JUNGWON Portfolio' },
        { property: 'og:url', content: 'https://kararico.github.io' },
        { property: 'og:description', content: '2025년 웹퍼블리셔 정원의 포트폴리오 사이트입니다.' },
        { property: 'og:image', content: 'https://kararico.github.io/images/og_img.png' },
        { property: 'og:site_name', content: '정원 포트폴리오 | JUNGWON Portfolio' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Zephyr:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
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
    },
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    },
    // Sass 레거시 API 경고 제거
    optimizeDeps: {
      include: ['sass']
    },
    // Sass 설정
    plugins: []
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: 'service_kcpb8c8',
      emailjsTemplateId: 'template_svlyog9',
      emailjsPublicKey: '2mwZfZ5PDdllye2lc'
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  build: { 
    transpile: ['gsap']
  },
  // GitHub Pages를 위한 정적 사이트 생성
  ssr: false,
  // 정적 사이트 생성을 위한 설정
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/404.html']
    }
  }
})
