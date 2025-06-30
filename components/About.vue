<template>
    <div class="about" ref="aboutSection" aria-labelledby="about-title">
        <AnimatedBackground 
            type="aboutContent"
            :opacity="0.18"
            :colors="{
                gradient1: {
                    start: '#4cde80',
                    end: '#38bdf8'
                },
                gradient2: {
                    start: '#38bdf8',
                    end: '#4cde80'
                }
            }"
        />
        <div class="about__inner">
            <h2 id="about-title" class="about__title">
                <span>About Me</span>
            </h2>
            <p class="about__summary highlight">웹을 좋아하는 마음으로, <span class="main-color">끊임없이 성장합니다.</span></p>
            <div class="about__content card-style">
                <div class="about__profile-float" >
                    <img src="@/assets/images/layout/about/profile_01.jpg" alt="정원 프로필" />
                </div>
                <p class="about__paragraph about__paragraph--profile-hover">
                    저는 웹퍼블리셔로 12년째 즐겁게 일하고 있는 <strong>정원</strong>이에요.
                </p>

                <p class="about__paragraph">
                    어릴 때부터 궁금한 게 생기면 잠도 못 자던 성격이었어요.  
                    지금도 멋진 웹사이트를 보면 "이거 어떻게 만들었지?"라는 생각에 빠져  
                    밤새 구조를 파헤치고 직접 구현해보는 걸 즐깁니다. <span aria-label="웃는 이모지">😂</span>
                </p>

                <p class="about__paragraph">
                    웹퍼블리싱은 단순히 코드를 짜는 일이 아니에요.  
                    디자인을 구조화하고, 사용자에게 더 나은 경험을 주는  
                    <strong>'보이는 기술'</strong>이라고 생각합니다.
                </p>

                <p class="about__paragraph">
                    그래서 저는 기본에 충실하려고 합니다.  
                    탄탄한 마크업, 효율적인 CSS, 그리고 생동감 있는 JavaScript까지.  
                    <strong>뿌리가 튼튼해야 멋진 나무가 자라니까요</strong> <span aria-label="나무 이모지">🌳</span>
                </p>

                <p class="about__paragraph">
                    특히 <strong>웹접근성과 웹표준</strong>은 사용자의 다양성을 존중하는 데 꼭 필요하다고 생각해요.  
                    누구나 제약 없이 콘텐츠를 이용할 수 있도록, 시멘틱 태그를 사용하고  
                    스크린리더 사용자를 위한 ARIA 속성도 꼼꼼히 챙기며 작업하고 있습니다.
                </p>

                <p class="about__paragraph">
                    Vue, React, Svelte 같은 다양한 도구도 직접 사용하며  
                    실무에 자연스럽게 녹일 수 있는 방법을 늘 고민하고 있어요.
                </p>

                <p class="about__paragraph">
                    무엇보다 중요한 건, <strong>웹을 좋아하는 마음</strong>을 잃지 않는 것.  
                    배우는 게 재밌고, 만드는 게 즐거운 이 마음이  
                    제가 계속 성장하게 만드는 원동력입니다.
                </p>
            </div>
            <div class="about__detail-button-wrap">
                <NuxtLink to="/about" class="about__detail-button">
                    <span class="detail-icon">👋</span>
                    <span class="detail-text">자세히 보기</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedBackground from '@/components/common/AnimatedBackground.vue'

const aboutSection = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
let hasAnimated = false

function runAboutAnimations() {
    if (hasAnimated) return
    gsap.registerPlugin(ScrollTrigger)
    gsap.set('.about__inner', { y: 60, opacity: 0 })
    gsap.set('.about__title', { y: 60, opacity: 0 })
    gsap.set('.about__summary', { y: 60, opacity: 0 })
    gsap.set('.about__content', { y: 80, opacity: 0 })
    gsap.set('.about__paragraph', { y: 40, opacity: 0 })
    gsap.set('.about__detail-button', { y: 40, opacity: 0 })

    gsap.to('.about__inner', {
        y: 0, opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about__inner',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
    gsap.to('.about__title', {
        y: 0, opacity: 1, duration: 1,
        scrollTrigger: {
            trigger: '.about__title',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
    gsap.to('.about__summary', {
        y: 0, opacity: 1, duration: 1, delay: 0.15,
        scrollTrigger: {
            trigger: '.about__summary',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
    gsap.to('.about__content', {
        y: 0, opacity: 1, duration: 1.1, delay: 0.3,
        scrollTrigger: {
            trigger: '.about__content',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
    gsap.to('.about__paragraph', {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12,
        scrollTrigger: {
            trigger: '.about__content',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
    gsap.to('.about__detail-button', {
        y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about__detail-button',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
    hasAnimated = true
}

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                runAboutAnimations()
            }
        })
    }, { threshold: 0.2 })
    if (aboutSection.value) observer.observe(aboutSection.value)
})

onBeforeUnmount(() => {
    if (observer && aboutSection.value) observer.unobserve(aboutSection.value)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    gsap.killTweensOf([
        '.about__title',
        '.about__summary',
        '.about__content',
        '.about__paragraph'
    ])
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
// About 섹션 기본 스타일
.about {
    position: relative;
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    padding: rem(96) rem(192) rem(128);
    background-color: #151619;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(16);

    @include tablet { padding: rem(80) rem(40) rem(128); }
    @include mobile { gap: rem(40); padding: rem(40) rem(14); }

    &__inner{
        max-width: rem(1440);
        margin:0 auto;
        opacity: 0;
        transform: translateY(60px);
        @include tablet { max-width: 100%; }
    }
    // 제목 스타일
    &__title {
        display: flex;
        align-items: center;
        font-size: rem(48);
        font-weight: 800;
        margin-bottom: rem(12);
        letter-spacing: rem(0.4);
        z-index: 1;
        letter-spacing: rem(0.4);
        font-family: v.$font-en3;
        opacity: 0;
        transform: translateY(60px);
        @include tablet { font-size: rem(32); }
        @include mobile { font-size: rem(35);}
    }

    // 요약 텍스트 스타일
    &__summary {
        font-size: rem(35.2);
        font-weight: 600;
        color: #fff;
        text-shadow: 0 rem(2) rem(16) rgba(76,222,128,0.15);
        line-height: 1.3;
        z-index: 1;
        font-family: v.$font-kn3;
        opacity: 0;
        transform: translateY(60px);    
        .main-color { color: v.$main-color; font-weight: 700; }
        @include tablet { font-size: rem(24); }
        @include mobile { font-size: rem(16);  } 
      
    }

    .card-style{
        @include tablet { padding: rem(24) rem(16); }
        @include mobile { padding: rem(16) rem(24); }
    }
    // 카드 스타일 공통
    .card-style, .about__content {
        background: rgba(255,255,255,0.13);
        border-radius: rem(35.2);
        box-shadow: 0 rem(8) rem(32) 0 rgba(0,0,0,0.18);
        padding: rem(56) rem(40);
        margin-top: rem(16);
        z-index: 1;
        width: 100%;
        overflow-wrap: break-word;
        word-break: keep-all;
        min-width: 0;
        border: rem(1) solid rgba(255,255,255,0.18);
        backdrop-filter: blur(rem(16));
        position: relative;
        opacity: 0;
        transform: translateY(80px);
        @include tablet { padding: rem(16) rem(24); margin-top:rem(30); }
        @include mobile { padding: rem(24) rem(16) ; margin-top:rem(20);   border-radius: rem(16); }
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(120deg,rgba(76,222,128,0.08) 0%,rgba(56,189,248,0.08) 100%);
            z-index: 0;
            pointer-events: none;
        }
  
    }

    // 문단 스타일
    &__paragraph {
        position: relative;
        z-index: 1;
        font-size: rem(18.88);
        line-height: 1.3;
        margin-bottom: rem(24);
        color: #f7f7f7;
        opacity: 0;
        transform: translateY(40px);
        strong { color: v.$main-color; font-weight: 700;  padding: 0 rem(3.2); }
        span[aria-label] { font-size: rem(19.2); vertical-align: middle; }
        &:last-child { margin-bottom: 0; }
        @include mobile { font-size: rem(14); line-height: 1.3; margin-bottom: rem(16); }
  
    }

    // 프로필 플로팅 이미지 스타일
    .about__profile-float {
        position: absolute;
        left: 50%;
        top: rem(-90);
        transform: translateX(-50%);
        width: rem(280);
        height: rem(280);
        border-radius: rem(10);
        overflow: hidden;
        box-shadow: 0 rem(4) rem(24) 0 rgba(0,0,0,0.18);
        background: rgba(255,255,255,0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        z-index: 10;
        transition: opacity 0.3s, transform 0.3s;
        &.skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        @include mobile { display: none !important; }
        @include tablet { display: none !important; }
    }

    // 콘텐츠 영역 스타일
    .about__content {
        position: relative;
    }
}

// 로딩 애니메이션
@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

// 프로필 호버 트리거 스타일
.about__profile-hover-trigger {
    cursor: pointer;
    display: inline-block;
    outline: none;
    transition: color 0.2s;
    &:hover, &:focus {
        color: v.$main-color;
    }
}

.about__detail-button-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: rem(32);
    @include tablet { margin-top: rem(24); }
    @include mobile { margin-top: rem(24); }
}

// 자세히보기 버튼 스타일
.about__detail-button {
    display: inline-flex;
    align-items: center;
    gap: rem(8);
    border-radius: 999px;
    padding: rem(12) rem(38) rem(12) rem(22);
    background:  transparent;
    color: #fff;
    border: rem(2) solid #bebebe;
    box-shadow: 0 rem(4) rem(12) rgba(0,0,0,0.12);
    transition: background 0.2s, box-shadow 0.2s, color 0.2s;
    text-decoration: none;
    cursor: pointer;
    transform-origin: 70% 70%;
    opacity: 0;
    transform: translateY(40px);

    @include tablet { padding: rem(12) rem(22) rem(12) rem(16); }
    @include mobile { padding: rem(10) rem(22) rem(10) rem(16); }
    &:hover {
        background: #fff;
        color: #000;
        box-shadow: 0 rem(8) rem(24) rgba(0,0,0,0.18);
    }
    .detail-icon {
        display: inline-block;
        animation: waving-hand 2s infinite;
        transform-origin: 70% 70%;
        font-size: rem(22);
        @include tablet { font-size: rem(18); }
        @include mobile { font-size: rem(16); }
    }
    .detail-text{
        font-size: rem(20);
        font-family: v.$font-kn2;
        font-weight: 400;
        @include tablet { font-size: rem(18); }
        @include mobile { font-size: rem(14); }
    }
}

@keyframes waving-hand {
  0% { transform: rotate(0deg) translateX(0); }
  10% { transform: rotate(14deg) translateX(4px); }
  20% { transform: rotate(-8deg) translateX(-4px); }
  30% { transform: rotate(14deg) translateX(4px); }
  40% { transform: rotate(-4deg) translateX(-2px); }
  50% { transform: rotate(10deg) translateX(2px); }
  60% { transform: rotate(0deg) translateX(0); }
  100% { transform: rotate(0deg) translateX(0); }
}
</style>  

