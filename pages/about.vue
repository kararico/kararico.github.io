<template>
  <div class="about-page">
    <main class="main-content">
      <div class="hero-background">
        <svg class="background-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:0.5">
                <animate attributeName="offset" values="0;1;0" dur="10s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style="stop-color:#4ECDC4;stop-opacity:0.5">
                <animate attributeName="offset" values="1;0;1" dur="10s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#FFE66D;stop-opacity:0.5">
                <animate attributeName="offset" values="0;1;0" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style="stop-color:#6B66FF;stop-opacity:0.5">
                <animate attributeName="offset" values="1;0;1" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <circle class="floating-circle" cx="20" cy="20" r="15" fill="url(#gradient1)">
            <animate attributeName="cx" values="20;80;20" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="20;80;20" dur="20s" repeatCount="indefinite" />
          </circle>
          <circle class="floating-circle" cx="80" cy="80" r="12" fill="url(#gradient2)">
            <animate attributeName="cx" values="80;20;80" dur="15s" repeatCount="indefinite" />
            <animate attributeName="cy" values="80;20;80" dur="15s" repeatCount="indefinite" />
          </circle>
          <path class="floating-path" d="M10,50 Q50,10 90,50 T90,50" fill="none" stroke="url(#gradient1)" stroke-width="0.5">
            <animate attributeName="d" 
              values="M10,50 Q50,10 90,50 T90,50;
                      M10,50 Q50,90 90,50 T90,50;
                      M10,50 Q50,10 90,50 T90,50"
              dur="8s" 
              repeatCount="indefinite" />
          </path>
          <path class="floating-path" d="M10,30 Q50,70 90,30 T90,30" fill="none" stroke="url(#gradient2)" stroke-width="0.5">
            <animate attributeName="d" 
              values="M10,30 Q50,70 90,30 T90,30;
                      M10,30 Q50,-10 90,30 T90,30;
                      M10,30 Q50,70 90,30 T90,30"
              dur="6s" 
              repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      <div class="container">
        <h1 class="page-title">About Me </h1>
        <em class="page-subtitle">반갑습니다. 저에 대해 간단히 소개드릴게요.</em>
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
          </div>
        </div>

        <div class="about-content">
          <div class="about-section">
            <h2 class="section-title sr-only">About Me</h2>
            <p class="about-description">
              안녕하세요 &#128522;<br>
              저는 ISTJ 성향의 웹 퍼블리셔 허정원입니다.<br><br>

              체계적이고 꼼꼼한 성격 덕분에, 주어진 작업을 효율적으로 정리하고 안정적으로 구현해내는 데에 자신이 있어요.<br>
              웹 퍼블리싱이라는 일은 <span class="highlight">디자인과 개발 사이의 다리 역할</span>을 하는 매력적인 작업이라고 생각합니다.<br>
              그래서 언제나 <span class="highlight">사용자 경험을 중심</span>에 두고, 시각적 완성도와 기능적 완성도를 동시에 갖춘 웹사이트를 만드는 것을 좋아해요.<br><br>

              늘 새로운 기술과 트렌드에 관심을 갖고,<br>
              조금씩이라도 매일 성장하는 퍼블리셔가 되기 위해 오늘도 배우고 있습니다.<br>
              작은 디테일 하나에도 사용자 입장에서 고민하며, 완성도 높은 결과물을 위해 최선을 다합니다.<br>
              협업 속에서도 책임감을 잃지 않고, 맡은 바를 끝까지 마무리하는 것이 제 강점입니다.<br>
              웹을 통해 더 나은 경험을 만들 수 있다는 믿음으로, 매 프로젝트에 진심을 담고 있습니다.
            </p>
          </div>

          <div class="about-section">
            <h2 class="section-title">History</h2>
            <em class="section-subtitle">그동안 제가 다녔던 회사를 소개합니다.</em>
            <div class="history-timeline">
              <div class="timeline-item">
                <div class="year">2022.10 ~ 재직중</div>
                <div class="content">
                  <h3>플그림</h3>
                  <p>패션 이커머스 구축 및 운영 업무</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2019.10 ~ 2022.10</div>
                <div class="content">
                  <h3>신세계 까사</h3>
                  <p>브랜드 사이트 구축 및 운영 업무</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2017.07 ~ 2019.10</div>
                <div class="content">
                  <h3>애드쿠아 인터렉티브</h3>
                  <p>마이크로 사이트 구축 및 운영 업무</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2016.05 ~ 2017.07</div>
                <div class="content">
                  <h3>피싱트리</h3>
                  <p>사이트 구축 및 운영 업무</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2015.03 ~ 2015.12</div>
                <div class="content">
                  <h3>이지넷</h3>
                  <p>사이트 구축 및 운영 업무</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2013.01 ~ 2014.10</div>
                <div class="content">
                  <h3>해리코리아</h3>
                  <p>사이트 구축 및 운영 업무</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import profile1 from '@/assets/images/layout/about/profile_01.png'
import profile2 from '@/assets/images/layout/about/profile_02.png'
import profile3 from '@/assets/images/layout/about/profile_03.png'

const emit = defineEmits(['animationComplete'])
const currentImageIndex = ref(0)
const images = [
  profile1,
  profile2,
  profile3
]

let intervalId: number | null = null

const rotateImages = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

onMounted(() => {
  emit('animationComplete')
  intervalId = window.setInterval(rotateImages, 5000)
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
      padding: 6.25rem 0 2.5rem;
    }
    .container {
      max-width: 75rem;
      margin: 0 auto;
      padding: 0 1.25rem;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-bottom: 1rem;
      font-family: v.$font-en5;
      text-transform: uppercase;
      font-weight: bold;
      font-weight: 800;
      color: #fff;
      @include tablet {
        font-size: 2rem;
      }
      @include mobile {
        font-size: 2rem;
      }
    }
    .page-subtitle {
      display: block;
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-bottom: 2rem;
      font-family: v.$font-kn2;
      color: #fff;
      font-weight: 400;
      letter-spacing: 0.1em;
      @include tablet {
        font-size: 1rem;
      }
      @include mobile {
        font-size: 1rem;
      }
    }

    .main-visual {
      margin-bottom: 5rem;
      @include tablet {
        margin-bottom: 3.75rem;
      }
      @include mobile {
        margin-bottom: 3.75rem;
      }

      // .image-container {
      //   aspect-ratio: 4/3;
      // }
      .image-container {
        position: relative;
        width: 100%;
        margin: 0 auto;
        max-width: 100rem;
        aspect-ratio: 16/9;
        overflow: hidden;
        background-color: #f5f5f5;
        margin-bottom: 1.25rem;
        font-size:0;
        padding:0;
        overflow: hidden;
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
        margin-bottom: 3.75rem;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 400;
        letter-spacing: 0.2em;
        margin-bottom: 1rem;
        font-family: v.$font-en5;
        text-transform: uppercase;
        font-weight: bold;
        font-weight: 800;
        color: #fff;
        @include tablet {
          font-size: 2rem;
        }
        @include mobile {
          font-size: 2rem;
        }
      }
      .section-subtitle {
        display: block;
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.2em;
        margin-bottom: 2rem;
        color: #fff;
        letter-spacing: 0.1em;
        @include tablet {
          font-size: 1rem;
        }
        @include mobile {
          font-size: 1rem;
        }
      }

      .about-description,
      .detail-description {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1.25rem;
        color: #fff;
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
        margin-bottom: 1.875rem;
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
          margin-bottom: 2.5rem;
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
            left: -2.055rem;
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
    font-size: 1rem;
  }
  .highlight {
    color: v.$main-color;
    font-weight: 500;
  }
}
</style> 