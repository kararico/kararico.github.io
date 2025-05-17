<template>
  <div
    class="cursor"
    :class="{
      'cursor-over': isCursorOver,
      'img-over': isCursorImgOver,
      'cursor-shrink': isCursorShrink
    }"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    v-show="!isMobile"
  >
    <span>View more</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const isCursorOver = ref(false)
const isCursorImgOver = ref(false)
const isCursorShrink = ref(false)
const isMobile = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}
const handleHoverEnter = () => { isCursorOver.value = true }
const handleHoverLeave = () => { isCursorOver.value = false }
const handleImgEnter = () => { isCursorImgOver.value = true }
const handleImgLeave = () => { isCursorImgOver.value = false }
const handleShrinkEnter = () => { isCursorShrink.value = true }
const handleShrinkLeave = () => { isCursorShrink.value = false }

let mouseoverHandler: ((e: Event) => void) | null = null
let mouseoutHandler: ((e: Event) => void) | null = null

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 767px)').matches
  if (isMobile.value) return
  window.addEventListener('mousemove', handleMouseMove)
  mouseoverHandler = (e: Event) => {
    const target = e.target as HTMLElement
    if (target.matches('[data-hover]')) handleHoverEnter()
    if (target.matches('[data-img]')) handleImgEnter()
    if (target.matches('a, button')) handleShrinkEnter()
  }
  mouseoutHandler = (e: Event) => {
    const target = e.target as HTMLElement
    if (target.matches('[data-hover]')) handleHoverLeave()
    if (target.matches('[data-img]')) handleImgLeave()
    if (target.matches('a, button')) handleShrinkLeave()
  }
  document.addEventListener('mouseover', mouseoverHandler)
  document.addEventListener('mouseout', mouseoutHandler)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (mouseoverHandler) document.removeEventListener('mouseover', mouseoverHandler)
  if (mouseoutHandler) document.removeEventListener('mouseout', mouseoutHandler)
})
</script> 

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
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
    span {
        @include position-Center;
        display: none;
        white-space: nowrap;
        font-family: v.$font-en4;
    }
    &.cursor-over {
        width: 10px;
        height: 10px;
    }
    &.img-over {
        width: 120px;
        height: 120px;
        mix-blend-mode:normal;
        span {
            display: inline-block;
            color: #000;
        }
    }
    &.cursor-shrink {
        width: 8px !important;
        height: 8px !important;
        transition: width 0.2s, height 0.2s;
    }
    @include mobile {
        body {
            cursor: auto;
        }
        .cursor {
            display: none;
        }
    }
}
</style>

