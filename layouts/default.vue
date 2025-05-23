<template>
  <div class="layout">
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
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Loading from '@/components/Loading.vue'
  import Cursor from '@/components/Cursor.vue'
  import Visual from '@/components/Visual.vue'
  import { provide, ref, inject, type Ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const cursorRef = ref<InstanceType<typeof Cursor> | null>(null)
  const visualRef = inject<Ref<InstanceType<typeof Visual> | null>>('visualRef', ref(null))

  const isLoading = ref(true)

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
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
