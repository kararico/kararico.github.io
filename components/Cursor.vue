<template>
  <div
    class="cursor"
    :class="{
      'cursor-over': isCursorOver,
      'img-over': isCursorImgOver,
      'cursor-shrink': isCursorShrink,
      'is-active': isActive
    }"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    v-show="!isMobile && isActive"
  >
    <span>View more</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 커서 위치 상태 관리
const cursorX = ref(0)
const cursorY = ref(0)

// 커서 상태 관리
const isCursorOver = ref(false)
const isCursorImgOver = ref(false)
const isCursorShrink = ref(false)
const isMobile = ref(false)
const isActive = ref(false)

// 커서 요소 참조
const cursor = ref<HTMLElement | null>(null)
const cursorOutline = ref<HTMLElement | null>(null)

// 모바일 환경 체크 함수
const checkMobile = () => {
  isMobile.value = window.matchMedia('(max-width: 767px)').matches
}

// 마우스 이동 처리 함수
const handleMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

// 호버 상태 처리 함수들
const handleHoverEnter = () => { isCursorOver.value = true }
const handleHoverLeave = () => { isCursorOver.value = false }
const handleImgEnter = () => { isCursorImgOver.value = true }
const handleImgLeave = () => { isCursorImgOver.value = false }
const handleShrinkEnter = () => { isCursorShrink.value = true }
const handleShrinkLeave = () => { isCursorShrink.value = false }

// 이벤트 핸들러 참조
let mouseoverHandler: ((e: Event) => void) | null = null
let mouseoutHandler: ((e: Event) => void) | null = null

// 커서 활성화 함수
const activate = () => {
  isActive.value = true
}

// 커서 이동 처리 함수
const moveCursor = (e: MouseEvent) => {
  if (!cursor.value || !cursorOutline.value) return
  
  cursor.value.style.left = `${e.clientX}px`
  cursor.value.style.top = `${e.clientY}px`
  
  cursorOutline.value.style.left = `${e.clientX}px`
  cursorOutline.value.style.top = `${e.clientY}px`
}

// 컴포넌트 마운트 시 실행
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  if (isMobile.value) return
  window.addEventListener('mousemove', handleMouseMove)
  
  // 마우스오버 이벤트 핸들러 설정
  mouseoverHandler = (e: Event) => {
    const target = e.target as HTMLElement
    if (target.matches('[data-hover]')) handleHoverEnter()
    if (target.matches('[data-img]')) handleImgEnter()
    if (target.matches('a, button')) handleShrinkEnter()
  }
  
  // 마우스아웃 이벤트 핸들러 설정
  mouseoutHandler = (e: Event) => {
    const target = e.target as HTMLElement
    if (target.matches('[data-hover]')) handleHoverLeave()
    if (target.matches('[data-img]')) handleImgLeave()
    if (target.matches('a, button')) handleShrinkLeave()
  }
  
  document.addEventListener('mouseover', mouseoverHandler)
  document.addEventListener('mouseout', mouseoutHandler)

  cursor.value = document.querySelector('.cursor-dot')
  cursorOutline.value = document.querySelector('.cursor-outline')
  window.addEventListener('mousemove', moveCursor)
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('mousemove', handleMouseMove)
  if (mouseoverHandler) document.removeEventListener('mouseover', mouseoverHandler)
  if (mouseoutHandler) document.removeEventListener('mouseout', mouseoutHandler)
  window.removeEventListener('mousemove', moveCursor)
})

defineExpose({
  activate
})
</script> 

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

// 커서 기본 스타일
.cursor {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 20px;
    height: 20px;
    background-color: v.$main-color;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    mix-blend-mode: difference;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    // 커서 내부 텍스트 스타일
    span {
        @include position-Center;
        display: none;
        white-space: nowrap;
        font-family: v.$font-en4;
    }
    
    // 호버 상태 스타일
    &.cursor-over {
        width: 10px;
        height: 10px;
    }
    
    // 이미지 호버 상태 스타일
    &.img-over {
        width: 120px;
        height: 120px;
        mix-blend-mode:normal;
        span {
            display: inline-block;
            color: #000;
        }
    }
    
    // 축소 상태 스타일
    &.cursor-shrink {
        width: 8px !important;
        height: 8px !important;
        transition: width 0.2s, height 0.2s;
    }
    
    // 활성화 상태 스타일
    &.is-active {
        opacity: 1;
    }
    
    // 모바일 환경 스타일
    @include mobile {
        body {
            cursor: auto;
        }
        .cursor {
            display: none;
        }
    }
}

// 커서 내부 점 스타일
.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}

// 커서 외곽선 스타일
.cursor-outline {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
}

// 터치 디바이스 환경 스타일
@media (hover: none) {
  .cursor {
    display: none;
  }
}
</style>

