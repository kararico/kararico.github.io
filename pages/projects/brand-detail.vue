<template>
    <section class="brand-hero" ref="heroRef">
      <div class="dimd" ref="dimdRef"></div>
      <div class="brand-title-hero" ref="titleHeroRef">PURITO</div>
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
            퓨리토 서울은 한국의 자연을 담은 천연 스킨케어 브랜드로, 자연과의 일체감을 동시대 서울의 감각으로 재해석한 새로운 개념의 스킨케어를 제안합니다.<br>
            브랜드 룩을 잘 보여줄 수 있도록 서울의 감각적인 라이프스타일을 컨템포러리한 무드로 사이트에 녹여내는데 중점을 두어 작업을 하였습니다.<br>
            자유롭고 유려한 디자인과 탐험하는 듯한 스크롤 인터랙션을 통해 더욱 몰입도를 느낄 수 있습니다.
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
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const heroRef = ref<HTMLElement | null>(null);
const detailRef = ref<HTMLElement | null>(null);
const dimdRef = ref<HTMLElement | null>(null);
const titleHeroRef = ref<HTMLElement | null>(null);

function setHeroAndDetailHeight() {
  if (heroRef.value && detailRef.value) {
    const heroHeight = window.innerHeight;
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

onMounted(() => {
  setHeroAndDetailHeight();
  window.addEventListener('resize', setHeroAndDetailHeight);
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', setHeroAndDetailHeight);
  window.removeEventListener('scroll', handleScroll);
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
  padding-bottom: .3rem;

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
				padding:3rem 0;
				font-size: 2.5rem;
				font-weight: 700;
				margin-bottom: 0.5rem;
        text-align: left;
        @include tablet {
          font-size: 2rem;
          padding:2rem 0;
        }
        @include mobile {
          font-size: 1.5rem;
          padding:1.5rem 0;
        }
			}
			.brand-meta {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 2rem;
				margin: 2.5rem 0 2rem 0;
				text-align: left;

				.meta-item {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					min-width: 0;
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
        background: #f2f2f2;
        color: #333;
        border-radius: 1em;
        padding: 0.3em 1em;
        font-size: 0.95em;
        margin: 0 0.3em 0.3em 0;
        }
      }
    }
  }
  .brand-main-image {
    width: 100%;
    margin-bottom: 2rem;
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
    margin-bottom: 2.5rem;
    h2 {
      font-size: 1.5rem;
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
      font-size: 1.08rem;
      line-height: 1.3;
      color: #333;
      word-break: keep-all;
      @include tablet {
        font-size: 1.1rem;
      }
      @include mobile {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 700px) {
    .brand-header .brand-title {
      font-size: 2rem;
    }
    .brand-header .brand-meta {
      display: flex !important;
      flex-direction: column !important;
      gap: 1.5rem;
    }
    .brand-header .brand-meta .meta-item {
      width: 100%;
      align-items: flex-start;
    }
    .brand-header .brand-meta .meta-underline {
      width: 100%;
      height: 1px;
      background: #e0e0e0;
      margin: 0.5em 0 1em 0;
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
      margin-bottom: 1.2rem;
      text-align: left;
      @include tablet {
        font-size: 2rem;
      }
      @include mobile {
        font-size: 1.5rem;
      }
    }

    .overview-row {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;
      @include tablet {
        flex-direction: row;
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
          padding-bottom: 0.5rem;
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
      font-size: 1.05rem;
      font-weight: 700;
      color: #222;
      margin-bottom: 0.5rem;
      @include tablet {
        font-size: 1.2rem;
      }
      @include mobile {
        font-size: 1rem;
      }
    }

    .overview-value {
      font-size: 1.1rem;
      color: #444;
      font-weight: 400;
      @include tablet {
        padding-right: 1rem;
        font-size: 1rem;
      }
      @include mobile {
        padding-right: 1rem;
        font-size: 1rem;
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.2rem;
      .tech-tag {
        background: #e0e0e0;
        color: #333;
        border-radius: 1em;
        padding: 0.3em 1em;
        font-size: 0.95em;
        margin: 0 0.2em 0.2em 0;
        display: inline-block;
      }
    }

    .goals-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style: disc;
      padding-left: 1.2em;
      margin-top: .7rem;
      li {
        font-size: 1em;
        color: #444;
      }
    }
  }
  
  // @media (max-width: 700px) {
  //   .overview-row {
  //     flex-direction: column;
  //     gap: 1rem;
  //     .overview-card {
  //       min-width: 0;
  //     }
  //   }
  // }
}

.site-link-btn {
  display: inline-block;
  margin: 2.5rem auto 0 auto;
  padding: 0.9em 2.2em;
  background: #222;
  color: #fff;
  border: none;
  border-radius: .5rem;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
  text-align: center;
 
  @include mobile {
    width: 100%;
  }
  &:hover, &:focus {
    background: #444;
    color: #fff;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12);
  }
}
</style> 