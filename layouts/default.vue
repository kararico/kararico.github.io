<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import { provide } from 'vue'

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
