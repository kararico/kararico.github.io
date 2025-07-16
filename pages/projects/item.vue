<template>
  <div class="project-item">
    <div class="portfolio-page">
      <main class="main-content">
        <!-- Hero Section -->
        <section class="hero-section" ref="heroSection">
          <AnimatedBackground />
          <div class="container">
            <h1 class="hero-title">
              <span class="title-line" ref="line1">새로운 경험을</span><br>
              <span class="title-line" ref="line2">당신에게</span><br>
              <span class="title-line" ref="line3">전달합니다</span>
            </h1>
          </div>
        </section>

        <!-- Projects Grid -->
        <section class="projects-section" ref="projectsSection">
          <div class="container">
            <div class="projects-grid" ref="projectsGrid">
              <ProjectCard
                v-for="project in displayedProjects"
                :key="project.id"
                :project="project"
                class="project-card"
              />
            </div>
            
            <!-- Load More Button -->
            <div v-if="hasMoreProjects" class="load-more-container">
              <button 
                @click="loadMoreProjects" 
                class="load-more-btn"
                :disabled="isLoadingMore"
              >
                <span v-if="!isLoadingMore">더보기 ({{ remainingCount }}개)</span>
                <span v-else class="loading-text">로딩 중...</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useProjectStore } from '@/stores/projects';
import AnimatedBackground from '@/components/common/AnimatedBackground.vue'
import { useHead } from '#imports'

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const line1 = ref<HTMLElement | null>(null);
const line2 = ref<HTMLElement | null>(null);
const line3 = ref<HTMLElement | null>(null);
const heroSection = ref<HTMLElement | null>(null);
const projectsSection = ref<HTMLElement | null>(null);
const projectsGrid = ref<HTMLElement | null>(null);

const projectStore = useProjectStore();

const projects = computed(() => {
  return projectStore.projects;
});

// 반응형 표시 개수 설정
const getInitialDisplayCount = () => {
  if (typeof window === 'undefined') return 6;
  
  const width = window.innerWidth;
  if (width >= 1024) return 6; // PC
  if (width >= 768) return 4;  // Tablet
  return 4; // Mobile - 4개로 변경
};

const getLoadMoreCount = () => {
  if (typeof window === 'undefined') return 6;
  
  const width = window.innerWidth;
  if (width >= 1024) return 6; // PC
  return 4; // Tablet & Mobile
};

const displayCount = ref(getInitialDisplayCount());
const isLoadingMore = ref(false);

// 현재 표시되는 프로젝트들
const displayedProjects = computed(() => {
  return projects.value.slice(0, displayCount.value);
});

// 더 표시할 프로젝트가 있는지
const hasMoreProjects = computed(() => {
  return displayCount.value < projects.value.length;
});

// 남은 프로젝트 개수
const remainingCount = computed(() => {
  return projects.value.length - displayCount.value;
});

// 더보기 버튼 클릭 핸들러
const loadMoreProjects = async () => {
  if (isLoadingMore.value) return;
  
  isLoadingMore.value = true;
  
  // 로딩 시뮬레이션 (실제로는 필요 없을 수 있음)
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const loadCount = getLoadMoreCount();
  displayCount.value += loadCount;
  
  // 새로 추가된 카드들에 애니메이션 적용
  nextTick(() => {
    const newCards = projectsGrid.value?.querySelectorAll('.project-card');
    if (newCards) {
      const startIndex = displayCount.value - loadCount;
      for (let i = startIndex; i < newCards.length; i++) {
        gsap.fromTo(newCards[i], 
          {
            y: 60,
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: (i - startIndex) * 0.1
          }
        );
      }
    }
  });
  
  isLoadingMore.value = false;
};

// 윈도우 리사이즈 시 표시 개수 조정
const handleResize = () => {
  const newInitialCount = getInitialDisplayCount();
  // 모바일에서 리사이즈 시 초기 개수로 리셋하지 않도록 수정
  if (displayCount.value < newInitialCount) {
    displayCount.value = newInitialCount;
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

// 프로젝트 카드 애니메이션
const animateProjectCards = () => {
  if (!projectsGrid.value) return;

  const cards = projectsGrid.value.querySelectorAll('.project-card');
  
  gsap.fromTo(cards, 
    {
      y: 60,
      opacity: 0,
      scale: 0.95
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectsSection.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// 윈도우 리사이즈 시 hero-section 높이 조정
const updateHeroHeight = () => {
  if (heroSection.value) {
    const windowHeight = window.innerHeight;
    heroSection.value.style.setProperty('--hero-height', `${windowHeight}px`);
  }
};

// 컴포넌트 마운트 시 이벤트 리스너 등록
onMounted(() => {
  window.addEventListener('loading-complete', startTextAnimation);
  window.addEventListener('resize', updateHeroHeight);
  window.addEventListener('resize', handleResize);
  
  // 초기 높이 설정
  updateHeroHeight();

  // 프로젝트 카드 애니메이션 설정
  nextTick(() => {
    animateProjectCards();
  });

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
  window.removeEventListener('resize', updateHeroHeight);
  window.removeEventListener('resize', handleResize);
  
  // ScrollTrigger 정리
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
@use '@/assets/scss/common/_common' as *;

.portfolio-page {
  min-height: 100vh;
  min-height: 100dvh;
  background: v.$bg-color;
}

.hero-section {
  height: var(--hero-height);
  display: flex;
  align-items: center;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  @include tablet {
    font-size: 3rem;
  }

  @include mobile {
    font-size: 2.5rem;
  }
}

.title-line {
  display: inline-block;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  will-change: transform, opacity;
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

.project-card {
  will-change: transform, opacity;
  transform: translateY(60px);
  opacity: 0;
}

.load-more-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0 1rem;
}

.load-more-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 2rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @include mobile {
    font-size: 0.9rem;
    padding: 0.875rem 1.75rem;
  }
}

.loading-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    width: 1rem;
    height: 1rem;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 