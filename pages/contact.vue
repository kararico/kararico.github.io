<template>
    <ContactForm />
</template>
  
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ContactForm from '@/components/Contact.vue';
import { useHead } from '#imports'
import { usePageScroll } from '@/composables/usePageScroll'

// 스크롤 위치 관리 훅 추가
const { onPageEnter, onPageLeave } = usePageScroll()

useHead({
  title: 'Contact | 정원 포트폴리오',
  meta: [
    { name: 'description', content: '정원에게 연락할 수 있는 페이지입니다.' }
  ]
})

onMounted(() => {
  // 페이지 진입 시 스크롤 위치 복원
  onPageEnter()
})

onUnmounted(() => {
  // 페이지 이탈 시 스크롤 위치 저장
  onPageLeave()
})
</script>
  
<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
@use '@/assets/scss/common/_common' as *;

</style>
  