<template>
    <section class="brand-hero" ref="heroRef">
      <div class="dimd" ref="dimdRef"></div>
      <div class="brand-title-hero" ref="titleHeroRef">Ezwel</div>
      <button class="scroll-down" @click="scrollToDetail">↓</button>
    </section>
    <section class="brand-detail" ref="detailRef">
      <div class="brand-header">
        <div class="inner">
            <h1 class="brand-title">퓨리토 서울</h1>
            <div class="brand-meta">
              <div class="meta-item">
                <div class="meta-title">CLIENT</div>
                <div class="meta-underline"></div>
                <div class="meta-value">하이네이처(주)</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">RELEASE DATE</div>
                <div class="meta-underline"></div>
                <div class="meta-value">2024.04</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">TYPE</div>
                <div class="meta-underline"></div>
                <div class="meta-value">워드프레스</div>
              </div>
            </div>
            <div class="brand-tags">
            <span class="tag">#반응형웹</span>
            <span class="tag">#브랜드웹사이트</span>
            <span class="tag">#워드프레스 홈페이지 제작</span>
            <span class="tag">#화장품 사이트</span>
            </div>
        </div>
      </div>
      <div class="brand-main-image">
        <img src="/public/images/products/test-img01.jpg" alt="퓨리토 서울 메인 이미지" />
        <!-- <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="퓨리토 서울 메인 이미지" /> -->
      </div>
      <div class="brand-description">
        <div class="inner">
          <h2>프로젝트 소개</h2>
          <p>
            복지몰 사이트 리뉴얼 구축 프로젝트에 웹 퍼블리셔로 참여하였습니다.<br />
            기존 사이트의 UI 구조를 재정비하고, 사용자 중심의 경험을 제공하기 위해 마크업과 인터랙션 구현을 담당하고 있습니다. 프로젝트는 Nuxt.js 기반으로 구축되었으며,
             TypeScript를 적용하여 정적 타입의 안정성과 유지보수성을 확보했습니다.<br />

            스타일링은 SCSS 전처리기를 활용하여 컴포넌트 기반의 구조화된 스타일 가이드를 구성하였습니다.<br />
            본 프로젝트는 반응형 구조가 아닌, PC와 MOBILE을 분리하여 별도의 레이아웃 및 컴포넌트를 구축하는 방식으로 진행되고 있습니다.<br />
            디바이스 환경에 따라 페이지가 완전히 분기되며, 각각의 사용 환경에 최적화된 UI를 제공합니다. <br />

            인터랙션 구현은 Lottie.js를 활용한 애니메이션 연동과 GSAP을 이용한 모션 효과 중심으로 구성하였습니다.<br />
            페이지 진입, 스크롤 트리거, 버튼 액션 등 다양한 사용자 이벤트에 따라 생동감 있는 전환 효과를 구현하였습니다.<br />

            웹 접근성과 웹 표준을 고려하여 시맨틱한 마크업을 유지하며,<br />
            디자인 시안과의 싱크를 높이기 위해 다양한 브라우저 환경에서 크로스 테스트를 병행하였습니다.<br />

            Storybook을 통해 컴포넌트 기반의 산출물을 문서화하고 있으며,<br />
            디자이너 및 개발자와의 협업 효율을 높이기 위해 UI 시각화 및 재사용성을 고려한 구조로 개발하고 있습니다.<br />

            SCSS 변수와 믹스인을 활용하여 디자인 가이드를 템플릿화하고,<br />
            PC/MOBILE 공통 요소를 유연하게 분리·재사용할 수 있도록 체계적인 구조로 퍼블리싱을 진행 중입니다.
          </p>
          <button class="site-link-btn" @click="goToSite">
            사이트 바로가기
          </button>
        </div>
      </div>
      <div class="brand-overview">
        <div class="inner">
          <h2>프로젝트 개요</h2>
          <div class="overview-row">
            <div class="overview-card">
              <span class="overview-label">프로젝트 기간</span>
              <span class="overview-value">12개월</span>
            </div>
            <div class="overview-card">
              <span class="overview-label">팀 역할</span>
              <span class="overview-value">퍼블리셔 PL</span>
            </div>
            <div class="overview-card">
              <span class="overview-label">팀 구성</span>
              <span class="overview-value">총 10명</span>
            </div>
          </div>
          <div class="overview-grid">
            <div class="overview-card">
              <span class="overview-label">기술 스택</span>
              <div class="tech-tags">
                <span class="tech-tag">HTML5</span>
                <span class="tech-tag">CSS3</span>
                <span class="tech-tag">SCSS</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Vue.js</span>
              </div>
            </div>
            <div class="overview-card">
              <span class="overview-label">프로그램 Tools</span>
              <div class="tech-tags">
                <span class="tech-tag">vs code</span>
                <span class="tech-tag">git</span>
                <span class="tech-tag">Figma</span>
                <span class="tech-tag">storybook</span>
              </div>
            </div>
            <div class="overview-card">
              <span class="overview-label">프로젝트 목표</span>
              <ul class="goals-list">
                <li>웹 표준 및 접근성 준수</li>
                <li>반응형 웹 구현</li>
                <li>효율적인 마크업 구조 설계</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="project-nav">
        <div class="project-nav-item prev"
          @mouseenter="isDesktop && (isPrevHover = true)"
          @mouseleave="isDesktop && (isPrevHover = false)"
          @click="goToPrevProject">
          <div class="nav-bg" :style="{ backgroundImage: 'url(/images/products/project_1-poster.jpg)' }"></div>
          <div class="nav-content">
            <span class="nav-arrow">&#8592;</span>
            <span class="nav-label">PREV PROJECT</span>
            <span class="nav-title" v-if="isDesktop && isPrevHover">UNIST 모바일웹</span>
          </div>
        </div>
        <div class="project-nav-item next"
          @mouseenter="isDesktop && (isNextHover = true)"
          @mouseleave="isDesktop && (isNextHover = false)"
          @click="goToNextProject">
          <div class="nav-bg" :style="{ backgroundImage: 'url(/images/products/project_2-poster.jpg)' }"></div>
          <div class="nav-content">
            <span class="nav-label">NEXT PROJECT</span>
            <span class="nav-arrow">&#8594;</span>
            <span class="nav-title" v-if="isDesktop && isNextHover">예시 프로젝트명</span>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const heroRef = ref<HTMLElement | null>(null);
const detailRef = ref<HTMLElement | null>(null);
const dimdRef = ref<HTMLElement | null>(null);
const titleHeroRef = ref<HTMLElement | null>(null);
const isPrevHover = ref(false);
const isNextHover = ref(false);
const isDesktop = ref(true);

function setHeroAndDetailHeight() {
  if (heroRef.value && detailRef.value) {
    const heroHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    heroRef.value.style.height = heroHeight + 'px';
    detailRef.value.style.marginTop = heroHeight + 'px';
  }
}

function handleScroll() {
  if (!heroRef.value || !dimdRef.value || !titleHeroRef.value || !detailRef.value) return;
  const detailTop = detailRef.value.offsetTop;
  const scrollY = window.scrollY || window.pageYOffset;
  // progress: 0(맨 위) ~ 1(brand-detail이 화면 상단에 닿을 때)
  const progress = Math.min(1, Math.max(0, scrollY / detailTop));

  // dimd: 0 → 0.8
  const dimdOpacity = 0.8 * progress;
  dimdRef.value.style.opacity = String(dimdOpacity);

  // title: 1 → 0
  const titleOpacity = 1 - progress;
  titleHeroRef.value.style.opacity = String(titleOpacity);
}

function scrollToDetail() {
  if (detailRef.value) {
    const header = document.querySelector('.header') as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 0;
    window.scrollTo({
      top: detailRef.value.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }
}

function goToSite() {
  window.open('https://your-site-url.com', '_blank');
}

function goToPrevProject() {
  window.location.href = '/projects/prev-id'; // 실제 이전 프로젝트 경로로 변경
}

function goToNextProject() {
  window.location.href = '/projects/next-id'; // 실제 다음 프로젝트 경로로 변경
}

function handleResize() {
  isDesktop.value = window.innerWidth > 1024;
  if (!isDesktop.value) {
    isPrevHover.value = false;
    isNextHover.value = false;
  }
}

onMounted(() => {
  setHeroAndDetailHeight();
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setHeroAndDetailHeight);
    window.visualViewport.addEventListener('scroll', setHeroAndDetailHeight);
  } else {
    window.addEventListener('resize', setHeroAndDetailHeight);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (window.visualViewport) {
    window.visualViewport.removeEventListener('resize', setHeroAndDetailHeight);
    window.visualViewport.removeEventListener('scroll', setHeroAndDetailHeight);
  } else {
    window.removeEventListener('resize', setHeroAndDetailHeight);
  }
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;
.brand-hero {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80') center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;

  .dimd {
    position: absolute;
    inset: 0;
    background: #111;
    opacity: 1;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.2s;
  }
  .brand-title-hero, .scroll-down {
    position: relative;
    z-index: 2;
  }
 
  .brand-title-hero {
    color: #fff;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-align: center;
    text-shadow: 0 4px 24px rgba(0,0,0,0.18);
    transition: opacity 0.2s;
    @include mobile {
      font-size: 2.5rem;
    }
  }
  .scroll-down {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    opacity: 0.8;
    animation: scroll-bounce 1.2s infinite alternate;
    z-index: 2;
  }
}

@keyframes scroll-bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(16px); }
}

.brand-detail {
  position: relative;
  z-index: 2;
  background: #fff;
  color: #222;

  .brand-header {
    .inner {
      padding: 0 2rem;
      text-align: center;
      margin:0 auto 2.5rem;
      max-width: 61.25rem;
      @include tablet {
        padding: 0 1.5rem;
      }
      @include mobile {
        padding: 0 1.2rem;
      }
      .brand-title {
				padding:3rem 0 2rem;
				font-size: 2.5rem;
				font-weight: 700;
				margin-bottom: 0.5rem;
        text-align: left;
        font-family: v.$font-kn1;
        @include tablet {
          font-size: 2rem;
          padding:2rem 0;
        }
        @include mobile {
          font-size: 2rem;
          padding:1.5rem 0;
        }
			}
			.brand-meta {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 2rem;
				margin: 2.5rem 0 2rem 0;
				text-align: left;

				@include mobile {
					display: flex;
					flex-direction: column;
					gap: 1.5rem;
				}

				.meta-item {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					min-width: 0;
					@include mobile {
						width: 100%;
					}
				}
				.meta-title {
					font-size: 1.3rem;
					font-weight: 700;
					letter-spacing: 0.02em;
					margin-bottom: 0.7em;
					@include tablet {
						font-size: 1.2rem;
            margin-bottom: 0.5em;
					} 
          @include mobile {
            font-size: 1.2rem;
            margin-bottom: 0;
          }
				}
				.meta-underline {
					width: 100%;
					height: 0.03rem;
					background: #222;
					margin-bottom: 0.8em;
					@include mobile {
						width: 100%;
						height: 1px;
						background: #e0e0e0;
						margin: 0.5em 0 1em 0;
					}
				}
				.meta-value {
					font-size: 2.5rem;
					color: #444;
					font-weight: 400;
					word-break: keep-all;
          @include tablet {
            font-size: 2rem;
          }
          @include mobile {
            font-size: 1.1rem;
          }
				}
			}
    	.brand-tags {
     	 margin-top: 0.5rem;
      .tag {
        display: inline-block;
        background: #111;
        color: #fff;
        border-radius: 1em;
        padding: 0.3em 1em;
        font-size: 0.95em;
        margin: 0 0.3em 0.3em 0;
        font-family: v.$font-kn2;
        }
      }
    }
  }
  .brand-main-image {
    width: 100%;
    margin-bottom: 4rem;
    @include tablet {
      margin-bottom: 2rem;
    }
    @include mobile {
      margin-bottom: 1rem;
    } 
    img {
      width: 100%;
    }
  }
  .brand-description {
    .inner {
      padding: 0 2rem;
      margin:0 auto 2.5rem;
      max-width: 61.25rem;
      @include tablet {
        padding: 0 1.5rem;
      }
      @include mobile {
        padding: 0 1.2rem;
      }
    }
    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 0.7rem;
      @include tablet {
        font-size: 1.5rem;
      }
      @include mobile {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5;
      color: #333;
      font-family: v.$font-kn2;
      @include tablet {
        line-height: 1.3;
        font-size: 1.1rem;
      }
      @include mobile {
        line-height: 1.3;
        font-size: 1.1rem;
      }
    }
  }
}

.brand-overview {
  margin: 2.5rem auto 0 auto;
  max-width: 61.25rem;
  .inner{
      padding: 0 2rem;
      margin:0 auto 2.5rem;
      max-width: 61.25rem;
      @include tablet {
        padding: 0 1.5rem;
        max-width: 100%;
      }
      @include mobile {
        padding: 0 1.2rem;
        max-width: 100%;
      }
    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      text-align: left;
      @include tablet {
        font-size: 2rem;
        margin-bottom: 1.2rem;
      }
      @include mobile {
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
      }
    }

    .overview-row {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2.5rem;
      @include tablet {
        flex-direction: row;
        margin-bottom: 2rem;
      }
      @include mobile {
        margin-bottom: 2rem;
      }
      .overview-card {
        display: flex;
        justify-content: space-between;
        min-width: 16rem;
        width: 100%;
        max-width: 100%;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 1rem;
        align-items: flex-start;
        @include tablet {
          padding-bottom: 1rem;
        }
        @include mobile {
          padding-bottom: 0.4rem;
        }
      }
    }

    .overview-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      flex-direction: column;
    }

    .overview-label {
      font-size: 1.5rem;
      font-weight: 700;
      color: #222;
      margin-bottom: 0.5rem;
      @include tablet {
        font-size: 1.2rem;
      }
      @include mobile {
        font-size: 1.2rem;
      }
    }

    .overview-value {
      font-size: 1.5rem;
      color: #444;
      font-weight: 400;
      @include tablet {
        padding-right: 1rem;
        font-size: 1.1rem;
      }
      @include mobile {
        padding-right: 1rem;
        font-size: 1.1rem;
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.2rem;
      .tech-tag {
        background: #111;
        color: #fff;
        border-radius: 1rem;
        padding: 0.75rem 1.4rem;
        font-size: 1.2rem;
        margin: 0 0.2rem 0.2rem 0;
        display: inline-block;
        font-family: v.$font-en1;
        @include tablet {
          font-size: 1rem;
        }
        @include mobile {
          padding: 0.5rem 1rem;
          font-size: 1rem;
        }
      }
    }

    .goals-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style: disc;
      padding-left: 1.2em;
      margin-top: .7rem;
      font-family: v.$font-kn2;
      li {
        font-size: 1em;
        color: #444;
        @include tablet {
          font-size: 1.2rem;
        }
        @include mobile {
          font-size: 1rem;
        }
      }
    }
  }
}

.site-link-btn {
  display: flex;
  justify-content: center;
  margin: 2.5rem auto 0 auto;
  padding: 0.9em 2.2em;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 1rem;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
  text-align: center;
  @include tablet {
    width: 100%;
  }
  @include mobile {
    width: 100%;
  }
  &:hover, &:focus {
    background: #444;
    color: #fff;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12);
  }
}

.project-nav {
  display: flex;
  width: 100%;
  margin: 3rem auto 0 auto;
  min-height: 14rem;
  position: relative;

  @include tablet {
    background: none;
    min-height: auto;
    max-width: 100%;
    padding: 0;
  }
  @include mobile {
    background: none;
    min-height: 5rem;
    max-width: 100%;
    padding: 0;
  }

  .project-nav-item {
    width: 50%;
    flex: 0 0 50%;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @include tablet {
      background: none !important;
      width: auto;
      flex: 1 1 0;
      min-width: 0;
      padding: 2rem 0;
    }

    .nav-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.5);
      z-index: 1;
      transition: filter 0.2s;

      @include tablet {
        display: none !important;
      }
      @include mobile {
        display: none !important;
      }
    }

    .nav-content {
      position: relative;
      z-index: 2;
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      letter-spacing: 0.05em;

      @include tablet {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        min-height: unset;
        display: flex;

        .nav-label, .nav-title, .nav-arrow {
          color: #111 !important;
          font-size: 0.9rem !important;
          font-weight: 700;
          text-decoration: none !important;
          opacity: 1 !important;
          margin: 0 0.2em;
        }
      }
      @include mobile {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        min-height: unset;
        display: flex;

        .nav-label, .nav-title, .nav-arrow {
          color: #111 !important;
          font-size: 0.9rem !important;
          font-weight: 700;
          text-decoration: none !important;
          opacity: 1 !important;
          margin: 0 0.2em;
        }
      }
    }

    &.prev {
      @include tablet {
        justify-content: flex-start;
        .nav-label {
          @include mobile {
            margin-left: 0.5em;
            font-size: 1rem;
          }
        }
      }
    }

    &.next {
      @include tablet {
        justify-content: flex-end;
        .nav-label {
          @include mobile {
            margin-right: 0.5em;
            font-size: 1rem;
          }
        }
      }
    }
  }
}


</style> 