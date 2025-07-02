<template>
    <section ref="heroRef" class="hero" role="banner" aria-label="메인 비주얼" :style="{ height: `${windowHeight}px` }">
        <h2 ref="titleRef" class="hero__title">
            <div class="hero__title-line">
                <span class="hero__text ">PORTFOLIO</span>
            </div>
            <div class="hero__title-line">
                <span class="hero__text etc" >WEB</span>
                <span class="hero__text etc" >PUBLISHER</span>
            </div>
        </h2>
        <div class="hero__background">
            <div class="hero__background-inner">
                <video
                    ref="videoRef" 
                    loop
                    autoplay
                    muted
                    playsinline
                    webkit-playsinline
                    x5-playsinline
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="true"
                    preload="auto"
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
const videoRef = ref<HTMLVideoElement | null>(null)
const isAnimationStarted = ref(false)

// GSAP 애니메이션 인스턴스 저장
let visualAnimation: gsap.core.Timeline | null = null
let textAnimation: gsap.core.Tween | null = null

// 컴포넌트 초기화 함수
const initializeComponent = () => {
    // 상태 초기화
    isAnimationStarted.value = false
    
    // 기존 애니메이션 정리
    if (visualAnimation) {
        visualAnimation.kill()
        visualAnimation = null
    }
    if (textAnimation) {
        textAnimation.kill()
        textAnimation = null
    }
    
    // 텍스트 초기 상태로 리셋
    if (titleRef.value) {
        const texts = titleRef.value.querySelectorAll('.hero__text')
        gsap.set(texts, {
            y: 100,
            opacity: 0
        })
    }
}

// 윈도우 높이 업데이트 함수
const updateHeight = () => { 
    windowHeight.value = window.innerHeight
}

// 텍스트 애니메이션 함수
const startTextAnimation = async () => {
    console.log('startTextAnimation called')
    if (!titleRef.value || isAnimationStarted.value) {
        console.log('startTextAnimation early return:', { titleRef: !!titleRef.value, isAnimationStarted: isAnimationStarted.value })
        return
    }

    isAnimationStarted.value = true
    const texts = titleRef.value.querySelectorAll('.hero__text')
    console.log('texts found:', texts.length)
    
    if (texts) {
        gsap.set(texts, {
            y: 100,
            opacity: 0
        })

        // .2초 지연 후 애니메이션 시작
        await new Promise(resolve => setTimeout(resolve, 200))

        // 텍스트 등장 애니메이션
        textAnimation = gsap.to(texts, {
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
    console.log('handleLoadingComplete called')
    setTimeout(() => {
        console.log('setTimeout callback')
        startTextAnimation()
    }, 1000)
}

// 비디오 재생 함수
const playVideo = async () => {
    if (videoRef.value) {
        try {
            await videoRef.value.play()
        } catch (error) {
            console.error('Video playback failed:', error)
            // 재생 실패 시 다시 시도
            setTimeout(playVideo, 1000)
        }
    }
}

// 스크롤 애니메이션 설정 함수
const setupScrollAnimation = () => {
    if (!heroRef.value) return

    // 기존 ScrollTrigger 정리
    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === heroRef.value) {
            trigger.kill()
        }
    })

    visualAnimation = gsap.timeline({
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
        visualAnimation
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

// 컴포넌트 마운트 시 실행
onMounted(async () => {
    // 컴포넌트 초기화
    initializeComponent()
    
    updateHeight()
    window.addEventListener('resize', updateHeight)
    window.addEventListener('loading-complete', handleLoadingComplete)
    gsap.registerPlugin(ScrollTrigger)

    // DOM이 완전히 렌더링될 때까지 대기
    await nextTick()

    // 비디오 재생 시도
    playVideo()

    // 스크롤 애니메이션 설정
    setupScrollAnimation()

    // 로딩 이벤트가 발생하지 않았을 경우를 대비해 직접 애니메이션 시작
    setTimeout(() => {
        if (!isAnimationStarted.value) {
            startTextAnimation()
        }
    }, 1500)
})

// 컴포넌트 언마운트 시 실행
onUnmounted(() => {
    window.removeEventListener('resize', updateHeight)
    window.removeEventListener('loading-complete', handleLoadingComplete)
    
    // 모든 애니메이션 정리
    if (visualAnimation) {
        visualAnimation.kill()
        visualAnimation = null
    }
    if (textAnimation) {
        textAnimation.kill()
        textAnimation = null
    }
    
    // ScrollTrigger 인스턴스 정리
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Loading 컴포넌트의 이벤트를 받기 위해 defineExpose 사용
defineExpose({
    handleLoadingComplete,
    initializeComponent
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
        padding: 0 rem(160);
        font-family: v.$font-en2;
        position: relative;
        z-index: 100;
        text-shadow: 0 rem(2) rem(16) rgba(0,0,0,0.2);
    }

    &__title-line {
        display: flex;
        font-size: rem(130);
        width: 100%;
        line-height: 1;
        justify-content: center;
        font-family: v.$font-en2;
        gap: rem(16);
        @include tablet { font-size: rem(100) !important; }
        @include mobile { font-size: rem(42) !important; margin-top: rem(10); }
    }

    &__text {
        display: inline-block;
        text-align: center;
        will-change: transform;
        opacity: 0;
        font-family: v.$font-en4;
        font-weight: 900;
        color: transparent;
        -webkit-text-stroke: 2px #fff;
        
        @include mobile {
            -webkit-text-stroke: 1px #fff;
        }
        &.etc {
            color: #fff;
        }
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
            padding: 0 rem(32);
            text-align: center;
        }

        &__title-line {
            font-size: rem(64);
            flex-direction: column;
            align-items: center;
            gap: rem(8);
        }
    }
}
</style>