<template>
  <div class="client-page">
    <main class="main-content">
      <div class="hero-background"></div>
      <div class="container">
        <h1 class="section-title">Client</h1>
        <p class="section-description">다양한 브랜드와의 협업을 통해 쌓은 경험과 노하우로<br />각 프로젝트마다 최적화된 솔루션을 제공해왔습니다.</p>

        <div class="client-list-section">
          <div class="client-list-grid">
            <a
              v-for="(client, idx) in clientList"
              :key="client.name"
              :href="client.link"
              target="_blank"
              rel="noopener noreferrer"
              class="client-logo"
              :ref="el => clientLogoRefs[idx] = el as Element"
            >
              <img :src="client.logo" :alt="client.name" />
            </a>
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
import ScrollTrigger from 'gsap/ScrollTrigger'
import profile3 from '@/assets/images/layout/about/profile_03.png'
import ScrollTop from '@/components/ScrollTop.vue'
import { useHead } from '#imports'

declare global {
  interface Window {
    loadingComplete?: Promise<void>
  }
}

const emit = defineEmits(['animationComplete'])

const isLoading = ref(true)
const isAnimationStarted = ref(false)
const currentImageIndex = ref(0)

const images = [
  // profile1,
  // profile2,
  profile3
]

const clientList = [
  { name: '아모레퍼스픽', logo: '/images/clients/amorepacific.png', link: 'https://www.amorepacific.com' },
  { name: '빙그레', logo: '/images/clients/bing.png', link: 'https://www.bing.co.kr' },
  { name: '불스원', logo: '/images/clients/bullsone.png', link: 'https://bullsone.com' },
  { name: '까사미아', logo: '/images/clients/casamia-logo.png', link: 'https://casamia.co.kr' },
  { name: '디스커버리', logo: '/images/clients/discovery.png', link: 'https://www.discovery-expedition.com' },
  { name: '좋은사람들', logo: '/images/clients/good-logo.png', link: 'https://www.goodpeople.co.kr/main.asp' },
  { name: '호두잉글리시', logo: '/images/clients/hodoo.png', link: 'https://www.hodooenglish.com' },
  { name: 'KT&G', logo: '/images/clients/ktng.png', link: 'https://www.ktng.com' },
  { name: 'NCSOFT', logo: '/images/clients/laneige.png', link: 'https://www.ncsoft.com' },
  { name: 'LG UPLUS', logo: '/images/clients/lgu.png', link: 'https://www.lguplus.co.kr' },
  { name: '교보 라이프플래닛', logo: '/images/clients/lifeplanet.png', link: 'https://www.lifeplanet.co.kr' },
  { name: '링티', logo: '/images/clients/lingtea2.png', link: 'https://www.lingtea.co.kr' },
  { name: '마인드브릿지', logo: '/images/clients/mb-logo.png', link: 'https://www.mindbridge.co.kr' },
  { name: '메가박스', logo: '/images/clients/megabox.png', link: 'https://www.megabox.co.kr' },
  { name: '엠엘비', logo: '/images/clients/mlb.png', link: 'https://www.mlb-korea.com' },
  { name: '삼성화재', logo: '/images/clients/samsung.png', link: 'https://www.samsungfire.com' },
  { name: '시몬스', logo: '/images/clients/simmons.png', link: 'https://www.simmons.co.kr' },
  { name: '스타벅스', logo: '/images/clients/starbucks-logo.png', link: 'https://www.starbucks.co.kr' },
]
const clientLogoRefs = ref<(Element | null)[]>([])

let intervalId: number | null = null

const rotateImages = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

// 로딩 애니메이션 완료 이벤트 처리 함수
const handleLoadingComplete = () => {
  setTimeout(() => {
    startAnimation()
  }, 1000)
}

onMounted(async () => {
  window.addEventListener('loading-complete', handleLoadingComplete)
  gsap.registerPlugin(ScrollTrigger)

  // DOM이 완전히 렌더링될 때까지 대기
  await nextTick()

  // 로딩 이벤트가 발생하지 않았을 경우를 대비해 직접 애니메이션 시작
  setTimeout(() => {
    if (!isAnimationStarted.value) {
      startAnimation()
    }
  }, 1500)
})

const getGridCount = () => {
  if (window.innerWidth <= 600) return 1; // mobile
  if (window.innerWidth <= 1024) return 2; // tablet
  return 5; // pc
}

const startAnimation = async () => {
  if (isAnimationStarted.value) return
  isAnimationStarted.value = true

  console.log('startAnimation called')
  intervalId = window.setInterval(rotateImages, 5000)
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()
  const n = getGridCount();
  clientLogoRefs.value.forEach((el, i) => {
    if (el instanceof HTMLElement) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (i % n) * 0.07,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  })
  isLoading.value = false
  emit('animationComplete')
}

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  window.removeEventListener('loading-complete', handleLoadingComplete)
  // ScrollTrigger 인스턴스 정리
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Loading 컴포넌트의 이벤트를 받기 위해 defineExpose 사용
defineExpose({
  handleLoadingComplete
})

useHead({
  title: 'Client | 정원 포트폴리오',
  meta: [
    { name: 'description', content: '정원이 작업한 클라이언트 목록 페이지입니다.' }
  ]
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;

  /* Copy the entire style section from about.vue here */
  .client-page {
    min-height: 100vh;
    min-height: 100dvh;
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
    padding: rem(140, 0, 52.5, 0);
    text-align: left;
    @include tablet {
      padding: rem(87.5, 0, 35, 0);
    }
    @include mobile {
      padding: rem(70, 0, 28, 0);
    }
    .container {
      max-width: rem(1200);
      margin: 0 auto;
      padding: 0 rem(20);
      @include mobile {
        padding: 0 rem(32);
      }
    }

    .section-description {
      font-size: rem(16);
      line-height: 1.6;
      color: #fff;
      text-align: center;
      font-family: v.$font-kn1;
      @include tablet {
        font-size: rem(15);
      }
      @include mobile {
        font-size: rem(14);
        line-height: 1.5;
      }
    }
  }

  .client-list-section {
    margin-top: rem(56);
    @include tablet {
      margin-top: rem(42);
    }
    @include mobile {
      margin-top: rem(28);
    }
    .client-list-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: rem(28);
      @include tablet {
        grid-template-columns: repeat(2, 1fr);
        gap: rem(21);
      }
      @include mobile {
        grid-template-columns: repeat(1, 1fr);
        gap: rem(14);
      }
    }
    .client-logo {
      background: #fff;
      border-radius: rem(14);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: rem(140);
      box-shadow: 0 rem(2) rem(12) rgba(0,0,0,0.04);
      opacity: 0;
      img {
        max-width: rem(207);
        max-height: rem(110);
        object-fit: contain;
        margin: 0 auto;
        display: block;
      }
    }
  }
</style>