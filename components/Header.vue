<template>
    <header class="header" :class="{ 'header--scrolled': isScrolled, 'black': isBlack }" role="banner">
        <section class="header__container">
            <NuxtLink to="/" class="header__logo" aria-label="JUGWON 홈으로 이동">
                <span>H</span>
            </NuxtLink>
            <div class="header__gnb-wrap">
                <button 
                    class="header__hamburger" 
                    :class="{ 'header__hamburger--active': isMenuOpen }"
                    aria-expanded="false"
                    aria-controls="header__open-menu"
                    aria-label="메뉴 열기"
                    @click="toggleMenu">
                    <span class="header__hamburger-line"></span> 
                    <span class="header__hamburger-line"></span>
                    <span class="header__hamburger-line"></span>
                </button>
            </div>

            <div id="header__open-menu" class="header__open-menu" :class="{ 'header__open-menu--active': isMenuOpen }" role="navigation" aria-label="메인 메뉴">
                <div class="header__dimmed" @click="toggleMenu"></div>
                <div class="header__menu-content">
                    <ul class="header__menu-list">
                        <li class="header__menu-item">
                            <button @click="handleMenuClick('about')">
                                <span class="header__menu-text">About</span>
                            </button>
                        </li>
                        <li class="header__menu-item">
                            <button @click="handleMenuClick('client')">
                                <span class="header__menu-text">Client</span>
                            </button>
                        </li>
                        <li class="header__menu-item">
                            <button @click="handleMenuClick('project')">
                                <span class="header__menu-text">Project</span>
                            </button>
                        </li>
                        <li class="header__menu-item">
                            <button @click="handleMenuClick('contact')">
                                <span class="header__menu-text">Contact</span>
                            </button>
                        </li>
                    </ul>
                    <div class="header__time-area" role="region" aria-label="현재 날짜 및 날씨 정보">
                        <div class="header__time-inner">
                            <span class="sr-only">현재 위치 날짜 및 날씨</span>
                            <em>{{ userCity || 'LOADING...' }}</em>
                            <div class="header__date" id="header__date" aria-live="polite">2024.03.21</div>
                            <div class="header__weather" v-if="weatherInfo">
                                <img :src="weatherInfo.icon" :alt="weatherInfo.description" class="header__weather-icon">
                                <span class="header__temperature">{{ Math.round(weatherInfo.temp) }}°C</span>
                            </div>
                            <span class="header__dot" aria-hidden="true">
                                <span class="header__dot-in"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<script setup lang="ts">
    import { ref, onMounted, onUnmounted, watch } from 'vue'
    import { inject } from 'vue'
    import gsap from 'gsap'

    // 메뉴 상태 관리
    const isMenuOpen = ref(false)
    const mobileMenu = ref<HTMLElement | null>(null)
    const menuContent = ref<HTMLElement | null>(null)
    const hamburgerButton = ref<HTMLElement | null>(null)

    // 위치 및 날씨 정보 상태 관리
    const userTimezone = ref<string>('')
    const userCity = ref<string>('')
    const weatherInfo = ref<{
        temp: number;
        description: string;
        icon: string;
    } | null>(null)

    // 스크롤 상태 관리
    const isScrolled = ref(false)

    // 스크롤 함수 실행행
    const scrollToSection = inject('scrollToSection') as (section: string) => void

    // props 정의
    const props = defineProps<{
        isBlack?: boolean
    }>()

    // 메뉴 클릭 처리 함수
    const handleMenuClick = (menu: string) => {
    if (scrollToSection) {
        scrollToSection(menu)
        toggleMenu()
    }
    }

    // 포커스 트랩 관련 변수
    let focusableElements: HTMLElement[] = []
    let firstFocusableElement: HTMLElement | null = null
    let lastFocusableElement: HTMLElement | null = null

    // 메뉴 토글 함수
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
        const button = document.querySelector('.header__hamburger') as HTMLButtonElement
        if (button) {
            button.setAttribute('aria-expanded', isMenuOpen.value.toString())
        }

        if (isMenuOpen.value) {
            // 메뉴가 열릴 때
            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'
            setupFocusTrap()
        } else {
            // 메뉴가 닫힐 때
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
            if (hamburgerButton.value) {
                hamburgerButton.value.focus()
            }
        }
    }

    // 포커스 트랩 설정 함수
    const setupFocusTrap = () => {
        if (!menuContent.value || !hamburgerButton.value) return

        // 포커스 가능한 요소들 찾기 (햄버거 버튼 포함)
        focusableElements = [
            hamburgerButton.value,
            ...Array.from(
                menuContent.value.querySelectorAll(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            )
        ] as HTMLElement[]

        if (focusableElements.length) {
            firstFocusableElement = focusableElements[0]
            lastFocusableElement = focusableElements[focusableElements.length - 1]
            
            // 첫 번째 메뉴 항목에 포커스 (햄버거 버튼 제외)
            const firstMenuItem = focusableElements[1]
            if (firstMenuItem) {
                firstMenuItem.focus()
            }
        }
    }

    // 키보드 이벤트 처리 함수
    const handleKeyDown = (e: KeyboardEvent) => {
        if (!isMenuOpen.value) return

        if (e.key === 'Tab') {
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusableElement) {
                    e.preventDefault()
                    lastFocusableElement?.focus()
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusableElement) {
                    e.preventDefault()
                    firstFocusableElement?.focus()
                }
            }
        } else if (e.key === 'Escape') {
            toggleMenu()
        }
    }

    // 사용자 위치 정보 가져오기 함수
    const getUserLocation = async () => {
        try {
            // IP 기반 위치 정보 가져오기
            const response = await fetch('https://ipapi.co/json/')
            const data = await response.json()
            
            if (data) {
                userCity.value = data.city
                userTimezone.value = data.timezone
                // 위치 정보를 가져온 후 날씨 정보도 가져오기
                if (data.latitude && data.longitude) {
                    getWeatherInfo(data.latitude, data.longitude)
                }
            } else {
                userCity.value = 'Unknown'
                userTimezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            
            updateDate()
        } catch (error) {
            console.error('위치 정보를 가져오는데 실패했습니다:', error)
            userCity.value = 'Unknown'
            userTimezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone
            updateDate()
        }
    }

    // 날씨 정보 가져오기 함수
    const getWeatherInfo = async (lat: number, lon: number) => {
        try {
            const API_KEY = '048b40e147a9bf3ad8ee6763b548a0a3';
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
            )
            const data = await response.json()
            
            if (data.main && data.weather && data.weather[0]) {
                weatherInfo.value = {
                    temp: data.main.temp,
                    description: data.weather[0].description,
                    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                }
            }
        } catch (error) {
            console.error('날씨 정보를 가져오는데 실패했습니다:', error)
        }
    }

    // 날짜 업데이트 함수
    const updateDate = () => {
        const now = new Date()
        
        const localDate = new Date(now.toLocaleString('en-US', { timeZone: userTimezone.value }))
            .toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).replace(/\. /g, '.').replace('.', '')
        
        const localDateElement = document.getElementById('header__date')
        if (localDateElement) localDateElement.textContent = localDate
    }

    // 날짜 업데이트 인터벌
    let dateInterval: number

    // 메뉴 애니메이션 함수
    const menuAnimation = () => {
        const menuItems = document.querySelectorAll('.header__menu-text')
        const timeArea = document.querySelector('.header__time-area')
        
        if (isMenuOpen.value) {
            // 메뉴 열릴 때
            gsap.fromTo([menuItems, timeArea], 
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out"
                }
            )
        } else {
            // 메뉴 닫힐 때
            gsap.to([menuItems, timeArea], {
                y: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.in"
            })
        }
    }

    // 메뉴 상태 변경 감시
    watch(isMenuOpen, (newValue) => {
        menuAnimation()
    })

    // 스크롤 이벤트 처리 함수
    const handleScroll = () => {
        isScrolled.value = window.scrollY > 50
    }

    // 컴포넌트 마운트 시 실행
    onMounted(() => {
        getUserLocation()
        dateInterval = window.setInterval(updateDate, 60000)
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('keydown', handleKeyDown)
        
        // ref 설정
        mobileMenu.value = document.getElementById('header__open-menu') as HTMLElement
        menuContent.value = document.querySelector('.header__menu-content') as HTMLElement
        hamburgerButton.value = document.querySelector('.header__hamburger') as HTMLElement
    })

    // 컴포넌트 언마운트 시 실행
    onUnmounted(() => {
        if (dateInterval) {
            clearInterval(dateInterval)
        }
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
    })
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

// 헤더 기본 스타일
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: transparent;
    color: #fff;
    transition: background-color 0.3s ease;

    // 스크롤 시 헤더 스타일
    &.header--scrolled {
        background: rgb(0 0 0 / 10%);
        backdrop-filter: blur(0.625rem);
    }

    // 검은색 배경 스타일
    &.black {
        .header__logo{ 
            color: #111111;
            border-color: #111111;
        }
        .header__hamburger-line {
            background-color: #111111;
        }
    }
}

// 헤더 컨테이너 스타일
.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 3.125rem;
}

// 로고 스타일
.header__logo {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: v.$font-en5;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

// 시간 영역 스타일
.header__time-area {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1em;
    
    // 시간 영역 내부 스타일
    .header__time-inner {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        // 도시명 스타일
        em {
            font-style: normal;
            font-weight: bold;
            min-width: 3.5rem;
            font-size: 1.2em;
        }

        // 날짜 스타일
        .header__date {
            font-family: monospace;
            font-size: 1.2em;
        }

        // 날씨 정보 스타일
        .header__weather {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            
            // 날씨 아이콘 스타일
            .header__weather-icon {
                width: 2rem;
                height: 2rem;
            }
            
            // 온도 스타일
            .header__temperature {
                font-size: 1.2em;
                font-weight: 500;
            }
        }
    }
}

// GNB 래퍼 스타일
.header__gnb-wrap {
    z-index: 1001;
}

// 햄버거 버튼 스타일
.header__hamburger {
    width: 1.875rem;
    height: 1.25rem;
    position: relative;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    
    // 햄버거 버튼 라인 스타일
    .header__hamburger-line {
        display: block;
        width: 100%;
        height: 0.125rem;
        background-color: #fff;
        position: absolute;
        left: 0;
        transition: all 0.3s ease;
        
        &:nth-child(1) { top: 0; }
        &:nth-child(2) {
            top: 50%;
            transform: translateY(-50%);
        }
        &:nth-child(3) { bottom: 0; }
    }
    
    // 햄버거 버튼 활성화 상태 스타일
    &.header__hamburger--active {
        .header__hamburger-line {
            &:nth-child(1) {
                transform: translateY(0.5625rem) rotate(45deg);
            }
            &:nth-child(2) { opacity: 0; }
            &:nth-child(3) {
                transform: translateY(-0.5625rem) rotate(-45deg);
            }
        }
    }
}

// 오픈 메뉴 스타일
.header__open-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    pointer-events: none;
    
    // 딤드 영역 스타일
    .header__dimmed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        pointer-events: auto;
    }
    
    // 메뉴 컨텐츠 스타일
    .header__menu-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        pointer-events: auto;
    }
    
    // 메뉴 활성화 상태 스타일
    &.header__open-menu--active {
        .header__dimmed {
            opacity: 1;
            visibility: visible;
        }
        
        .header__menu-content {
            opacity: 1;
            visibility: visible;
        }
    }
    
    // 메뉴 리스트 스타일
    .header__menu-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
        @include mobile { gap: 1em; }
        
        // 메뉴 아이템 스타일
        .header__menu-item {
            button {
                color: #fff;
                text-decoration: none;
                font-size: 5em;
                display: flex;
                align-items: center;
                
                // 메뉴 텍스트 스타일
                .header__menu-text {
                    line-height: 1.2;
                    position: relative;
                    overflow: hidden;
                    font-family: v.$font-en5;
                    transition: color 0.3s ease;
                }

                // 호버 효과
                &:hover .header__menu-text {
                    color: v.$main-color;
                }
                
                @include mobile { font-size: 3.5em; }
            }
        }
    }
}

// 모바일 반응형 스타일
@media (max-width: 48rem) {
    .header__container {
        padding: 1.25rem;
    }
    
    .header__logo {
        font-size: 1.25rem;
    }
    
    .header__time-area {
        .header__time-inner {
            .header__date {
                display: none;
            }
        }
    }
}
</style>