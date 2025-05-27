<template>
  <div class="portfolio-page">
    <!-- Hero Section -->
    <section class="hero-section">
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
        <h1 class="hero-title">
          <span class="title-line" ref="line1">사용자 경험의 기준을</span><br> 
          <span class="title-line" ref="line2">새로운 수준으로</span><br>
          <span class="title-line" ref="line3">끌어올리다</span>
        </h1>
      </div>
    </section>

    <!-- Project Categories -->
    <section class="categories-section">
      <div class="category-filters">
        <button
          v-for="(category, idx) in categories"
          :key="category"
          class="category-btn"
          :class="{ active: selectedCategory === category }"
          @click="handleCategoryChange(category, idx)"
          :ref="el => categoryBtnRefs[idx] = el as Element"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="container">
        <div v-if="isLoading || filteredProjects.length <= 0" class="projects-grid">
          <div v-for="n in 6" :key="n" class="skeleton-card">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
              <div class="skeleton-title"></div>
              <div class="skeleton-category"></div>
            </div>
          </div>
        </div>
        <div v-else-if="filteredProjects.length > 0" class="projects-grid">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div v-else class="no-projects">
          <p>해당 카테고리의 프로젝트가 없습니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import gsap from 'gsap';

const line1 = ref<HTMLElement | null>(null);
const line2 = ref<HTMLElement | null>(null);
const line3 = ref<HTMLElement | null>(null);

const categories = [
  '전체',
  '기업브랜딩',
  '비즈니스시스템',
  '대고객서비스',
  '글로벌서비스',
  '온라인결제/쇼핑',
  '서비스운영',
  '어플리케이션'
];

const selectedCategory = ref('전체');
const isLoading = ref(false);

const categoryBtnRefs = ref<(Element | null)[]>([]);

const projects = [
  {
    id: '1',
    title: '기업 웹사이트 리뉴얼',
    category: '기업브랜딩',
    image: '/images/products/item01.jpg'
  },
  {
    id: '2',
    title: '업 웹사이트 리뉴얼',
    category: '어플리케이션',
    image: '/images/products/item01.jpg'
  },
  {
    id: '3',
    title: '온라인 쇼핑몰 구축',
    category: '온라인결제/쇼핑',
    image: '/images/products/item01.jpg'
  },
];

const filteredProjects = computed(() => {
  if (selectedCategory.value === '전체') {
    return projects;
  }
  return projects.filter(project => project.category === selectedCategory.value);
});

const handleCategoryChange = (category: string, idx: number) => {
  isLoading.value = true;
  selectedCategory.value = category;
  setTimeout(() => {
    isLoading.value = false;
  }, 800);

  // 스크롤 중앙 이동
  const btn = categoryBtnRefs.value[idx];
  if (btn instanceof HTMLElement && typeof btn.scrollIntoView === 'function') {
    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
};

// Loading 컴포넌트의 애니메이션 완료 이벤트를 처리하는 함수
const startTextAnimation = () => {
  if ((startTextAnimation as any).started) return;
  (startTextAnimation as any).started = true;
  nextTick(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power3.out"
      }
    });

    tl.fromTo(line1.value, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
    .fromTo(line2.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.7"
    )
    .fromTo(line3.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.7"
    );
  });
};

// 컴포넌트 마운트 시 이벤트 리스너 등록
onMounted(() => {
  window.addEventListener('loading-complete', startTextAnimation);

  // 로딩 이벤트가 오지 않을 경우 대비: 1.5초 후 강제 실행
  setTimeout(() => {
    if (!(startTextAnimation as any).started) {
      startTextAnimation();
    }
  }, 1500);
});

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('loading-complete', startTextAnimation);
});

watch(filteredProjects, (newVal) => {
  if (newVal.length === 0) {
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
.portfolio-page {
  min-height: 100vh;
  background: #111;
}

.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  @include tablet {
    max-width: 100%;
    padding: 0;
  }
  @include mobile {
    max-width: 100%;
    padding: 0;
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.title-line {
  display: inline-block;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  will-change: transform, opacity;
}

.categories-section {
  padding: 1.4rem 0 0;
  background-color: #181818;
  position: sticky;
  top: 4rem;
  z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s ease;
}

.categories-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba(24,24,24,0.8);
  z-index: -1;
}

.category-filters {
  display: flex;
  justify-content: center;  
  width: 100%;
  position: relative;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #444 #181818;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
    background: #181818;
  }
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
  }
  @include tablet {
    justify-content: flex-start;  
  }
  @include mobile {
    justify-content: flex-start;  
  }
}

.category-btn {
  position: relative;
  padding: 0.5rem 0;
  border: none;
  background: none;
  font-size: 0.9rem;
  color: #bbb;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;
  letter-spacing: 0.02em;
  min-width: 6rem;
  text-align: center;
  margin-right: 0.5rem;
}

.category-btn::after {
  content: '';
  position: absolute;
  bottom: -0.125rem;
  left: 0;
  width: 100%;
  height: 0.125rem;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.category-btn:hover {
  color: #fff;
}

.category-btn:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.category-btn.active {
  color: #fff;
  font-weight: 500;
}

.category-btn.active::after {
  transform: scaleX(1);
}

.projects-section {
  padding: 2.5rem 0;
  background-color: #181818;
  position: relative;
  @include tablet {
    padding: 1.5rem 0;
  }
  @include mobile {
    padding: 1.5rem 0;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.875rem;
  padding: 1.25rem 0;
}

.project-card, .skeleton-card {
  background: #222;
  color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.12);
}

.skeleton-card {
  background: #222;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
}

.skeleton-image {
  width: 100%;
  padding-top: 75%;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-content {
  padding: 1rem;
}

.skeleton-title {
  height: 1.5rem;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
}

.skeleton-category {
  height: 1rem;
  width: 40%;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
}

.no-projects {
  text-align: center;
  padding: 3rem 0;
  color: #bbb;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .categories-section {
    padding-top: 1.25rem;
  }

  .category-filters {
    gap: inherit;
    margin-right:0.5rem;
    .category-btn {
      margin-right: 0.5rem;
    }
    
  }

  .category-btn {
    font-size: 0.85rem;
  }
}

.project-card .project-title {
  color: #fff;
}
</style> 