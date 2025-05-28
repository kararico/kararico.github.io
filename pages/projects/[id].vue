<template>
  <div class="project-detail">
    <div v-if="isLoading" class="container">
      <!-- Skeleton Hero Section -->
      <section class="section">
        <div class="project-header">
          <div class="skeleton skeleton-title"></div>
          <div class="project-info">
            <div class="skeleton skeleton-category"></div>
            <div class="project-meta">
              <div class="skeleton skeleton-meta"></div>
              <div class="skeleton skeleton-meta"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skeleton Description Section -->
      <section class="section">
        <div class="skeleton skeleton-description"></div>
      </section>

      <!-- Skeleton Gallery Section -->
      <section class="section">
        <div class="grid-auto-fit">
          <div v-for="n in 3" :key="n" class="gallery-item">
            <div class="skeleton skeleton-image"></div>
          </div>
        </div>
      </section>

      <!-- Skeleton Details Section -->
      <section class="section">
        <div class="card">
          <div v-for="n in 3" :key="n" class="detail-row">
            <div class="skeleton skeleton-label"></div>
            <div class="skeleton skeleton-value"></div>
          </div>
        </div>
      </section>
    </div>

    <div v-else-if="project" class="container">
      <!-- Hero Section -->
      <section class="section">
        <div class="project-header">
          <h1 class="section-title">{{ project.title }}</h1>
          <div class="project-info">
            <p class="text-secondary">{{ project.category }}</p>
            <div class="project-meta">
              <span class="text-muted">{{ project.period }}</span>
              <span class="text-muted">{{ project.location }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Description Section -->
      <section class="section">
        <p class="text-secondary">{{ project.description }}</p>
      </section>

      <!-- Gallery Section -->
      <section class="section">
        <div v-if="project.swiperUi" class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(image, index) in project.images" :key="index" class="swiper-slide">
              <img :src="image.url" :alt="image.alt">
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
        <div v-else class="grid-auto-fit">
          <div v-for="(image, index) in project.images" :key="index" class="gallery-item">
            <img :src="image.url" :alt="image.alt">
          </div>
        </div>
      </section>

      <!-- Details Section -->
      <section class="section">
        <div class="card">
          <div v-for="(detail, index) in project.details" :key="index" class="detail-row">
            <span class="text-muted">{{ detail.size }}</span>
            <span class="text-primary">{{ detail.material }}</span>
            <span class="text-primary">{{ detail.year }}</span>
          </div>
        </div>
      </section>

      <!-- Project Overview Section -->
      <section class="section">
        <h2 class="section-title">프로젝트 개요</h2>
        <div class="grid-2">
          <div class="card">
            <span class="text-muted">프로젝트 기간</span>
            <span class="text-primary">{{ project.overview.duration }}</span>
          </div>
          <div class="card">
            <span class="text-muted">팀 구성</span>
            <span class="text-primary">{{ project.overview.team }}</span>
          </div>
          <div class="card">
            <span class="text-muted">담당 역할</span>
            <span class="text-primary">{{ project.overview.role }}</span>
          </div>
          <div class="card">
            <span class="text-muted">프로젝트 목표</span>
            <ul class="goals-list">
              <li v-for="(goal, index) in project.overview.goals" :key="index" class="text-primary">
                {{ goal }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="section">
        <h2 class="section-title">기술 스택</h2>
        <div class="grid-2">
          <div class="card" v-for="(techs, category) in project.techStack" :key="category">
            <h3 class="text-primary">{{ category }}</h3>
            <div class="tech-tags">
              <span v-for="tech in techs" :key="tech" class="tech-tag text-primary">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="section">
        <h2 class="section-title">주요 기능</h2>
        <div class="grid-auto-fit">
          <div v-for="(feature, index) in project.features" :key="index" class="card">
            <h3 class="text-primary">{{ feature.title }}</h3>
            <p class="text-secondary">{{ feature.description }}</p>
            <img v-if="feature.image" :src="feature.image" :alt="feature.title" class="feature-image">
          </div>
        </div>
      </section>

      <!-- Project Links Section -->
      <section class="section">
        <h2 class="section-title">프로젝트 링크</h2>
        <div class="grid-auto-fit">
          <a v-if="project.links.website" 
             :href="project.links.website" 
             target="_blank" 
             class="btn">
            <span class="link-icon">🌐</span>
            <span class="link-text">웹사이트</span>
          </a>
          <a v-if="project.links.github" 
             :href="project.links.github" 
             target="_blank" 
             class="btn">
            <span class="link-icon">📦</span>
            <span class="link-text">GitHub</span>
          </a>
          <a v-if="project.links.demo" 
             :href="project.links.demo" 
             target="_blank" 
             class="btn">
            <span class="link-icon">🎥</span>
            <span class="link-text">데모 영상</span>
          </a>
        </div>
      </section>
    </div>
    <div v-else class="error-message text-secondary">
      <p>프로젝트 정보를 불러올 수 없습니다.</p>
    </div>

    <!-- Navigation Section -->
    <section class="section">
      <div class="container">
        <div class="grid-2">
          <NuxtLink 
            v-if="prevProject" 
            :to="`/projects/${prevProject.id}`" 
            class="btn"
            @click="handleNavigation"
          >
            <span class="text-muted">이전 프로젝트</span>
            <span class="text-primary">{{ prevProject.title }}</span>
          </NuxtLink>
          <div v-else class="btn disabled">
            <span class="text-muted">이전 프로젝트</span>
            <span class="text-primary">없음</span>
          </div>

          <NuxtLink 
            v-if="nextProject" 
            :to="`/projects/${nextProject.id}`" 
            class="btn"
            @click="handleNavigation"
          >
            <span class="text-muted">다음 프로젝트</span>
            <span class="text-primary">{{ nextProject.title }}</span>
          </NuxtLink>
          <div v-else class="btn disabled">
            <span class="text-muted">다음 프로젝트</span>
            <span class="text-primary">없음</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Vue와 관련된 필요한 컴포넌트들을 import
import { computed, ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '@/stores/projects';

// 라우터와 프로젝트 스토어 초기화
const route = useRoute();
const projectStore = useProjectStore();
const isLoading = ref(true);
const swiperInstance = ref<any>(null);

// 현재 프로젝트 정보를 가져오는 computed 속성
const project = computed(() => {
  const projectId = route.params.id as string;
  return projectStore.getProjectById(projectId);
});

// 이전 프로젝트 정보를 가져오는 computed 속성
const prevProject = computed(() => {
  const currentIndex = projectStore.projects.findIndex(p => p.id === project.value?.id);
  return currentIndex > 0 ? projectStore.projects[currentIndex - 1] : null;
});

// 다음 프로젝트 정보를 가져오는 computed 속성
const nextProject = computed(() => {
  const currentIndex = projectStore.projects.findIndex(p => p.id === project.value?.id);
  return currentIndex < projectStore.projects.length - 1 ? projectStore.projects[currentIndex + 1] : null;
});

// 네비게이션 처리 함수
const handleNavigation = () => {
  isLoading.value = true;
};

// Swiper 초기화 함수
const initSwiper = async () => {
  if (typeof window === 'undefined') return;
  await nextTick();
  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true);
  }
  // Swiper 관련 모듈들을 동적으로 import
  const Swiper = (await import('swiper')).default;
  const { Navigation, Pagination } = await import('swiper/modules');
  await import('swiper/css');
  await import('swiper/css/navigation');
  await import('swiper/css/pagination');
  // Swiper 인스턴스 생성 및 설정
  swiperInstance.value = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });
};

// 화면 크기 변경 시 Swiper 업데이트 처리
const handleResize = () => {
  if (swiperInstance.value) {
    swiperInstance.value.update();
  }
};

// 컴포넌트 마운트 시 실행되는 훅
onMounted(() => {
  if (project.value?.swiperUi && !isLoading.value && project.value) {
    initSwiper();
  }
  window.addEventListener('resize', handleResize);
});

// 컴포넌트 언마운트 전 실행되는 훅
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

// 로딩 상태 변경 감시
watch(() => isLoading.value, (newValue) => {
  if (project.value?.swiperUi && !newValue && project.value) {
    initSwiper();
  }
});

// 라우트 파라미터 변경 감시
watch(() => route.params.id, () => {
  isLoading.value = true;
  // 로딩 딜레이 시뮬레이션
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
}, { immediate: true });
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
@use '@/assets/scss/common/_common' as *;

.project-detail {
  min-height: 100vh;
  background: v.$bg-color;
  color: #fff;
}

.project-header {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .project-info {
    display: flex;
    justify-content: space-between;
  }

  .project-meta {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
  }
}

.gallery-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.swiper-container {
  width: 100%;
  padding: 2rem 0;

  .swiper-slide {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    
    &:after {
      font-size: 1.2rem;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }

  :deep(.swiper-pagination) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    .swiper-pagination-bullet {
      background: #fff;
      border: 2px solid #000;
      opacity: 1;
      width: 0.75rem;
      height: 0.75rem;
      margin: 0 0.25rem !important;
      border-radius: 50%;
      transition: background 0.2s, border 0.2s;
      box-sizing: border-box;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
      border: 2px solid #fff;
    }
  }
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 0.0625rem solid rgba(255,255,255,0.1);

  &:last-child {
    border-bottom: none;
  }
}

.goals-list {
  list-style: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;

  li {
    margin-bottom: 0.5rem;
  }
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  .tech-tag {
    padding: 0.5rem 1rem;
    background-color: #222;
    border-radius: 2rem;
    font-size: 0.9rem;
  }
}

.feature-image {
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
}

.error-message {
  text-align: center;
  padding: 3rem;
  font-size: 1.1rem;
}

@media (max-width: 48rem) {
  .project-header {
    .project-meta {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  :deep(.swiper-pagination) {
    bottom: 2.5rem;
  }
}
</style>