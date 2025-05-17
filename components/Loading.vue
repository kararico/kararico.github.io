<template>
    <div class="loading" role="status" aria-label="페이지 로딩 중">
        <div class="num-wrap">
            <div
                v-for="(list, index) in LETTER_LISTS"
                :key="index"
                class="num-box"
                role="presentation">
                <ul :class="['num-list', `list${index + 1}`]" role="presentation">
                    <li
                        v-for="(letter, letterIndex) in list"
                        :key="letterIndex"
                        class="num-item"
                        role="presentation">
                        <span aria-hidden="true">{{ letter }}</span>
                    </li>
                </ul>
            </div>
            <span class="num-txt" aria-hidden="true">.</span>
        </div>
        <div class="sr-only">페이지가 로딩 중입니다. 잠시만 기다려주세요.</div>
    </div>
</template>

<script setup lang="ts">
    import {onMounted, ref} from 'vue'
    import gsap from "gsap"

    // 상태 관리
    const isLoading = ref(true)

    // 상수 정의
    const ALPHABET = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    const LETTER_LISTS = [ALPHABET, ALPHABET, ALPHABET, ALPHABET]

    // 애니메이션 설정
    const ANIMATION_CONFIG = [
        {
            y: '-340vw',
            duration: 3
        }, {
            y: '-160vw',
            duration: 4
        }, {
            y: '-40vw',
            duration: 2
        }, {
            y: '-280vw',
            duration: 1
        }
    ]

    // 유틸리티 함수
    const preventScroll = (e: Event) => {
        e.preventDefault()
    }

    // 애니메이션 함수
    const initLoadingAnimation = () => {
        const loadingAni = gsap.timeline({
            onComplete: () => {
                handleLoadingComplete()
            }
        })

        loadingAni.addLabel('a')
        LETTER_LISTS.forEach((_, index) => {
            loadingAni.to(`.loading .list${index + 1}`, ANIMATION_CONFIG[index], 'a')
        })
        loadingAni.to('.loading', {
            yPercent: -100,
            display: 'none'
        }, 'a+=5')
    }

    const initIntroAnimation = () => {
        return gsap.to('.sc-visual .txt-motion', {
            transformStyle: "preserve-3d",
            opacity: 1,
            rotationX: 0,
            transformOrigin: "50% 50%",
            yPercent: 0,
            duration: 1.2,
            stagger: 0.1,
            paused: true
        })
    }

    // 이벤트 핸들러
    const handleLoadingComplete = () => {
        // 스크롤 및 커서 복원
        document.documentElement.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
        window.removeEventListener('wheel', preventScroll)
        window.removeEventListener('touchmove', preventScroll)

        const cursor = document.querySelector('.cursor')as HTMLElement
        if (cursor) 
            cursor.style.display = ''

            // 인트로 애니메이션 시작
        const introAni = initIntroAnimation()
        introAni.play()

        isLoading.value = false
    }

    // 라이프사이클 훅
    onMounted(() => {
        // 초기 설정
        window.scrollTo(0, 0)
        const cursor = document.querySelector('.cursor')as HTMLElement
        if (cursor) 
            cursor.style.display = 'none'

            // 스크롤 방지
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
        window.addEventListener('wheel', preventScroll, {passive: false})
        window.addEventListener('touchmove', preventScroll, {passive: false})

        // 로딩 애니메이션 시작
        initLoadingAnimation()
    })
</script>

<style lang="scss" scoped="scoped">
    @use '@/assets/scss/common/_var' as v;
    .loading {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10001;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: v.$font-en1;
        font-size: 20vw;
        line-height: 1;
        color: #fff;
        background: url('@/assets/images/layout/intro/intro_bg.png') center center no-repeat;
        background-size: cover;
        .num-wrap {
            position: relative;
            display: flex;
            overflow: hidden;
            z-index: 3;
        }
        .num-list {
            height: 20vw;
            text-align: center;
        }

        .video-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .dim-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.75);
                z-index: 2;
            }
        }
    }
</style>