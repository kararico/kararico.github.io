<template>
    <div class="about"  aria-labelledby="about-title">
        <div class="about-bg-circles">
            <span class="circle circle1"></span>
            <span class="circle circle2"></span>
        </div>
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

            <!-- <div class="about__detail-button">
                <NuxtLink to="/about" class="detail-button">
                    <span class="detail-icon">👋</span>
                    <span class="detail-text">자세히 보기</span>
                </NuxtLink>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 컴포넌트 마운트 시 실행
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    // 제목 애니메이션
    gsap.from('.about__title', {
        y: 60, opacity: 0, duration: 1,
        scrollTrigger: {
            trigger: '.about__title',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
    // 요약 텍스트 애니메이션
    gsap.from('.about__summary', {
        y: 60, opacity: 0, duration: 1, delay: 0.15,
        scrollTrigger: {
            trigger: '.about__summary',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
    // 콘텐츠 영역 애니메이션
    gsap.from('.about__content', {
        y: 80, opacity: 0, duration: 1.1, delay: 0.3,
        scrollTrigger: {
            trigger: '.about__content',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
    // 문단 순차적 등장 애니메이션
    gsap.from('.about__paragraph', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12,
        scrollTrigger: {
            trigger: '.about__content',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
    // 배경 원 스크롤 연동 모션 - 첫 번째 원
    gsap.to('.circle1', {
        y: 200, scale: 1.25, opacity: 0.4,
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
    // 배경 원 스크롤 연동 모션 - 두 번째 원
    gsap.to('.circle2', {
        x: -160, scale: 1.25, opacity: 0.32,
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
        }
    });
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
    padding: 6em 12em 8em;
    background-color: #151619;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;

    @include tablet { padding: 5em 2.5em 8em; }
    @include mobile { gap: 2.5em; padding: 4em 1.2em; }

    // 배경 원 스타일
    .about-bg-circles {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none;
        z-index: 0;
        .circle {
            position: absolute;
            border-radius: 50%;
            filter: blur(32px);
            opacity: 0.18;
        }
        .circle1 {
            width: 420px; height: 420px;
            left: -120px; top: 10%;
            background: v.$main-color;
        }
        .circle2 {
            width: 320px; height: 320px;
            right: -100px; bottom: 5%;
            background: #38bdf8;
        }
    }

    // 제목 스타일
    &__title {
        display: flex;
        align-items: center;
        font-size: 3em;
        font-weight: 800;
        margin-bottom: .75em;
        letter-spacing: 0.025em;
        z-index: 1;
        letter-spacing: .025em;
        font-family: v.$font-en5;
        @include tablet { font-size: 2em; margin-bottom:0;}
        @include mobile { font-size: 2.2em; margin-bottom:0;}
    }

    // 요약 텍스트 스타일
    &__summary {
        font-size: 2.2em;
        font-weight: 600;
        color: #fff;
        text-shadow: 0 2px 16px rgba(76,222,128,0.15);
        line-height: 1.3;
        z-index: 1;
        word-break:keep-all;
        .main-color { color: v.$main-color; font-weight: 700; }
        @include tablet { font-size: 1.5em; }
        @include mobile { font-size: 1.5em;  }
    }

    // 카드 스타일 공통
    .card-style, .about__content {
        background: rgba(255,255,255,0.13);
        border-radius: 2.2em;
        box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
        padding: 3.5em 2.5em;
        margin-top: 1em;
        z-index: 1;
        width: 100%;
        overflow-wrap: break-word;
        word-break: keep-all;
        min-width: 0;
        border: 1px solid rgba(255,255,255,0.18);
        backdrop-filter: blur(16px);
        position: relative;
        @include mobile { padding: 1em 1.5em; margin-top:0; }
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
        font-size: 1.18em;
        line-height: 2;
        margin-bottom: 1.5em;
        color: #f7f7f7;
        strong { color: v.$main-color; font-weight: 700; background: rgba(76,222,128,0.08); border-radius: 0.3em; padding: 0 0.2em; }
        span[aria-label] { font-size: 1.2em; vertical-align: middle; }
        &:last-child { margin-bottom: 0; }
        @include mobile { font-size: 1.1em; line-height: 1.3; margin-bottom: 1em; }
    }

    // 프로필 플로팅 이미지 스타일
    .about__profile-float {
        position: absolute;
        left: 50%;
        top: -90px;
        transform: translateX(-50%);
        width: 280px;
        height: 280px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
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

// 자세히보기 버튼 스타일
.about__detail-button {
    display: flex;
    justify-content: center;
    margin-top: 2em;

    .detail-button {
        display: inline-flex;
        align-items: center;
        gap: 0.8em;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 2em;
        padding: 0.8em 1.8em;
        color: #fff;
        text-decoration: none;
        font-family: v.$font-kn2;
        font-size: 1.1em;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        @media (hover: hover) {
            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                border-color: rgba(255, 255, 255, 0.3);

                &::before {
                    opacity: 1;
                }

                .detail-icon {
                    transform: scale(1.1);
                }
            }
        }

        .detail-icon {
            font-size: 1.3em;
            transition: transform 0.4s ease;
        }

        .detail-text {
            font-weight: 500;
        }
    }

    @include mobile {
        .detail-button {
            padding: 0.7em 1.5em;
            font-size: 1em;

            .detail-icon {
                font-size: 1.2em;
            }
        }
    }
}
</style>  

