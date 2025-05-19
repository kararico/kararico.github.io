<template>
  <div class="loading-container">
    <h1 class="loading-text">
      <span v-for="(letter, index) in letters" :key="index" class="letter" ref="letterRefs">{{ letter }}</span>
      <span class="dots">
        <span v-for="(dot, index) in dots" :key="index" class="dot" ref="dotRefs">{{ dot }}</span>
      </span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['animationComplete'])
const letters = ref(['L', 'o', 'a', 'd', 'i', 'n', 'g'])
const dots = ref(['.', '.', '.'])
const letterRefs = ref<HTMLElement[]>([])
const dotRefs = ref<HTMLElement[]>([])

// 스크롤 잠금 함수
const lockScroll = () => {
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = `-${window.scrollY}px`
}

// 스크롤 해제 함수
const unlockScroll = () => {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(document.body.style.top || '0') * -1)
}

onMounted(() => {
  // 스크롤 잠금
  lockScroll()

  // 초기 상태 설정
  gsap.set([...letterRefs.value, ...dotRefs.value], {
    opacity: 0,
    y: 30
  })

  // 전체 애니메이션 타임라인 생성
  const tl = gsap.timeline({
    onComplete: () => {
      // 애니메이션이 끝나면 이벤트 발생
      emit('animationComplete')
      // 스크롤 해제
      unlockScroll()
    }
  })

  // 글자 애니메이션
  tl.to(letterRefs.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  })

  // 점 애니메이션 (글자 애니메이션과 약간 겹치도록)
  tl.to(dotRefs.value, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.2") // 글자 애니메이션이 끝나기 0.2초 전에 시작
})

// 컴포넌트가 제거되기 전에 스크롤 해제
onBeforeUnmount(() => {
  unlockScroll()
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 9999;
}

.loading-text {
  font-family: v.$font-en1;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  @include tablet {
    font-size: 3rem;
    letter-spacing: 0.3em;
  }

  @include mobile {
    font-size: 2rem;
    letter-spacing: 0.2em;
  }
}

.letter {
  display: inline-block;
}

.dots {
  display: inline-block;
  margin-left: 0.2em;

  @include tablet {
    margin-left: 0.15em;
  }

  @include mobile {
    margin-left: 0.1em;
  }
}

.dot {
  display: inline-block;
  letter-spacing: 0.1em;

  @include tablet {
    letter-spacing: 0.05em;
  }

  @include mobile {
    letter-spacing: 0.03em;
  }
}
</style>