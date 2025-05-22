<template>
  <div class="layout">
    <Header :class="{ 'black': isBlackHeader }" />
    <main>
      <slot />
    </main>
    <Footer />
    <Cursor ref="cursorRef" />
  </div>
  <Loading v-if="isLoading" @animation-complete="handleLoadingComplete" />
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Loading from '@/components/Loading.vue'
  import Cursor from '@/components/Cursor.vue'
  import { provide, computed, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const cursorRef = ref<InstanceType<typeof Cursor> | null>(null)

  // 헤더가 검은색이어야 하는 페이지 목록
  const blackHeaderPages = ['/about', '/project', '/contact']

  // 현재 페이지가 검은색 헤더를 사용해야 하는지 확인
  const isBlackHeader = computed(() => {
    return blackHeaderPages.includes(route.path)
  })

  const isLoading = ref(true)

  const handleLoadingComplete = () => {
    isLoading.value = false
    // 커서 활성화
    cursorRef.value?.activate()
  }

  const scrollToSection = (section: string) => {
    // 이 함수는 아래에서 slot으로 내려주거나, window 이벤트로 연결
    window.dispatchEvent(new CustomEvent('scroll-to-section', { detail: section }))
  }
  provide('scrollToSection', scrollToSection)
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  min-height: 100vh;
}
</style>
