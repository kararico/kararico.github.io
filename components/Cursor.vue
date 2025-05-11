<template>
  <div class="cursor">
    <span>View more</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // 마우스 이벤트
  window.addEventListener('mousemove', handleMouseMove)
  
  // 호버 이벤트
  const hoverElements = document.querySelectorAll('[data-hover]')
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', handleHoverEnter)
    el.addEventListener('mouseleave', handleHoverLeave)
  })

  // 이미지 호버 이벤트
  const imgElements = document.querySelectorAll('[data-img]')
  imgElements.forEach(el => {
    el.addEventListener('mouseenter', handleImgEnter)
    el.addEventListener('mouseleave', handleImgLeave)
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  
  const hoverElements = document.querySelectorAll('[data-hover]')
  hoverElements.forEach(el => {
    el.removeEventListener('mouseenter', handleHoverEnter)
    el.removeEventListener('mouseleave', handleHoverLeave)
  })

  const imgElements = document.querySelectorAll('[data-img]')
  imgElements.forEach(el => {
    el.removeEventListener('mouseenter', handleImgEnter)
    el.removeEventListener('mouseleave', handleImgLeave)
  })
})

const handleMouseMove = (e: MouseEvent) => {
  e.preventDefault()
  gsap.to('.cursor', {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2
  })
}

const handleHoverEnter = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  document.querySelector('.cursor')?.classList.add('cursor-over')
  target.classList.add('active')
}

const handleHoverLeave = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  document.querySelector('.cursor')?.classList.remove('cursor-over')
  target.classList.remove('active')
}

const handleImgEnter = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  document.querySelector('.cursor')?.classList.add('img-over')
  target.classList.add('active')
}

const handleImgLeave = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  document.querySelector('.cursor')?.classList.remove('img-over')
  target.classList.remove('active')
}
</script> 