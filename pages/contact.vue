<template>
    <ContactForm />
</template>
  
  <script setup lang="ts">
    // Vue와 관련된 필요한 컴포넌트들을 import
    import { ref } from 'vue';
    import ContactForm from '@/components/Contact.vue';
  };
  </script>
  
  <style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;

  </style>
  