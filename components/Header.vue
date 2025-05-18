<template>
    <header class="header" :class="{ 'is-scrolled': isScrolled }" role="banner">
        <section class="header-container">
            <NuxtLink to="/" class="logo" aria-label="JUGWON 홈으로 이동">
                <span>JW</span>
            </NuxtLink>
            <div class="gnb-wrap">
                <button 
                    class="hamburger" 
                    :class="{ 'is-active': isMenuOpen }"
                    aria-expanded="false"
                    aria-controls="mobileMenu"
                    aria-label="메뉴 열기"
                    @click="toggleMenu">
                    <span class="hamburger-line"></span> 
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>

            <div id="mobileMenu" class="open-menu" :class="{ 'is-active': isMenuOpen }" role="navigation" aria-label="메인 메뉴">
                <div class="dimmed" @click="toggleMenu"></div>
                <div class="menu-content">
                    <ul class="m-menu-list">
                        <li class="m-menu-item">
                            <a href="#scAbout" @click="toggleMenu">
                                <span class="menu-text">About</span>
                            </a>
                        </li>
                        <li class="m-menu-item">
                            <a href="#scMain" @click="toggleMenu">
                                <span class="menu-text">Works</span>
                            </a>
                        </li>
                        <li class="m-menu-item">
                            <a href="#scSide" @click="toggleMenu">
                                <span class="menu-text">Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div class="time-area" role="region" aria-label="현재 날짜 및 날씨 정보">
                        <div class="inner local">
                            <span class="sr-only">현재 위치 날짜 및 날씨</span>
                            <em>{{ userCity || 'LOADING...' }}</em>
                            <div class="date" id="localDate" aria-live="polite">2024.03.21</div>
                            <div class="weather" v-if="weatherInfo">
                                <img :src="weatherInfo.icon" :alt="weatherInfo.description" class="weather-icon">
                                <span class="temperature">{{ Math.round(weatherInfo.temp) }}°C</span>
                            </div>
                            <span class="dot" aria-hidden="true">
                                <span class="dot-in"></span>
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
import gsap from 'gsap'

const isMenuOpen = ref(false)
const mobileMenu = ref<HTMLElement | null>(null)
const menuContent = ref<HTMLElement | null>(null)
const hamburgerButton = ref<HTMLElement | null>(null)
const userTimezone = ref<string>('')
const userCity = ref<string>('')
const weatherInfo = ref<{
    temp: number;
    description: string;
    icon: string;
} | null>(null)
const isScrolled = ref(false)

// 포커스 트랩 관련 변수
let focusableElements: HTMLElement[] = []
let firstFocusableElement: HTMLElement | null = null
let lastFocusableElement: HTMLElement | null = null

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    const button = document.querySelector('.hamburger') as HTMLButtonElement
    if (button) {
        button.setAttribute('aria-expanded', isMenuOpen.value.toString())
    }

    if (isMenuOpen.value) {
        // 메뉴가 열릴 때
        document.body.style.overflow = 'hidden'
        setupFocusTrap()
    } else {
        // 메뉴가 닫힐 때
        document.body.style.overflow = ''
        if (hamburgerButton.value) {
            hamburgerButton.value.focus()
        }
    }
}

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

const getWeatherInfo = async (lat: number, lon: number) => {
    try {
        const API_KEY = '048b40e147a9bf3ad8ee6763b548a0a3' // OpenWeatherMap API 키를 입력하세요
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

const updateDate = () => {
    const now = new Date()
    
    const localDate = new Date(now.toLocaleString('en-US', { timeZone: userTimezone.value }))
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\. /g, '.').replace('.', '')
    
    const localDateElement = document.getElementById('localDate')
    if (localDateElement) localDateElement.textContent = localDate
}

let dateInterval: number

const menuAnimation = () => {
    const menuItems = document.querySelectorAll('.menu-text')
    const timeArea = document.querySelector('.time-area')
    
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

watch(isMenuOpen, (newValue) => {
    menuAnimation()
})

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    getUserLocation()
    dateInterval = window.setInterval(updateDate, 60000)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    
    // ref 설정
    mobileMenu.value = document.getElementById('mobileMenu') as HTMLElement
    menuContent.value = document.querySelector('.menu-content') as HTMLElement
    hamburgerButton.value = document.querySelector('.hamburger') as HTMLElement
})

onUnmounted(() => {
    if (dateInterval) {
        clearInterval(dateInterval)
    }
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: transparent;
    color: #fff;
    transition: background-color 0.3s ease;

    &.is-scrolled {
        background: rgb(0 0 0 / 10%);
        backdrop-filter: blur(10px);
    }
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 36px 50px;
}

.logo {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    font-family: v.$font-en5;
}

.time-area {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 1em;
    
    .inner {
        display: flex;
        align-items: center;
        gap: 8px;
        
        em {
            font-style: normal;
            font-weight: bold;
            min-width: 56px;
            font-size: 1.2em;
        }

        .date {
            font-family: monospace;
            font-size: 1.2em;
        }

        .weather {
            display: flex;
            align-items: center;
            gap: 8px;
            
            .weather-icon {
                width: 32px;
                height: 32px;
            }
            
            .temperature {
                font-size: 1.2em;
                font-weight: 500;
            }
        }
    }
}

.gnb-wrap {
    z-index: 1001;
}

.hamburger {
    width: 30px;
    height: 20px;
    position: relative;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    
    .hamburger-line {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        transition: all 0.3s ease;
        
        &:nth-child(1) {
            top: 0;
        }
        
        &:nth-child(2) {
            top: 50%;
            transform: translateY(-50%);
        }
        
        &:nth-child(3) {
            bottom: 0;
        }
    }
    
    &.is-active {
        .hamburger-line {
            &:nth-child(1) {
                transform: translateY(9px) rotate(45deg);
            }
            
            &:nth-child(2) {
                opacity: 0;
            }
            
            &:nth-child(3) {
                transform: translateY(-9px) rotate(-45deg);
            }
        }
    }
}

.open-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    pointer-events: none;
    
    .dimmed {
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
    
    .menu-content {
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
    
    &.is-active {
        .dimmed {
            opacity: 1;
            visibility: visible;
        }
        
        .menu-content {
            opacity: 1;
            visibility: visible;
        }
    }
    
    .m-menu-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
        @include mobile {
            gap: 1em;
        }
        .m-menu-item {
            a {
                color: #fff;
                text-decoration: none;
                font-size: 5em;
                display: flex;
                align-items: center;
                
                .menu-text {
                    line-height: 1.2;
                    position: relative;
                    overflow: hidden;
                    font-family: v.$font-en5;
                    transition: color 0.3s ease;
                }

                &:hover .menu-text {
                    color: v.$main-color;
                }
                @include mobile {
                    font-size: 3.5em;
                }
                
            }
        }
    }
}

@media (max-width: 768px) {
    .header-container {
        padding: 20px;
    }
    
    .logo {
        font-size: 20px;
    }
    
    .time-area {
        .inner {
            .date {
                display: none;
            }
        }
    }
}
</style>