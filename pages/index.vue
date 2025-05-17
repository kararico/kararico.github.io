<template>
    <!-- <Loading /> -->
    <Cursor />
    <div class="background"></div>
    <!-- <Header /> -->
    <main class="container">
      <Visual />
      <About />
      <Project />
      <Contact />
    </main>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import Loading from '~/components/Loading.vue'
  import Visual from '~/components/Visual.vue'
  import About from '~/components/About.vue'
  import Project from '~/components/Project.vue'
  import Contact from '~/components/Contact.vue'
  import Cursor from '~/components/Cursor.vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

  })
</script>

<!-- <style lang="scss" scoped>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: -1;
    transition: background-color 0.5s ease;

    &.white {
      background-color: #fff;
    }
    
    &.black {
      background-color: #000;
    }
  }
</style> -->