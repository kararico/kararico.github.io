<template>
  <main class="container">
    <Visual ref="visualRef" />
    <section ref="aboutRef"><About /></section>
    <section ref="clientRef"><Client /></section>
    <section ref="projectRef"><Project /></section>
    <section ref="contactRef"><Contact :showMessageArea="true" /></section>
  </main>
  <ScrollTop />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, provide, type Ref } from 'vue'
import Visual from '~/components/Visual.vue'
import About from '~/components/About.vue'
import Project from '~/components/Project.vue'
import Client from '~/components/Client.vue'
import Contact from '~/components/Contact.vue'
import ScrollTop from '~/components/ScrollTop.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useHead } from '#imports'

useHead({
  title: '정원 포트폴리오 | JUNGWON Portfolio',
  meta: [
    { name: 'description', content: '2025년 웹퍼블리셔 정원의 포트폴리오 사이트입니다.' }
  ]
})

const visualRef = ref<InstanceType<typeof Visual> | null>(null)
provide('visualRef', visualRef as Ref<InstanceType<typeof Visual> | null>)

const aboutRef = ref<HTMLElement | null>(null)
const clientRef = ref<HTMLElement | null>(null)
const projectRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)

function scrollToSection(section: string) {
  nextTick(() => {
    let el: HTMLElement | null = null
    if (section === 'about') el = aboutRef.value
    else if (section === 'client') el = clientRef.value
    else if (section === 'project') el = projectRef.value
    else if (section === 'contact') el = contactRef.value

    if (el) {
      const header = document.querySelector('.header') as HTMLElement
      const headerHeight = header ? header.offsetHeight : 0
      gsap.to(window, {
        scrollTo: { y: el.offsetTop - headerHeight },
        duration: .15,
        ease: 'Expo.InOut'
      })
    }
  })
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  window.addEventListener('scroll-to-section', (e) => {
    scrollToSection((e as CustomEvent).detail)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll-to-section', (e) => {
    scrollToSection((e as CustomEvent).detail)
  })
})
</script>

