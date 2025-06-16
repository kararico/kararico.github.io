<template>
    <ContactForm />
</template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import ContactForm from '@/components/Contact.vue';
    import { useHead } from '#imports'

    useHead({
      title: 'Contact | 정원 포트폴리오',
      meta: [
        { name: 'description', content: '정원에게 연락할 수 있는 페이지입니다.' }
      ]
    })
  </script>
  
  <style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;

  </style>
  