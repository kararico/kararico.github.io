<template>
  <section class="sc-intro" data-color="#fff">
    <h2 class="blind">INTRODUCE</h2>
    <div class="intro-area">
      <div class="sub-tit">
        <h3 class="round" data-hover>INTRO</h3>
      </div>
      <div class="intro-box">
        <p class="intro-msg">
          <span class="txt-line1">
            <em class="txt1 txt-motion">HELLO!</em>&nbsp;
            <em id="profileHover" class="txt2 txt-motion" data-hover>I'M OH HYERIM</em>
            <span class="intro-bg">
              <span class="profile"></span>
              <span class="blind">My profile</span>
            </span>
          </span>
          <span class="txt-line2">
            <span class="txt txt-motion">I WANT TO BE</span>&nbsp;
            <span class="txt txt-motion">A CREATIVE</span>
          </span>
          <span class="txt-line3">
            <span class="txt txt-motion">WEB</span>
            <span class="txt txt-motion">PUBLISHER</span>
          </span>
        </p>
      </div>
    </div>
    <div class="point-area">
      <div class="column-left">
        <figure class="thumb-box">
          <img src="@/assets/images/ohr-gif.gif" alt="오혜림 소개">
        </figure>
      </div>
      <div class="column-right">
        <div class="desc-box">
          <strong class="desc-tit">There's more than meets the eye.</strong>
          <p class="desc-txt">
            시각적으로 아름답고 화려한 디자인만을 만드는 것이 전부가 아닌,
            최적의 사용자 경험을 제공하는 것을 목표로 하는
            웹 퍼블리셔가 되겠습니다.
          </p>
        </div>
      </div>
    </div>
    <div class="num-area">
      <div class="num-box">
        <span class="num-txt">0</span>
        <ul class="num-list">
          <li v-for="num in numbers" :key="num" class="num-item">{{ num }}</li>
        </ul>
        <span class="num-txt">.</span>
      </div>
    </div>
    <div class="caption-area">
      <div class="caption-box">
        <h3 class="sub-tit">MANIFESTO</h3>
        <p class="desc">GooD Design Means Good Business.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const numbers = ref([0, 1, 2])

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

  // 인트로 섹션 애니메이션
  const introAni = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-intro',
      start: 'top 30%',
      end: 'bottom top',
      scrub: 1
    }
  })

  introAni
    .addLabel('a')
    .to('.sc-intro .txt-line1', { xPercent: 100 }, 'a')
    .to('.sc-intro .txt-line2', { xPercent: -100 }, 'a')
    .to('.sc-intro .txt-line3', { xPercent: 100 }, 'a')

  // 숫자 카운트 애니메이션
  const numAni = gsap.timeline({
    scrollTrigger: {
      trigger: '.num-area',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    }
  })

  numAni
    .to('.num-list', {
      yPercent: -100,
      duration: 1,
      ease: 'none'
    })
})
</script>

<style scoped>
.sc-intro {
  /* 기존 CSS 스타일 유지 */
}
</style> 