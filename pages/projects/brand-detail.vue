<template>
  <div>
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
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="퓨리토 서울 메인 이미지" />
      </div>
      <div class="brand-description">
        <h2>프로젝트 소개</h2>
        <p>
          퓨리토 서울은 한국의 자연을 담은 천연 스킨케어 브랜드로, 자연과의 일체감을 동시대 서울의 감각으로 재해석한 새로운 개념의 스킨케어를 제안합니다.<br>
          브랜드 룩을 잘 보여줄 수 있도록 서울의 감각적인 라이프스타일을 컨템포러리한 무드로 사이트에 녹여내는데 중점을 두어 작업을 하였습니다.<br>
          자유롭고 유려한 디자인과 탐험하는 듯한 스크롤 인터랙션을 통해 더욱 몰입도를 느낄 수 있습니다.
        </p>
      </div>
      <div class="brand-actions">
        <button class="like-btn">♥ 17,177</button>
        <button class="share-btn">공유하기</button>
        <a class="visit-btn" href="#" target="_blank">사이트 바로가기</a>
      </div>
      <div class="brand-team">
        <h2>만든사람들</h2>
        <div class="team-list">
          <div class="team-group">
            <strong>기획</strong>
            <ul>
              <li>양승오 (PL)</li>
              <li>정유하 (PA)</li>
            </ul>
          </div>
          <div class="team-group">
            <strong>디자인</strong>
            <ul>
              <li>정다운 (Director)</li>
              <li>이지수 (PL)</li>
              <li>정유진 (PA)</li>
            </ul>
          </div>
          <div class="team-group">
            <strong>프론트</strong>
            <ul>
              <li>김채희 (PL)</li>
              <li>김민서 (PA)</li>
            </ul>
          </div>
          <div class="team-group">
            <strong>백엔드</strong>
            <ul>
              <li>고경원 (PL)</li>
              <li>이영일 (PA)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
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

  .brand-header {
    .inner {
      padding: 0 2rem;
      text-align: center;
      margin-bottom: 2.5rem;
			.brand-title {
				padding:3rem 0;
				font-size: 2.5rem;
				font-weight: 700;
				margin-bottom: 0.5rem;
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
					font-size: 1.15rem;
					font-weight: 700;
					letter-spacing: 0.02em;
					margin-bottom: 0.7em;
				}
				.meta-underline {
					width: 100%;
					height: 3px;
					background: #111;
					margin-bottom: 1em;
				}
				.meta-value {
					font-size: 1.1rem;
					color: #444;
					font-weight: 400;
					word-break: keep-all;
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
      border-radius: 1.2rem;
      box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
      object-fit: cover;
      max-height: 340px;
    }
  }
  .brand-description {
    margin-bottom: 2.5rem;
    h2 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.7rem;
    }
    p {
      font-size: 1.08rem;
      line-height: 1.8;
      color: #333;
    }
  }
  .brand-actions {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 2.5rem;
    .like-btn, .share-btn, .visit-btn {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 2em;
      padding: 0.7em 1.6em;
      font-size: 1.05em;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      &:hover {
        background: #222;
        color: #fff;
      }
      text-decoration: none;
      color: #222;
      display: inline-block;
    }
  }
  .brand-team {
    margin-top: 2.5rem;
    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .team-list {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      .team-group {
        min-width: 140px;
        ul {
          margin: 0.5em 0 0 0;
          padding: 0;
          list-style: none;
          li {
            font-size: 1em;
            color: #444;
            margin-bottom: 0.2em;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    .brand-header .brand-title {
      font-size: 2rem;
    }
    .brand-main-image img {
      max-height: 200px;
    }
    .brand-team .team-list {
      flex-direction: column;
      gap: 1.2rem;
      align-items: flex-start;
    }
    .brand-meta {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      .meta-item {
        align-items: flex-start;
      }
    }
  }
}
</style> 