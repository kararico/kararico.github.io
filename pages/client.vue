<template>
  <div class="client-page">
    <main class="main-content">
      <div class="hero-background"></div>
      <div class="container">
        <h1 class="section-title">Client Page</h1>
        <p class="section-subtitle">제가 지금까지 작업해 온 클라이언트들이에요 :)</p>

        <div class="client-list-section">
          <div class="client-list-grid">
            <div
              v-for="(client, idx) in clientList"
              :key="client.name"
              class="client-logo"
              :ref="el => clientLogoRefs[idx] = el as Element"
            >
              <img :src="client.logo" :alt="client.name" />
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
  <ScrollTop />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profile1 from '@/assets/images/layout/about/profile_01.png'
import profile2 from '@/assets/images/layout/about/profile_02.png'
import profile3 from '@/assets/images/layout/about/profile_03.png'
import ScrollTop from '@/components/ScrollTop.vue'
const emit = defineEmits(['animationComplete'])
const currentImageIndex = ref(0)
const images = [
  // profile1,
  // profile2,
  profile3
]

const clientList = [
  { name: '아모레퍼스픽', logo: '/images/clients/amorepacific.png' },
  { name: '빙그레', logo: '/images/clients/bing.png' },
  { name: '불스원', logo: '/images/clients/bullsone.png' },
  { name: '까사미아아', logo: '/images/clients/casamia-logo.png' },
  { name: '디스커버리', logo: '/images/clients/discovery.png' },
  { name: '좋은사람들들', logo: '/images/clients/good-logo.png' },
  { name: '호두잉글리시시', logo: '/images/clients/hodoo.png' },
  { name: 'KT&G', logo: '/images/clients/ktng.png' },
  { name: 'NCSOFT', logo: '/images/clients/laneige.png' },
  { name: 'LG UPLUS', logo: '/images/clients/lgu.png' },
  { name: '교보 라이프플래닛', logo: '/images/clients/lifeplanet.png' },
  { name: '링티', logo: '/images/clients/lingtea2.png' },
  { name: '마인드브릿지지', logo: '/images/clients/mb-logo.png' },
  { name: '메가박스', logo: '/images/clients/megabox.png' },
  { name: '엠엘비', logo: '/images/clients/mlb.png' },
  { name: '삼성화재', logo: '/images/clients/samsung.png' },
  { name: '시몬스', logo: '/images/clients/simmons.png' },
  { name: '스타벅스', logo: '/images/clients/starbucks-logo.png' },
]
const clientLogoRefs = ref<(Element | null)[]>([])

let intervalId: number | null = null

const rotateImages = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

onMounted(async () => {
  emit('animationComplete')
  intervalId = window.setInterval(rotateImages, 5000)
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()
  clientLogoRefs.value.forEach((el, i) => {
    if (el instanceof HTMLElement) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.07,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  })
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;
// ... Copy the entire style section from about.vue here ...
.client-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #000;
  position: relative;
  overflow: hidden;
}

.client-page .main-content {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 10rem 0 3.75rem;
  text-align: left;
  @include tablet {
    padding: 6.25rem 0 2.5rem;
  }
  @include mobile {
    padding: 5rem 0 2rem;
  }
  .container {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1.25rem;
    @include mobile {
      padding: 0 2rem;
    }
  }
}

.client-list-section {
  margin-top: 4rem;
  @include tablet {
    margin-top: 3rem;
  }
  @include mobile {
    margin-top: 2rem;
  }
  .client-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
    @include tablet {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  .client-logo {
    background: #fff;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    img {
      max-width: 120px;
      max-height: 60px;
      object-fit: contain;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>