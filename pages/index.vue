<template>
  <main class="container">
    <Visual ref="visualRef" />
    <section ref="aboutRef"><About /></section>
    <section ref="clientRef"><Client /></section>
    <section ref="projectRef"><Project /></section>
    <section ref="contactRef"><Contact /></section>
  </main>
  <ScrollTop />
</template>

<script setup lang="ts">
import { onMounted, ref, provide, type Ref } from 'vue'
import Visual from '~/components/Visual.vue'
import About from '~/components/About.vue'
import Project from '~/components/Project.vue'
import Client from '~/components/Client.vue'
import Contact from '~/components/Contact.vue'
import ScrollTop from '~/components/ScrollTop.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

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

