<template>
  <div class="about-page">
    <div class="background-elements">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
      <div class="bg-gradient"></div>
    </div>
    <main class="main-content">
      <div class="container">
        <h1 class="page-title">a b o u t</h1>
        
        <div class="main-visual">
          <div class="image-container">
            <img src="@/assets/images/layout/about/profile.jpg" alt="Profile Image" class="profile-image">
          </div>
          <p class="image-caption">My silhouette image.</p>
        </div>

        <div class="about-content">
          <div class="about-section">
            <h2 class="section-title">About</h2>
            <p class="about-description">
              안녕하세요, ISTJ 성격유형을 가진 웹 퍼블리셔입니다.<br>
              체계적이고 논리적인 성격으로, 웹 퍼블리싱 분야에서 꾸준히 성장하고 있습니다.<br>
              디자인과 개발의 경계에서 균형 잡힌 시각을 가지고 있으며,<br>
              사용자 경험을 최우선으로 생각하는 웹사이트를 만드는 것을 좋아합니다.<br>
              현재도 새로운 기술과 트렌드를 배우며 지속적으로 역량을 향상시키고 있습니다.
            </p>
          </div>

          <div class="about-section">
            <h2 class="section-title">History</h2>
            <div class="history-timeline">
              <div class="timeline-item">
                <div class="year">2024</div>
                <div class="content">
                  <h3>프리랜서 웹 퍼블리셔</h3>
                  <p>다양한 클라이언트 프로젝트 진행 및 개인 포트폴리오 제작</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2022</div>
                <div class="content">
                  <h3>ABC 디지털 에이전시</h3>
                  <p>웹 퍼블리셔 / 프론트엔드 개발자</p>
                  <p>대기업 웹사이트 리뉴얼 및 반응형 웹 개발</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2021</div>
                <div class="content">
                  <h3>XYZ 스튜디오</h3>
                  <p>웹 디자이너 / 퍼블리셔</p>
                  <p>브랜드 웹사이트 제작 및 UI/UX 디자인</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2019</div>
                <div class="content">
                  <h3>디자인 학원 수료</h3>
                  <p>웹 디자인 및 퍼블리싱 과정 이수</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="year">2015</div>
                <div class="content">
                  <h3>디자인 입문</h3>
                  <p>그래픽 디자인 독학 시작</p>
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
import { onMounted } from 'vue'

const emit = defineEmits(['animationComplete'])

onMounted(() => {
  emit('animationComplete')
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  position: relative;
  overflow: hidden;

  .background-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;

    .bg-circle {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.15;
      mix-blend-mode: multiply;
    }

    .circle-1 {
      width: 600px;
      height: 600px;
      background: #FF6B6B;
      top: -200px;
      left: -100px;
    }

    .circle-2 {
      width: 500px;
      height: 500px;
      background: #4ECDC4;
      top: 40%;
      right: -100px;
    }

    .circle-3 {
      width: 400px;
      height: 400px;
      background: #FFE66D;
      bottom: -100px;
      left: 20%;
    }

    .bg-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.7) 100%
      );
      backdrop-filter: blur(10px);
    }
  }

  .main-content {
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 160px 0 60px;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-bottom: 80px;
      font-family: v.$font-en5;
      text-transform: uppercase;
      font-weight: bold;
      font-weight: 800;
    }

    .main-visual {
      margin-bottom: 80px;
      
      .image-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        aspect-ratio: 16/9;
        overflow: hidden;
        background-color: #f5f5f5;
        margin-bottom: 20px;
        font-size:0;
        padding:0;
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.05);
          }
        }
      }

      .image-caption {
        font-size: 0.9rem;
        color: #666;
        text-align: center;
        font-style: italic;
        font-family: v.$font-en5;
      }
    }

    .about-section {
      margin-bottom: 60px;
      max-width: 800px;

      .section-title {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .about-description,
      .detail-description {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 20px;
      }

      .scope-list,
      .awards-list {
        .scope-item,
        .award-item {
          font-size: 1.1rem;
          margin-bottom: 10px;
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
      padding-left: 30px;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #000;
      }

      .timeline-item {
        position: relative;
        margin-bottom: 40px;
        
        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          content: '';
          position: absolute;
          left: -34px;
          top: 5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #000;
        }

        .year {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #000;
        }

        .content {
          h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 8px;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: #666;
            margin-bottom: 5px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
 
}

@media (max-width: 768px) {
  .about-page {
    .main-content {
      padding: 100px 0 40px;

      .page-title {
        font-size: 2rem;
        margin-bottom: 60px;
      }

      .main-visual {
        margin-bottom: 60px;

        .image-container {
          aspect-ratio: 4/3;
        }
      }

      .about-section {
        margin-bottom: 40px;

        .section-title {
          font-size: 1.1rem;
        }

        .about-description,
        .detail-description,
        .scope-item,
        .award-item {
          font-size: 1rem;
        }
      }

      .history-timeline {
        padding-left: 25px;

        .timeline-item {
          margin-bottom: 30px;

          &::before {
            left: -29px;
            width: 8px;
            height: 8px;
          }

          .year {
            font-size: 1.1rem;
          }

          .content {
            h3 {
              font-size: 1rem;
            }

            p {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}
</style> 