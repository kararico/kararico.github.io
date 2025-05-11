<template>
  <div class="loading">
    <div class="num-wrap">
      <div class="num-box">
        <ul class="num-list list1">
          <li v-for="(letter, index) in letters1" :key="index" class="num-item">{{ letter }}</li>
        </ul>
      </div>
      <div class="num-box">
        <ul class="num-list list2">
          <li v-for="(letter, index) in letters2" :key="index" class="num-item">{{ letter }}</li>
        </ul>
      </div>
      <div class="num-box">
        <ul class="num-list list3">
          <li v-for="(letter, index) in letters3" :key="index" class="num-item">{{ letter }}</li>
        </ul>
      </div>
      <span class="num-txt">.</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from "gsap"

const letters1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O']
const letters2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const letters3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R']

onMounted(() => {
  const loadingAni = gsap.timeline({
    onComplete: () => {
      // 인트로 애니메이션 시작
      const introAni = gsap.to('.sc-visual .txt-motion', {
        transformStyle: "preserve-3d",
        opacity: 1,
        rotationX: 0,
        transformOrigin: "50% 50%",
        yPercent: 0,
        duration: 1.2,
        stagger: 0.1,
        paused: true
      })
      introAni.play()
    }
  })

  loadingAni
    .addLabel('a')
    .to('.loading .list1', { y: '-280vw', duration: 4 }, 'a')
    .to('.loading .list2', { y: '-140vw', duration: 5 }, 'a')
    .to('.loading .list3', { y: '-340vw', duration: 3 }, 'a')
    .to('.loading', { yPercent: -100, display: 'none' }, 'a+=5')
})
</script> 