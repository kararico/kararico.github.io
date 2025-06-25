// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // GitHub Pages 배포를 위한 설정
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/kararico.github.io/' : '/',
    buildAssetsDir: '/_nuxt/'
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
  // Sass 레거시 API 경고 해결
  nitro: {
    experimental: {
      wasm: true
    }
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
  // SSR 활성화 (GitHub Pages에서 정적 사이트로 생성)
  ssr: true
})
