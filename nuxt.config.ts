// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  ssr: false
})
