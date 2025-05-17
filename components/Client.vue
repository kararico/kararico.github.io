<template>
    <section class="client-section">
        <div class="client-container">
            <h2 class="client-title">Client</h2>
            <div class="rolling-wrapper" ref="rollingRef">
                <ul class="rolling-list">
                    <li v-for="(logo, i) in logos" :key="i" class="rolling-item">
                        <span v-html="logo"></span>
                    </li>
                </ul>
            </div>
        </div>  
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

const rollingRef = ref<HTMLElement | null>(null)
const logos = [
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><path d="M24 14l7.5 13h-15L24 14z" fill="#181a1e"/></svg>`,
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><circle cx="24" cy="24" r="10" fill="#181a1e"/></svg>`,
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><rect x="16" y="16" width="16" height="16" rx="4" fill="#181a1e"/></svg>`,
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><path d="M24 14v20M14 24h20" stroke="#181a1e" stroke-width="4" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><ellipse cx="24" cy="24" rx="10" ry="16" fill="#181a1e"/></svg>`,
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><rect x="18" y="18" width="12" height="12" rx="6" fill="#181a1e"/></svg>`,
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><path d="M14 34l20-20M14 14l20 20" stroke="#181a1e" stroke-width="4" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#fff"/><path d="M24 14c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z" stroke="#181a1e" stroke-width="4"/></svg>`
]

onMounted(async () => {
    await nextTick();
    const items = rollingRef.value?.querySelectorAll('.rolling-item')
    if (!items || items.length === 0) return

    const itemCount = items.length
    const duration = 8 // 한 바퀴 도는 시간(초)

    gsap.set(items, {
        xPercent: i => i * 100
    })

    items.forEach((item, i) => {
        gsap.to(item, {
            xPercent: `-=${itemCount * 100}`,
            duration: duration * itemCount,
            ease: 'none',
            repeat: -1,
            modifiers: {
                xPercent: gsap.utils.wrap(-100, itemCount * 100 - 100)
            }
        })
    })
})
</script>

<style lang="scss" scoped>
.client-section {
    width: 100%;
    background: #181a1e;
    padding: 6em 0 4em 0;
    overflow: hidden;
}
.client-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2em;
}
.client-title {
    font-size: 2.2em;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2em;
    text-align: left;
}
.rolling-wrapper {
    width: 100vw;
    overflow: hidden;
    position: relative;
}
.rolling-list {
    display: flex;
    align-items: center;
    width: max-content;
}
.rolling-item {
    flex: 0 0 auto;
    margin-right: 4em;
    img {
        width: 120px;
        height: 60px;
        object-fit: contain;
        filter: grayscale(1) brightness(1.2);
        opacity: 0.85;
        transition: filter 0.2s, opacity 0.2s;
        &:hover {
            filter: grayscale(0) brightness(1);
            opacity: 1;
        }
    }
}
</style>


