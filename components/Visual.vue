<template>
    <section ref="heroRef" class="hero" role="banner" aria-label="메인 비주얼" :style="{ height: `${windowHeight}px` }">
        <h2 ref="titleRef" class="hero__title">
            <div class="hero__title-line">
                <span class="hero__text">PORTFOLIO</span>
            </div>
            <div class="hero__title-line">
                <span class="hero__text">WEB</span>
                <span class="hero__text">PUBLISHER</span>
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
                    data-object-fit="cover">
                    <source
                        src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.mp4"
                        type="video/mp4">
                    <source
                        src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.webm"
                        type="video/webm">
                </video>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const windowHeight = ref(0)
const heroRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

const updateHeight = () => { 
    windowHeight.value = window.innerHeight
}

onMounted(async () => {
    updateHeight()
    window.addEventListener('resize', updateHeight)
    gsap.registerPlugin(ScrollTrigger)

    // DOM이 완전히 렌더링될 때까지 대기
    await nextTick()

    // 초기 텍스트 설정
    const texts = titleRef.value?.querySelectorAll('.hero__text')
    if (texts) {
        gsap.set(texts, {
            y: 100,
            opacity: 0
        })

        // 텍스트 등장 애니메이션
        gsap.to(texts, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out'
        })
    }

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

onUnmounted(() => {
    window.removeEventListener('resize', updateHeight)
    // ScrollTrigger 인스턴스 정리
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
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