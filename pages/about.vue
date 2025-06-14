<template>
  <div class="about-page">
    <main class="main-content">
      <div class="hero-background"></div>
      <div class="container">
        <h1 class="section-title" ref="sectionTitle">About Me </h1>
        <p class="section-subtitle" ref="sectionSubtitle">"안녕하세요 😊 저는 ISTJ 성향의 웹 퍼블리셔 허정원입니다.</p>
        <div class="main-visual">
          <div class="image-container">
            <img 
              v-for="(image, index) in images" 
              :key="index"
              :src="image"
              :alt="'Profile Image ' + (index + 1)"
              class="profile-image"
              :class="{ 'active': currentImageIndex === index }"
              :ref="el => { if (el) profileImages[index] = el as HTMLElement }"
            >
            <p class="profile-image-text text-muted">가족과의 여행 중, 웹 얘기만 하던 날 📷</p>
          </div>
        </div>

        <div class="about-content">
          <div class="about-section">
            <h2 class="section-title sr-only">About Me</h2>
            <p class="about-description text-primary" ref="aboutDescription">
              체계적이고 꼼꼼한 성격 덕분에, 주어진 작업을 효율적으로 정리하고 안정적으로 구현해내는 데 자신이 있어요.<br />
              퍼블리셔는 디자인과 개발 사이의 '다리 역할'을 하는 직업이라고 생각합니다.<br />
              사용자의 시선 흐름을 고려해 마크업 구조를 설계하고,<br />
              웹접근성과 웹표준을 준수하여 누구나 편하게 사용할 수 있는 UI를 만드는 데 집중하고 있어요.<br />
              완성도 높은 결과물을 위해, 오늘도 기술과 트렌드를 꾸준히 배우며 성장하고 있습니다.
            </p>
          </div>

          <div class="about-section">
            <h2 class="section-title">Skills</h2>
            <p class="section-subtitle">제가 보유한 기술 스택입니다.</p>
            <div class="skills-grid">
              <div class="skill-card" v-for="(skill, index) in skills" :key="index" :ref="el => { if (el) skillCards[index] = el as HTMLElement }">
                <div class="skill-header">
                  <div class="skill-icon">{{ skill.icon }}</div>
                  <h3>{{ skill.title }}</h3>
                </div>
                <ul class="skill-list">
                  <li v-for="(item, itemIndex) in skill.items" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2 class="section-title">History</h2>
            <p class="section-subtitle">다양한 환경 속에서 퍼블리셔로 성장해온 여정입니다.</p>
            <div class="history-timeline">
              <div class="timeline-line" ref="timelineLine"></div>
              <div class="timeline-item" v-for="(history, index) in histories" :key="index" :ref="el => { if (el) timelineItems[index] = el as HTMLElement }">
                <div class="timeline-dot" :ref="el => { if (el) timelineDots[index] = el as HTMLElement }"></div>
                <div class="year">{{ history.year }}</div>
                <div class="content">
                  <h3>{{ history.company }}</h3>
                  <p>{{ history.role }}</p>
                  <p>{{ history.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-section">
            <h2 class="section-title">What I Value</h2>
            <p class="section-subtitle">퍼블리셔로서 일할 때 제가 가장 중요하게 생각하는 가치들입니다.</p>
            <div class="philosophy-grid">
              <div class="philosophy-card" v-for="(philosophy, index) in philosophies" :key="index" :ref="el => { if (el) philosophyCards[index] = el as HTMLElement }">
                <div class="philosophy-header">
                  <div class="philosophy-icon">{{ philosophy.icon }}</div>
                  <h3>{{ philosophy.title }}</h3>
                </div>
                <p>{{ philosophy.description }}</p>
              </div>
            </div>
          </div>
          <div class="about-section">
            <h2 class="section-title">TMI</h2>
            <p class="section-subtitle">저에 대한 조금 더 자세한 이야기입니다.</p>
            <div class="tmi-grid">
              <div class="tmi-card" v-for="(tmi, index) in tmis" :key="index" :ref="el => { if (el) tmiCards[index] = el as HTMLElement }">
                <h3>{{ tmi.title }}</h3>
                <ul class="tmi-list">
                  <li v-for="(item, itemIndex) in tmi.items" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2 class="section-title">Resume</h2>
            <p class="section-subtitle">전체 이력이 담긴 PDF 이력서를 다운로드하실 수 있어요.</p>
            <div class="resume-download">
              <a href="/profile.pdf" class="download-button" ref="downloadButton" download>
                <span class="download-icon">📄</span>
                <span class="download-text">이력서 다운로드</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <ScrollTop />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { useRuntimeConfig } from '#imports'
import profile1 from '@/assets/images/layout/about/profile_01.png'
import profile2 from '@/assets/images/layout/about/profile_02.png'
import profile3 from '@/assets/images/layout/about/profile_03.png'
import ScrollTop from '@/components/ScrollTop.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const emit = defineEmits(['animationComplete'])
const currentImageIndex = ref(0)
const images = [
  // profile1,
  // profile2,
  profile3
]

// Data for skills section
const skills = [
  {
    icon: '🎨',
    title: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator', 'XD']
  },
  {
    icon: '💻',
    title: 'Frontend',
    items: ['HTML5', 'CSS3/SCSS', 'JavaScript', 'Vue.js']
  },
  {
    icon: '🛠️',
    title: 'Tools',
    items: ['Git', 'VS Code', 'Webpack', 'npm']
  },
  {
    icon: '📱',
    title: 'Responsive',
    items: ['Mobile First', 'Cross Browser', 'Media Queries', 'Flexbox/Grid']
  }
]

// Data for history section
const histories = [
  {
    year: '2022.10 ~ 재직중',
    company: '플그림',
    role: '패션 이커머스 구축 및 운영 업무',
    description: '👉 Nuxt 기반, React 적응형 퍼블리싱 / 반응형 설계 / 카테고리 시스템 UI 개선'
  },
  {
    year: '2019.10 ~ 2022.10',
    company: '신세계 까사',
    role: '브랜드 사이트 구축 및 운영 업무',
    description: '👉 Vue 기반 퍼블리싱 / GSAP 인터랙션 구현 / 모바일 퍼포먼스 개선 / 프로모션 이벤트 페이지 제작'
  },
  {
    year: '2017.07 ~ 2019.10',
    company: '애드쿠아 인터렉티브',
    role: '마이크로 사이트 구축 및 운영 업무',
    description: '👉 Vue 기반 퍼블리싱 / GSAP 인터랙션 구현 / 모바일 환경 최적화 / 브랜드 프로모션 페이지 제작'
  },
  {
    year: '2016.05 ~ 2017.07',
    company: '피싱트리',
    role: '사이트 구축 및 운영 업무',
    description: '👉 웹/모바일 사이트 운영 및 신규 구축 / 이벤트·기획전 마이크로 페이지 제작 / 웹표준·접근성 마크업 고도화'
  },
  {
    year: '2015.03 ~ 2015.12',
    company: '이지넷',
    role: '사이트 구축 및 운영 업무',
    description: '👉 웹/모바일 및 글로벌 사이트 퍼블리싱 / SEO 최적화 / HTML5·CSS3·jQuery 기반 구조 설계'
  },
  {
    year: '2013.01 ~ 2014.10',
    company: '해리코리아',
    role: '사이트 구축 및 운영 업무',
    description: '👉 웹/모바일 및 반응형 사이트 퍼블리싱 / 이벤트·프로모션 페이지 제작 / 웹표준·크로스브라우징 대응'
  }
]

// Data for philosophy section
const philosophies = [
  {
    icon: '📐',
    title: '기본에 충실한 구조',
    description: '시맨틱 태그와 체계적인 마크업 구조, 효율적인 CSS 설계가 탄탄한 퍼블리싱의 시작이라고 믿습니다.'
  },
  {
    icon: '♿',
    title: '누구나 접근 가능한 웹',
    description: '웹접근성은 선택이 아닌 기본입니다. 다양한 사용자 환경을 고려해 ARIA, 키보드 내비게이션까지 세심하게 챙깁니다.'
  },
  {
    icon: '🧠',
    title: '기획부터 생각하는 퍼블리싱',
    description: '단순히 디자인을 구현하는 것이 아니라 정보 구조와 사용자 흐름을 함께 고민합니다.'
  }
]

// Data for TMI section
const tmis = [
  {
    title: 'Personality',
    items: [
      '커리어의 성과도 중요하지만, 매일 꾸준히 나아가는 힘이 진짜 실력이라는 걸 느껴요.',
      '예전엔 \'완벽하게 만드는 것\'이 목표였다면, 이제는 완성도와 현실 사이의 균형이 더 중요하다고 생각해요.',
      '체력도 멘탈도 결국은 지속가능한 일의 원동력이라는 걸 요즘 더 깊이 느껴요.',
      '가끔 지칠 때면, "이 일이 내 아이에게 자랑스러울 수 있을까?"라는 질문으로 마음을 다잡곤 해요.',
      '유행을 따르기보다는, 내 안의 기준을 믿고 선택하는 것에 더 집중하게 됐어요.',
      '예전엔 밤늦게까지 일하는 걸 뿌듯해했는데, 지금은 정해진 시간 안에 집중해서 끝내는 걸 더 멋지다고 느껴요.',
      '개발자와 디자이너 사이에서, 서로를 이해하고 연결해주는 믿음직한 다리 같은 사람이 되고 싶어요.'
    ]
  },
  {
    title: 'Typography',
    items: [
      '폰트를 고를 땐, \'디자인과 어울리는 분위기\'를 가장 먼저 생각해요.',
      'Pretendard는 정돈된 구조와 담백한 인상이 마음에 들어요.',
      'Playfair Display는 우아하고 클래식한 느낌이 필요할 때 자주 써요.',
      '프로젝트의 성격에 따라 폰트도 감정을 담는 도구라고 생각해요.',
      '한글과 영문의 조화를 맞추는 것도 꽤 섬세한 작업이에요.',
      '결국 타이포그래피는 \'읽히는 디자인\'을 완성하는 마지막 터치 같아요.'
    ]
  },
  {
    title: 'Interests',
    items: [
      '단순히 예쁜 화면보다, 반응형으로 잘 작동하는 UI/UX에 더 큰 매력을 느껴요.',
      '화면 기획 단계부터 구조를 설계하는 일이 가장 재미있어요.',
      '퍼블리셔로 시작했지만, 프론트엔드 개발에도 점점 깊이 빠지고 있어요.',
      '작은 인터랙션 하나에도 사용자의 감정을 담을 수 있다고 믿어요.',
      '접근성과 웹표준은 단순한 체크리스트가 아니라 기본값이라고 생각해요.',
      '결국 좋은 웹은, 누구에게나 편안하게 닿는 화면이라고 믿어요.'
    ]
  }
]

// Refs for DOM elements
const sectionTitle = ref<HTMLElement | null>(null)
const sectionSubtitle = ref<HTMLElement | null>(null)
const aboutDescription = ref<HTMLElement | null>(null)
const profileImages = ref<(HTMLElement | null)[]>([])
const skillCards = ref<(HTMLElement | null)[]>([])
const timelineItems = ref<(HTMLElement | null)[]>([])
const timelineDots = ref<(HTMLElement | null)[]>([])
const philosophyCards = ref<(HTMLElement | null)[]>([])
const tmiCards = ref<(HTMLElement | null)[]>([])
const downloadButton = ref<HTMLElement | null>(null)
const timelineLine = ref<HTMLElement | null>(null)

let intervalId: number | null = null

const rotateImages = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const initAnimations = async () => {
  if (typeof window === 'undefined') return;

  // Hero section animation
  if (sectionTitle.value) {
    gsap.from(sectionTitle.value, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
  }

  if (sectionSubtitle.value) {
    gsap.from(sectionSubtitle.value, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power3.out'
    })
  }

  // About description animation
  if (aboutDescription.value) {
    gsap.from(aboutDescription.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutDescription.value,
        start: 'top bottom-=100',
        toggleActions: 'play none none none'
      }
    })
  }

  // Profile image animation
  profileImages.value.forEach((image) => {
    if (image) {
      gsap.set(image, {
        opacity: 0,
        scale: 0.8
      })
    }
  })

  // Initial active image animation
  const activeImage = profileImages.value[currentImageIndex.value]
  if (activeImage) {
    gsap.to(activeImage, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out'
    })
  }

  // Watch for image changes
  watch(currentImageIndex, (newIndex) => {
    profileImages.value.forEach((image, index) => {
      if (image) {
        if (index === newIndex) {
          gsap.to(image, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'Expo.Inout'
          })
        } else {
          gsap.to(image, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'Expo.Inout'
          })
        }
      }
    })
  })

  // Skills section animation
  skillCards.value.forEach((card, index) => {
    if (card) {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power3.out'
      })
    }
  })

  // Philosophy cards animation
  philosophyCards.value.forEach((card, index) => {
    if (card) {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power3.out'
      })
    }
  })

  // TMI cards animation
  tmiCards.value.forEach((card, index) => {
    if (card) {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power3.out'
      })
    }
  })
}

// Timeline animation
const initTimelineAnimation = () => {
  if (!timelineItems.value.length || !timelineLine.value) return

  // 타임라인 아이템 애니메이션
  timelineItems.value.forEach((item, index) => {
    if (!item) return
    
    // 각 아이템의 스크롤 트리거 설정
    const trigger = ScrollTrigger.create({
      trigger: item,
      start: "top bottom-=100",
      end: "top center",
      onEnter: () => {
        // 아이템이 등장할 때 라인 높이 증가
        const progress = (index + 1) / timelineItems.value.length
        gsap.to(timelineLine.value, {
          height: `${progress * 100}%`,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            // 애니메이션이 완료된 후 트리거 비활성화
            trigger.kill()
          }
        })
      },
      toggleActions: "play none none none" // 한 번만 실행되도록 설정
    })

    // 아이템 페이드인 애니메이션
    gsap.fromTo(item,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none none" // 한 번만 실행되도록 설정
        }
      }
    )

    // 타임라인 도트 애니메이션
    if (timelineDots.value[index]) {
      gsap.fromTo(timelineDots.value[index],
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none"
          }
        }
      )
    }
  })
}

onMounted(async () => {
  emit('animationComplete')
  intervalId = window.setInterval(rotateImages, 5000)
  await nextTick()
  gsap.registerPlugin(ScrollTrigger)
  initTimelineAnimation()
  await initAnimations()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  // Clean up ScrollTrigger
  ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #000;
  position: relative;
  overflow: hidden;

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .background-svg {
    width: 100%;
    height: 100%;
    filter: blur(rem(40));
    transform: scale(1.5);
  }

  .floating-circle {
    opacity: 0.7;
    mix-blend-mode: screen;
  }

  .floating-path {
    opacity: 0.5;
    mix-blend-mode: screen;
    stroke-width: 1;
  }

  .main-content {
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
    }

    .main-visual {
      margin-bottom: rem(70);
      @include tablet {
        margin-bottom: rem(52.5);
      }
      @include mobile {
        margin-bottom: rem(52.5);
      }
      .image-container {
        position: relative;
        width: 100%;
        margin: 0 auto;
        max-width: rem(1600);
        aspect-ratio: 16/9;
        background-color: #f5f5f5;
        margin-bottom: rem(17.5);
        font-size: 0;
        padding: 0;
        @include mobile {
          aspect-ratio: 4/3;
        }
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease, opacity 0.5s ease;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          &-text {
            font-size: rem(16.8);
            font-family: v.$font-kn2;
            font-weight: 400;
            letter-spacing: -0.02em;
            position: absolute;
            bottom: rem(-35);
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
            @include mobile {
              font-size: rem(14);
            }
          }
          &.active {
            opacity: 1;
          }
        }
      }
    }

    .about-section {
      margin-bottom: rem(52.5);
      @include tablet {
        margin-bottom: rem(52.5);
      }
      @include mobile {
        margin-bottom: rem(35);
      }
      .about-description,
      .detail-description {
        @extend .text-primary;
        font-size: rem(15.4);
        line-height: 1.8;
        margin-bottom: rem(17.5);
        @include mobile {
          font-size: rem(14);
          word-break: keep-all;
        }
      }

      .scope-list,
      .awards-list {
        .scope-item,
        .award-item {
          font-size: rem(15.4);
          margin-bottom: rem(8.75);
          line-height: 1.6;
        }
      }
    }

    .history-timeline {
      position: relative;
      padding-left: rem(26.25);
      @include tablet {
        margin-bottom: rem(26.25);
      }
      @include mobile {
        padding-left: rem(17.5);
        margin-bottom: rem(21);
      }

      .timeline-line {
        position: absolute;
        left: 0;
        top: rem(11.2);
        width: rem(1.75);
        height: 0;
        background: #fff;
        transition: height 0.3s ease;
      }

      .timeline-item {
        position: relative;
        margin-bottom: rem(35);
        @include tablet {
          margin-bottom: rem(35);
        }
        @include mobile {
          margin-bottom: rem(28);
        }
        &:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: rem(-29.75);
          top: rem(4.375);
          width: rem(8.75);
          height: rem(8.75);
          border-radius: 50%;
          background: #fff;
          @include tablet {
            left: rem(-28.77);
            width: rem(7);
            height: rem(7);
          }
          @include mobile {
            left: rem(-20.37);
            width: rem(7);
            height: rem(7);
          }
        }

        .year {
          font-size: rem(16.8);
          font-weight: 700;
          margin-bottom: rem(8.75);
          color: #fff;
        }

        .content {
          h3 {
            font-size: rem(15.4);
            font-weight: 600;
            margin-bottom: rem(7);
            color: #fff;
          }

          p {
            font-size: rem(14);
            line-height: 1.6;
            color: #fff;
            margin-bottom: rem(4.375);

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
 
.about-description {
  font-size: rem(15.4);
  line-height: 1.8;
  margin-bottom: rem(17.5);
  color: #fff;
  font-family: v.$font-kn2;
  @include tablet {
    font-size: rem(14);
  }
  @include mobile {
    font-size: rem(13.3);
    line-height: 1.7;
    text-align: left;
    margin-bottom: rem(14);
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(rem(250), 1fr));
  gap: rem(28);
  margin-bottom: rem(42);

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: rem(21);
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: rem(14);
  }
}

.skill-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(rem(10));
  border-radius: rem(14);
  padding: rem(28);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
      box-shadow: 0 rem(15) rem(30) rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);

      &::before {
        opacity: 1;
      }
    }
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: rem(14);
    margin-bottom: rem(14);
    @include tablet {
      flex-direction: column;
    }
    @include mobile {
      flex-direction: column;
    }
  }

  .skill-icon {
    font-size: rem(35);
    transition: transform 0.4s ease;
  }

  h3 {
    font-size: rem(21);
    font-weight: 600;
    color: #fff;
    font-family: v.$font-en2;
    margin: 0;
  }

  .skill-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #fff;
      font-size: rem(15.4);
      margin-bottom: rem(7);
      padding-left: rem(21);
      position: relative;
      font-family: v.$font-kn2;
      transition: transform 0.4s ease;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: v.$main-color;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @include mobile {
    display: flex;
    align-items: flex-start;
    gap: rem(21);
    padding: rem(21);

    .skill-header {
      margin-bottom: 0;
      min-width: rem(140);
    }

    .skill-icon {
      font-size: rem(28);
    }

    h3 {
      font-size: rem(16.8);
    }

    .skill-list {
      flex: 1;

      li {
        font-size: rem(12.6);
        margin-bottom: rem(3.5);
        padding-left: rem(14);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.tmi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(rem(250), 1fr));
  gap: rem(28);
  margin-bottom: rem(42);

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: rem(21);
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: rem(14);
  }
}

.tmi-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(rem(10));
  border-radius: rem(14);
  padding: rem(28);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
      transform: translateY(rem(-8));
      box-shadow: 0 rem(15) rem(30) rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);

      &::before {
        opacity: 1;
      }
    }
  }

  h3 {
    font-size: rem(21);
    font-weight: 800;
    margin-bottom: rem(14);
    color: #fff;
    font-family: v.$font-en2;
  }

  .tmi-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #fff;
      font-size: rem(15.4);
      margin-bottom: rem(7);
      padding-left: rem(21);
      position: relative;
      font-family: v.$font-kn2;
      transition: transform 0.4s ease;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: v.$main-color;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @include mobile {
    padding: rem(17.5);
    text-align: left;

    h3 {
      margin-bottom: rem(14);
    }

    .tmi-list {
      li {
        text-align: left;
        font-size: rem(12.6);
        line-height: 1.5;
        margin-bottom: rem(7);
      }
    }
  }
}

.resume-download {
  display: flex;
  justify-content: center;
  margin: rem(28) 0;

  .download-button {
    display: inline-flex;
    align-items: center;
    gap: rem(14);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(rem(10));
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: rem(28);
    padding: rem(14) rem(28);
    color: #fff;
    text-decoration: none;
    font-family: v.$font-kn2;
    font-size: rem(15.4);
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
        transform: translateY(rem(-4));
        box-shadow: 0 rem(10) rem(20) rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 255, 255, 0.3);

        &::before {
          opacity: 1;
        }

        .download-icon {
          transform: scale(1.1);
        }
      }
    }

    .download-icon {
      font-size: rem(21);
      transition: transform 0.4s ease;
    }

    .download-text {
      transition: transform 0.4s ease;
    }
  }

  @include mobile {
    .download-button {
      padding: rem(12.25) rem(24.5);
      font-size: rem(14);

      .download-icon {
        font-size: rem(17.5);
      }
    }
  }
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(rem(250), 1fr));
  gap: rem(28);
  margin-bottom: rem(42);

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: rem(21);
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: rem(14);
  }
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(rem(10));
  border-radius: rem(14);
  padding: rem(28);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
      transform: translateY(rem(-8));
      box-shadow: 0 rem(15) rem(30) rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);

      &::before {
        opacity: 1;
      }

      .philosophy-icon {
        transform: scale(1.1);
      }

      p {
        transform: translateX(rem(5));
      }
    }
  }

  .philosophy-header {
    display: flex;
    align-items: center;
    gap: rem(14);
    margin-bottom: rem(14);
  }

  .philosophy-icon {
    font-size: rem(35);
    transition: transform 0.4s ease;
  }

  h3 {
    font-size: rem(18.2);
    font-weight: 600;
    color: #fff;
    font-family: v.$font-en2;
    margin: 0;
  }

  p {
    color: #fff;
    font-size: rem(15.4);
    line-height: 1.6;
    margin: 0;
    font-family: v.$font-kn2;
    transition: transform 0.4s ease;
  }

  @include mobile {
    padding: rem(17.5);
    text-align: left;

    .philosophy-header {
      margin-bottom: rem(14);
    }

    .philosophy-icon {
      font-size: rem(28);
    }

    h3 {
      font-size: rem(16.8);
    }

    p {
      text-align: left;
      font-size: rem(12.6);
      line-height: 1.5;
    }
  }
}
</style> 