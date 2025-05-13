<template>
  <div>
    <Loading />
    <div id="wrapper">
      <Cursor />
      <div class="background"></div>
      <Header />
      <main class="container">
        <Visual />
        <Intro />
        <Project />
        <Goal />
        <Contact /> 
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Loading from '~/components/Loading.vue'
import Header from '~/components/Header.vue'
import Visual from '~/components/Visual.vue'
import Intro from '~/components/Intro.vue'
import Project from '~/components/Project.vue'
import Goal from '~/components/Goal.vue'
import Contact from '~/components/Contact.vue'
import Cursor from '~/components/Cursor.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // 배경색 변경 애니메이션
  document.querySelectorAll('[data-color]').forEach((el) => {
    const color = el.getAttribute('data-color') === '#fff' ? 'white' : 'black'
    
    gsap.to('.background', {
      scrollTrigger: {
        trigger: el,
        start: 'top 40%',
        end: 'bottom top',
        scrub: 1,
        toggleClass: {
          targets: '.background',
          className: color
        }
      }
    })
  })
})
</script>

<style lang="scss" scoped>
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
</style>