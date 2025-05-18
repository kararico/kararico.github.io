<template>
  <div class="layout">
    <Loading v-if="isLoading" @animation-complete="handleAnimationComplete" />
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
import Loading from '@/components/Loading.vue'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

const handleAnimationComplete = () => {
  // 애니메이션이 끝나면 로딩 컴포넌트를 숨깁니다
  setTimeout(() => {
    isLoading.value = false
  }, 500) // 0.5초 후에 로딩 화면이 사라집니다
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  min-height: 100vh;
}
</style>
