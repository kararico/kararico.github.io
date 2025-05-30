<template>
  <div class="about-page">
    <main class="main-content">
      <div class="hero-background">

      </div>
      <div class="container">
        <h1 class="section-title">About Me </h1>
        <p class="section-subtitle">“안녕하세요 😊 저는 ISTJ 성향의 웹 퍼블리셔 허정원입니다.</p>
        <div class="main-visual">
          <div class="image-container">
            <img 
              v-for="(image, index) in images" 
              :key="index"
              :src="image"
              :alt="'Profile Image ' + (index + 1)"
              class="profile-image"
              :class="{ 'active': currentImageIndex === index }"
            >
            <p class="profile-image-text text-muted">가족과의 여행 중, 웹 얘기만 하던 날 📷</p>
          </div>
        </div>

        <div class="about-content">
          <div class="about-section">
            <h2 class="section-title sr-only">About Me</h2>
            <p class="about-description text-primary">
              체계적이고 꼼꼼한 성격 덕분에, 주어진 작업을 효율적으로 정리하고 안정적으로 구현해내는 데 자신이 있어요.<br />
              퍼블리셔는 디자인과 개발 사이의 '다리 역할'을 하는 직업이라고 생각합니다.<br />
              사용자의 시선 흐름을 고려해 마크업 구조를 설계하고, <br />
              웹접근성과 웹표준을 준수하여 누구나 편하게 사용할 수 있는 UI를 만드는 데 집중하고 있어요.<br />
              완성도 높은 결과물을 위해, 오늘도 기술과 트렌드를 꾸준히 배우며 성장하고 있습니다.
            </p>
          </div>

          <div class="about-section">
            <h2 class="section-title">Skills</h2>
            <p class="section-subtitle">제가 보유한 기술 스택입니다.</p>
            <div class="skills-grid">
              <div class="skill-card">
                <div class="skill-header">
                  <div class="skill-icon">🎨</div>
                  <h3>Design</h3>
                </div>
                <ul class="skill-list">
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>XD</li>
                </ul>
              </div>
              <div class="skill-card">
                <div class="skill-header">
                  <div class="skill-icon">💻</div>
                  <h3>Frontend</h3>
                </div>
                <ul class="skill-list">
                  <li>HTML5</li>
                  <li>CSS3/SCSS</li>
                  <li>JavaScript</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div class="skill-card">
                <div class="skill-header">
                  <div class="skill-icon">🛠️</div>
                  <h3>Tools</h3>
                </div>
                <ul class="skill-list">
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Webpack</li>
                  <li>npm</li>
                </ul>
              </div>
              <div class="skill-card">
                <div class="skill-header">
                  <div class="skill-icon">📱</div>
                  <h3>Responsive</h3>
                </div>
                <ul class="skill-list">
                  <li>Mobile First</li>
                  <li>Cross Browser</li>
                  <li>Media Queries</li>
                  <li>Flexbox/Grid</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2 class="section-title">History</h2>
            <p class="section-subtitle">다양한 환경 속에서 퍼블리셔로 성장해온 여정입니다.</p>
            <div class="history-timeline">
              <div class="timeline-item">
                <div class="year">2022.10 ~ 재직중</div>
                <div class="content">
                  <h3>플그림</h3>
                  <p>패션 이커머스 구축 및 운영 업무</p>
                  <p>👉 Nuxt 기반, React 적응형 퍼블리싱 / 반응형 설계 / 카테고리 시스템 UI 개선</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2019.10 ~ 2022.10</div>
                <div class="content">
                  <h3>신세계 까사</h3>
                  <p>브랜드 사이트 구축 및 운영 업무</p>
                  <p>👉 Vue 기반 퍼블리싱 / GSAP 인터랙션 구현 / 모바일 퍼포먼스 개선 / 프로모션 이벤트 페이지 제작 </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2017.07 ~ 2019.10</div>
                <div class="content">
                  <h3>애드쿠아 인터렉티브</h3>
                  <p>마이크로 사이트 구축 및 운영 업무</p>
                  <p>👉 Vue 기반 퍼블리싱 / GSAP 인터랙션 구현 / 모바일 환경 최적화 / 브랜드 프로모션 페이지 제작</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2016.05 ~ 2017.07</div>
                <div class="content">
                  <h3>피싱트리</h3>
                  <p>사이트 구축 및 운영 업무</p>
                  <p>👉 웹/모바일 사이트 운영 및 신규 구축 / 이벤트·기획전 마이크로 페이지 제작 / 웹표준·접근성 마크업 고도화</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2015.03 ~ 2015.12</div>
                <div class="content">
                  <h3>이지넷</h3>
                  <p>사이트 구축 및 운영 업무</p>
                  <p>👉 웹/모바일 및 글로벌 사이트 퍼블리싱 / SEO 최적화 / HTML5·CSS3·jQuery 기반 구조 설계</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2013.01 ~ 2014.10</div>
                <div class="content">
                  <h3>해리코리아</h3>
                  <p>사이트 구축 및 운영 업무</p>
                  <p>👉 웹/모바일 및 반응형 사이트 퍼블리싱 / 이벤트·프로모션 페이지 제작 / 웹표준·크로스브라우징 대응</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-section">
            <h2 class="section-title">What I Value</h2>
            <p class="section-subtitle">퍼블리셔로서 일할 때 제가 가장 중요하게 생각하는 가치들입니다.</p>
            <div class="philosophy-grid">
              <div class="philosophy-card">
                <div class="philosophy-header">
                  <div class="philosophy-icon">📐</div>
                  <h3>기본에 충실한 구조</h3>
                </div>
                <p>
                  시맨틱 태그와 체계적인 마크업 구조, 효율적인 CSS 설계가  
                  탄탄한 퍼블리싱의 시작이라고 믿습니다.
                </p>
              </div>
              <div class="philosophy-card">
                <div class="philosophy-header">
                  <div class="philosophy-icon">♿</div>
                  <h3>누구나 접근 가능한 웹</h3>
                </div>
                <p>
                  웹접근성은 선택이 아닌 기본입니다.  
                  다양한 사용자 환경을 고려해 ARIA, 키보드 내비게이션까지 세심하게 챙깁니다.
                </p>
              </div>
              <div class="philosophy-card">
                <div class="philosophy-header">
                  <div class="philosophy-icon">🧠</div>
                  <h3>기획부터 생각하는 퍼블리싱</h3>
                </div>
                <p>
                  단순히 디자인을 구현하는 것이 아니라  
                  정보 구조와 사용자 흐름을 함께 고민합니다.
                </p>
              </div>
            </div>
          </div>
          <div class="about-section">
            <h2 class="section-title">TMI</h2>
            <p class="section-subtitle">저에 대한 조금 더 자세한 이야기입니다.</p>
            <div class="tmi-grid">
              <div class="tmi-card">
                <h3>Personality</h3>
                <ul class="tmi-list">
                  <li>커리어의 성과도 중요하지만, 매일 꾸준히 나아가는 힘이 진짜 실력이라는 걸 느껴요.</li>
                  <li>예전엔 '완벽하게 만드는 것'이 목표였다면, 이제는 완성도와 현실 사이의 균형이 더 중요하다고 생각해요.</li>
                  <li>체력도 멘탈도 결국은 지속가능한 일의 원동력이라는 걸 요즘 더 깊이 느껴요.</li>
                  <li>가끔 지칠 때면, "이 일이 내 아이에게 자랑스러울 수 있을까?"라는 질문으로 마음을 다잡곤 해요.</li>
                  <li>유행을 따르기보다는, 내 안의 기준을 믿고 선택하는 것에 더 집중하게 됐어요.</li>
                  <li>예전엔 밤늦게까지 일하는 걸 뿌듯해했는데, 지금은 정해진 시간 안에 집중해서 끝내는 걸 더 멋지다고 느껴요.</li>
                  <li>개발자와 디자이너 사이에서, 서로를 이해하고 연결해주는 <span class="highlight">믿음직한 다리 같은 사람</span>이 되고 싶어요.</li>
                </ul>
              </div>
              <div class="tmi-card">
                <h3>Typography</h3>
                <ul class="tmi-list">
                  <li>폰트를 고를 땐, '디자인과 어울리는 분위기'를 가장 먼저 생각해요.</li>
                  <li>Pretendard는 정돈된 구조와 담백한 인상이 마음에 들어요.</li>
                  <li>Playfair Display는 우아하고 클래식한 느낌이 필요할 때 자주 써요.</li>
                  <li>프로젝트의 성격에 따라 폰트도 감정을 담는 도구라고 생각해요.</li>
                  <li>한글과 영문의 조화를 맞추는 것도 꽤 섬세한 작업이에요.</li>
                  <li>결국 타이포그래피는 '읽히는 디자인'을 완성하는 마지막 터치 같아요.</li>
                </ul>
              </div>
              <div class="tmi-card">
                <h3>Interests</h3>
                <ul class="tmi-list">
                  <li>단순히 예쁜 화면보다, 반응형으로 잘 작동하는 UI/UX에 더 큰 매력을 느껴요.</li>
                  <li>화면 기획 단계부터 구조를 설계하는 일이 가장 재미있어요.</li>
                  <li>퍼블리셔로 시작했지만, 프론트엔드 개발에도 점점 깊이 빠지고 있어요.</li>
                  <li>작은 인터랙션 하나에도 사용자의 감정을 담을 수 있다고 믿어요.</li>
                  <li>접근성과 웹표준은 단순한 체크리스트가 아니라 기본값이라고 생각해요.</li>
                  <li>결국 좋은 웹은, 누구에게나 편안하게 닿는 화면이라고 믿어요.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2 class="section-title">Resume</h2>
            <p class="section-subtitle">전체 이력이 담긴 PDF 이력서를 다운로드하실 수 있어요.</p>
            <div class="resume-download">
              <a href="/profile.pdf" class="download-button" download>
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
import profile1 from '@/assets/images/layout/about/profile_01.png'
import profile2 from '@/assets/images/layout/about/profile_02.png'
import profile3 from '@/assets/images/layout/about/profile_03.png'
import ScrollTop from '@/components/ScrollTop.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['animationComplete'])
const currentImageIndex = ref(0)
const images = [
  // profile1,
  // profile2,
  profile3
]

let intervalId: number | null = null

const rotateImages = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const initAnimations = () => {
  if (typeof window === 'undefined') return;

  // Hero section animation
  gsap.from('.section-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.section-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  })

  // Profile image animation
  const profileImages = document.querySelectorAll('.profile-image')
  profileImages.forEach((image) => {
    gsap.set(image, {
      opacity: 0,
      scale: 0.8
    })
  })

  // Initial active image animation
  const activeImage = document.querySelector('.profile-image.active')
  if (activeImage) {
    gsap.to(activeImage, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay: 0.6,
      ease: 'power3.out'
    })
  }

  // Watch for image changes
  watch(currentImageIndex, (newIndex) => {
    const images = document.querySelectorAll('.profile-image')
    images.forEach((image, index) => {
      if (index === newIndex) {
        gsap.to(image, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'Expo.Inout'
        })
      } else {
        gsap.to(image, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: 'Expo.Inout'
        })
      }
    })
  })

  // Skills section animation
  const skillCards = document.querySelectorAll('.skill-card')
  skillCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power3.out'
    })
  })

  // History timeline animation
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '.history-timeline',
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Philosophy cards animation
  const philosophyCards = document.querySelectorAll('.philosophy-card')
  philosophyCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power3.out'
    })
  })

  // TMI cards animation
  const tmiCards = document.querySelectorAll('.tmi-card')
  tmiCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power3.out'
    })
  })

  // Resume download button animation
  gsap.from('.download-button', {
    scrollTrigger: {
      trigger: '.resume-download',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
}

onMounted(() => {
  emit('animationComplete')
  intervalId = window.setInterval(rotateImages, 5000)
  nextTick(() => {
    initAnimations()
  })
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  // Clean up ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
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
    filter: blur(40px);
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
    }

    .main-visual {
      margin-bottom: 5rem;
      @include tablet {
        margin-bottom: 3.75rem;
      }
      @include mobile {
        margin-bottom: 3.75rem;
      }
      .image-container {
        position: relative;
        width: 100%;
        margin: 0 auto;
        max-width: 100rem;
        aspect-ratio: 16/9;
        background-color: #f5f5f5;
        margin-bottom: 1.25rem;
        font-size:0;
        padding:0;
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
            font-size: 1.2rem;
            font-family: v.$font-kn2;
            font-weight: 400;
            letter-spacing: -0.02em;
            position: absolute;
            bottom: -2.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
            @include mobile {
              font-size: 1rem;
            }
          }
          &.active {
            opacity: 1;
          }
        }
      }
    }

    .about-section {
      margin-bottom: 3.75rem;
      @include tablet {
        margin-bottom: 3.75rem;
      }
      @include mobile {
        margin-bottom: 2.5rem;
      }
      .about-description,
      .detail-description {
        @extend .text-primary;
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1.25rem;
        @include mobile {
          font-size: 1rem;
        }
      }

      .scope-list,
      .awards-list {
        .scope-item,
        .award-item {
          font-size: 1.1rem;
          margin-bottom: 0.625rem;
          line-height: 1.6;
        }
      }

      .contact-info {
        a {
          font-size: 1.1rem;
          color: #000;
          text-decoration: none;
          transition: opacity 0.3s ease;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }

    .history-timeline {
      position: relative;
      padding-left: 1.875rem;
      @include tablet {
        margin-bottom: 1.875rem;
      }
      @include mobile {
        padding-left: 1.25rem;
        margin-bottom: 1.5rem;
      }
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.8rem;
        bottom: 0;
        width: 0.125rem;
        background: #fff;
      }

      .timeline-item {
        position: relative;
        margin-bottom: 2.5rem;
        @include tablet {
          margin-bottom: 2.5rem;
        }
        @include mobile {
          margin-bottom: 2rem;
        }
        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          content: '';
          position: absolute;
          left: -2.125rem;
          top: 0.3125rem;
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 50%;
          background: #fff;
          @include tablet {
            left: -2.055rem;
            width: 0.5rem;
            height: 0.5rem;
          }
          @include mobile {
            left: -1.455rem;
            width: 0.5rem;
            height: 0.5rem;
          }
        }

        .year {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.625rem;
          color: #fff;
        }

        .content {
          h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #fff;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: #fff;
            margin-bottom: 0.3125rem;

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
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  color: #fff;
  font-family: v.$font-kn2;
  @include tablet {
    font-size: 1rem;
  }
  @include mobile {
    font-size: 0.95rem;
    line-height: 1.7;
    text-align: left;
    margin-bottom: 1rem;
  }
  .highlight {
    color: v.$main-color;
    font-weight: 500;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.skill-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
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
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);

      &::before {
        opacity: 1;
      }
    }
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    @include tablet {
      flex-direction: column;
    }
    @include mobile {
      flex-direction: column;
    }
  }

  .skill-icon {
    font-size: 2.5rem;
    transition: transform 0.4s ease;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    font-family: v.$font-en5;
    margin: 0;
  }

  .skill-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #fff;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
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
    gap: 1.5rem;
    padding: 1.5rem;

    .skill-header {
      margin-bottom: 0;
      min-width: 100px;
    }

    .skill-icon {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    .skill-list {
      flex: 1;

      li {
        font-size: 0.9rem;
        margin-bottom: 0.25rem;
        padding-left: 1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.tmi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.tmi-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
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
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);

      &::before {
        opacity: 1;
      }

    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #fff;
    font-family: v.$font-en5;
  }

  .tmi-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #fff;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
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
    padding: 1.25rem;
    text-align: left;

    h3 {
      margin-bottom: 1rem;
    }

    .tmi-list {
      li {
        text-align: left;
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 0.5rem;
      }
    }
  }
}

.resume-download {
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  .download-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    font-family: v.$font-kn2;
    font-size: 1.1rem;
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

        .download-icon {
          transform: scale(1.1);
        }
      
      }
    }

    .download-icon {
      font-size: 1.5rem;
      transition: transform 0.4s ease;
    }

    .download-text {
      transition: transform 0.4s ease;
    }
  }

  @include mobile {
    .download-button {
      padding: 0.875rem 1.75rem;
      font-size: 1rem;

      .download-icon {
        font-size: 1.25rem;
      }
    }
  }
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
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
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);

      &::before {
        opacity: 1;
      }

      .philosophy-icon {
        transform: scale(1.1);
      }

      p {
        transform: translateX(5px);
      }
    }
  }

  .philosophy-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .philosophy-icon {
    font-size: 2.5rem;
    transition: transform 0.4s ease;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    font-family: v.$font-en5;
    margin: 0;
  }

  p {
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    font-family: v.$font-kn2;
    transition: transform 0.4s ease;
  }

  @include mobile {
    padding: 1.25rem;
    text-align: left;

    .philosophy-header {
      margin-bottom: 1rem;
    }

    .philosophy-icon {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      text-align: left;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
}
</style> 