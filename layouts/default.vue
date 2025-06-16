<template>
  <div class="layout" ref="layoutRef">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <Cursor ref="cursorRef" />
  </div>
  <Loading v-if="isLoading" @animation-complete="handleLoadingComplete" />
</template>

<script setup lang="ts">
  import { useHead } from '#imports'

  useHead({
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Zephyr:wght@400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap' }
    ]
  })

  
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Loading from '@/components/Loading.vue'
  import Cursor from '@/components/Cursor.vue'
  import Visual from '@/components/Visual.vue'
  import { provide, ref, inject, type Ref, onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const cursorRef = ref<InstanceType<typeof Cursor> | null>(null)
  const visualRef = inject<Ref<InstanceType<typeof Visual> | null>>('visualRef', ref(null))

  const isLoading = ref(true)
  const layoutRef = ref<HTMLElement | null>(null)

  const handleLoadingComplete = () => {
    isLoading.value = false
    // 커서 활성화
    cursorRef.value?.activate()
    // Visual 컴포넌트의 handleLoadingComplete 호출
    visualRef.value?.handleLoadingComplete()
    // 이벤트 발생
    window.dispatchEvent(new CustomEvent('loading-complete'))
  }

  const scrollToSection = (section: string) => {
    // 이 함수는 아래에서 slot으로 내려주거나, window 이벤트로 연결
    window.dispatchEvent(new CustomEvent('scroll-to-section', { detail: section }))
  }
  provide('scrollToSection', scrollToSection)

  // 리사이즈 이벤트 핸들러
  const handleResize = () => {
    if (layoutRef.value) {
      layoutRef.value.style.minHeight = `${window.innerHeight}px`
    }
  }

  onMounted(() => {
    handleResize() // 초기 높이 설정
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
}
</style>
