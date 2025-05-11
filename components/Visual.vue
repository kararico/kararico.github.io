<template>
  <section class="sc-visual" data-color="#000">
    <h2 class="sc-title">
      <div class="txt-line1">
        <span class="txt-motion">PORTFOLIO</span>
        <span class="txt-motion">&</span>
      </div>
      <div class="txt-line2">
        <span class="txt-motion">WEB</span>
        <span class="txt-motion">PUBLISHER</span>
      </div>
    </h2>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // 텍스트 모션 초기 설정
  gsap.set(".txt-motion", {
    yPercent: 110,
    transformStyle: "preserve-3d",
    opacity: 0,
    rotationX: -45,
    transformOrigin: "0% 50% -100%",
  })

  // 비주얼 섹션 애니메이션
  const visualAni = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-visual .sc-title',
      start: 'top 30%',
      end: 'bottom top',
      scrub: 1
    }
  })

  visualAni
    .addLabel('a')
    .to('.sc-visual .txt-line1', { xPercent: 100 }, 'a')
    .to('.sc-visual .txt-line2', { xPercent: -100 }, 'a')
})
</script>
