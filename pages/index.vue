<template>
    <Loading v-if="isLoading" @animation-complete="handleLoadingComplete" />
    <Cursor />
    <div class="background"></div>
    <!-- <Header /> -->
    <main class="container">
      <Visual ref="visualRef" />
      <About />
      <!-- <Client /> -->
      <Project />
      <Contact />
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Loading from '~/components/Loading.vue'
import Visual from '~/components/Visual.vue'
import About from '~/components/About.vue'
import Project from '~/components/Project.vue'
import Client from '~/components/Client.vue'
import Contact from '~/components/Contact.vue'
import Cursor from '~/components/Cursor.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isLoading = ref(true)
const visualRef = ref<InstanceType<typeof Visual> | null>(null)

const handleLoadingComplete = () => {
  isLoading.value = false
  // Visual 컴포넌트의 텍스트 애니메이션 시작
  visualRef.value?.handleLoadingComplete()
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
})
</script>

