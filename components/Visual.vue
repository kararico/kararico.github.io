<template>
    <section ref="heroRef" class="hero" role="banner" aria-label="메인 비주얼" :style="{ height: `${windowHeight}px` }">
        <h2 ref="titleRef" class="hero__title">
            <div class="hero__title-line">
                <span class="hero__text" style="opacity: 0">PORTFOLIO</span>
            </div>
            <div class="hero__title-line">
                <span class="hero__text" style="opacity: 0">WEB</span>
                <span class="hero__text" style="opacity: 0">PUBLISHER</span>
            </div>
        </h2>
        <div class="hero__background">
            <div class="hero__background-inner">
                <video
                    loop
                    autoplay
                    muted
                    playsinline
                    aria-hidden="true"
                    data-object-fit="cover"
                    poster="@/assets/videos/poster.jpg">
                    <source
                        src="@/assets/videos/intro.mp4"
                        type="video/mp4">
                </video>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 윈도우 높이와 DOM 요소 참조
const windowHeight = ref(0)
const heroRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const isAnimationStarted = ref(false)

// 윈도우 높이 업데이트 함수
const updateHeight = () => { 
    windowHeight.value = window.innerHeight
}

// 텍스트 애니메이션 함수
const startTextAnimation = async () => {
    if (!titleRef.value || isAnimationStarted.value) return

    isAnimationStarted.value = true
    const texts = titleRef.value.querySelectorAll('.hero__text')
    
    if (texts) {
        gsap.set(texts, {
            y: 100
        })

        // .2초 지연 후 애니메이션 시작
        await new Promise(resolve => setTimeout(resolve, 200))

        // 텍스트 등장 애니메이션
        gsap.to(texts, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out'
        })
    }
}

// 로딩 애니메이션 완료 이벤트 처리 함수
const handleLoadingComplete = () => {
    setTimeout(() => {
        startTextAnimation()
    }, 1000)
}

// 컴포넌트 마운트 시 실행
onMounted(async () => {
    updateHeight()
    window.addEventListener('resize', updateHeight)
    gsap.registerPlugin(ScrollTrigger)

    // DOM이 완전히 렌더링될 때까지 대기
    await nextTick()

    // 비주얼 섹션 스크롤 애니메이션
    if (heroRef.value) {
        const visualAni = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.value,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        })

        const firstLine = heroRef.value.querySelector('.hero__title-line:first-child')
        const lastLine = heroRef.value.querySelector('.hero__title-line:last-child')
        const background = heroRef.value.querySelector('.hero__background-inner')

        if (firstLine && lastLine && background) {
            visualAni
                .to(firstLine, { 
                    xPercent: -100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                })
                .to(lastLine, { 
                    xPercent: 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                }, "<")
                .to(background, {
                    scale: 1.2,
                    opacity: 0.3,
                    duration: 1
                }, "<")
        }
    }
})

// 컴포넌트 언마운트 시 실행
onUnmounted(() => {
    window.removeEventListener('resize', updateHeight)
    // ScrollTrigger 인스턴스 정리
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Loading 컴포넌트의 이벤트를 받기 위해 defineExpose 사용
defineExpose({
    handleLoadingComplete
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

.hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow-x: hidden;
    color: #fff;

    &__title {
        display: flex;
        flex-direction: column;
        padding: 0 10rem;
        font-family: v.$font-en5;
        position: relative;
        z-index: 100;
        text-shadow: 0 2px 16px rgba(0,0,0,0.2);
    }

    &__title-line {
        display: flex;
        font-size: 9.8rem;
        width: 100%;
        line-height: 1;
        justify-content: center;
        font-family: v.$font-en5;
        gap: 1rem;

        @include tablet {
            font-size: 5rem;
        }
    }

    &__text {
        display: inline-block;
        text-align: center;
        will-change: transform;
    }

    &__background {
        position: absolute;
        inset: 0;
        background: #151619;
        overflow: hidden;
        &-inner {
            width: 100%;
            height: 100%;
            opacity: .5;
            transform: scale(1.5);
            will-change: transform;
            transition: opacity 0.3s ease;

            @include mobile {
                transform: scale(1.2);
            }

            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@include mobile {
    .hero {
        &__title {
            padding: 0 2rem;
            text-align: center;
        }

        &__title-line {
            font-size: 4rem;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
    }
}
</style>