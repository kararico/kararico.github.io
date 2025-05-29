<template>
  <div class="floating-buttons" :class="{ 'footer-overlap': isFooterOverlap }">
    <a 
      v-if="route.name !== 'about' && route.path !== '/about'"
      href="/profile.pdf" 
      class="resume-download"
      :class="{ 'is-visible': isVisible }"
      download
      aria-label="Download Profile">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M8 6H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 14H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span>Profile</span>
    </a>
    <button 
      class="scroll-top" 
      :class="{ 'is-visible': isVisible }"
      @click="scrollToTop"
      aria-label="Scroll to top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12H8V20H16V12H20L12 4Z" fill="currentColor"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const route = useRoute()
const isVisible = ref(false)
const isFooterOverlap = ref(false)
const scrollThreshold = 300 // 스크롤 탑 버튼이 보이기 시작하는 스크롤 위치

const handleScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold

  const footer = document.querySelector('footer')
  if (footer) {
    const footerRect = footer.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const scrollTop = document.querySelector('.scroll-top')
    const scrollTopHeight = scrollTop ? scrollTop.getBoundingClientRect().height : 0
    const scrollTopHalfHeight = scrollTopHeight / 2
    const gap = 16 // 1rem
    const padding = 16 // 1rem
    isFooterOverlap.value = footerRect.top < windowHeight - (scrollTopHalfHeight + gap + padding)
  } else {
    isFooterOverlap.value = false
  }
}

const scrollToTop = () => {
  gsap.to(window, {
    scrollTo: { y: 0 },
    duration: 0.1,
    ease: 'power2.inOut'
  })
}

onMounted(() => {
  gsap.registerPlugin(ScrollToPlugin)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  .floating-buttons {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 100;

    @include tablet {
      // bottom: 1.5rem;
      // right: 1.5rem;
    }

    &.footer-overlap {
      position: absolute;
      bottom: 10rem;
      margin-right:1rem;
      @include tablet {
        bottom: 8rem;
        margin-right: 0;
      }
      @include mobile {
        margin-right:0;
        bottom: 8rem;
      }
    }
  }

  .resume-download {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: rgba(30, 30, 30, 0.92);
    border: 2px solid #fff;
    color: #fff;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    text-decoration: none;
    position: relative;
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;

    span {
      position: absolute;
      right: 4rem;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s ease;
      font-size: 0.9rem;
      font-weight: 500;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);

      span {
        opacity: 1;
      }
    }

    &.is-visible {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    @include tablet {
      width: 3rem;
      height: 3rem;
      span {
        display: none;
      }
    }
  }

  .scroll-top {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: rgba(30, 30, 30, 0.92);
    border: 2px solid #fff;
    color: #fff;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }

    &.is-visible {
      opacity: 1;
      visibility: visible;
    }

    @include tablet {
      width: 3rem;
      height: 3rem;
    }
  }
</style> 