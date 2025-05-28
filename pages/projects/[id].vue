<template>
  <div class="project-detail">
    <div v-if="isLoading" class="container">
      <!-- Skeleton Hero Section -->
      <section class="hero-section">
        <div class="project-header">
          <div class="skeleton-title"></div>
          <div class="project-info">
            <div class="skeleton-category"></div>
            <div class="project-meta">
              <div class="skeleton-meta"></div>
              <div class="skeleton-meta"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skeleton Description Section -->
      <section class="description-section">
        <div class="skeleton-description"></div>
      </section>

      <!-- Skeleton Gallery Section -->
      <section class="gallery-section">
        <div class="gallery-grid">
          <div v-for="n in 3" :key="n" class="gallery-item">
            <div class="skeleton-image"></div>
          </div>
        </div>
      </section>

      <!-- Skeleton Details Section -->
      <section class="details-section">
        <div class="detail-item">
          <div v-for="n in 3" :key="n" class="detail-row">
            <div class="skeleton-label"></div>
            <div class="skeleton-value"></div>
          </div>
        </div>
      </section>
    </div>

    <div v-else-if="project" class="container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="project-header">
          <h1 class="project-title">{{ project.title }}</h1>
          <div class="project-info">
            <p class="project-category">{{ project.category }}</p>
            <div class="project-meta">
              <span class="period">{{ project.period }}</span>
              <span class="location">{{ project.location }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Description Section -->
      <section class="description-section">
        <p class="description">{{ project.description }}</p>
      </section>

      <!-- Gallery Section -->
      <section class="gallery-section">
        <div v-if="project.swiperUi" class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(image, index) in project.images" :key="index" class="swiper-slide">
              <img :src="image.url" :alt="image.alt">
            </div>
          </div>
          <!-- Navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <!-- Pagination -->
          <div class="swiper-pagination">
            <div class="swiper-pagination-bullet">
              <div class="swiper-pagination-bullet-active"></div>
            </div>
          </div>
        </div>
        <div v-else class="gallery-grid">
          <div v-for="(image, index) in project.images" :key="index" class="gallery-item">
            <img :src="image.url" :alt="image.alt">
          </div>
        </div>
      </section>

      <!-- Details Section -->
      <section class="details-section">
        <div v-for="(detail, index) in project.details" :key="index" class="detail-item">
          <div class="detail-row">
            <span class="label">Size</span>
            <span class="value">{{ detail.size }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Material</span>
            <span class="value">{{ detail.material }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Year</span>
            <span class="value">{{ detail.year }}</span>
          </div>
        </div>
      </section>

      <!-- Project Overview Section -->
      <section class="overview-section">
        <h2 class="section-title">프로젝트 개요</h2>
        <div class="overview-content">
          <div class="overview-item">
            <span class="label">프로젝트 기간</span>
            <span class="value">{{ project.overview.duration }}</span>
          </div>
          <div class="overview-item">
            <span class="label">팀 구성</span>
            <span class="value">{{ project.overview.team }}</span>
          </div>
          <div class="overview-item">
            <span class="label">담당 역할</span>
            <span class="value">{{ project.overview.role }}</span>
          </div>
          <div class="overview-item goals">
            <span class="label">프로젝트 목표</span>
            <ul class="goals-list">
              <li v-for="(goal, index) in project.overview.goals" :key="index">
                {{ goal }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="tech-section">
        <h2 class="section-title">기술 스택</h2>
        <div class="tech-content">
          <div class="tech-category">
            <h3>Frontend</h3>
            <div class="tech-tags">
              <span v-for="tech in project.techStack.frontend" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="tech-category">
            <h3>Backend</h3>
            <div class="tech-tags">
              <span v-for="tech in project.techStack.backend" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="tech-category">
            <h3>Database</h3>
            <div class="tech-tags">
              <span v-for="tech in project.techStack.database" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="tech-category">
            <h3>Tools</h3>
            <div class="tech-tags">
              <span v-for="tech in project.techStack.tools" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2 class="section-title">주요 기능</h2>
        <div class="features-content">
          <div v-for="(feature, index) in project.features" :key="index" class="feature-item">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
            <img v-if="feature.image" :src="feature.image" :alt="feature.title" class="feature-image">
          </div>
        </div>
      </section>

      <!-- Project Links Section -->
      <section class="links-section">
        <h2 class="section-title">프로젝트 링크</h2>
        <div class="links-content">
          <a v-if="project.links.website" 
             :href="project.links.website" 
             target="_blank" 
             class="project-link website">
            <span class="link-icon">🌐</span>
            <span class="link-text">웹사이트</span>
          </a>
          <a v-if="project.links.github" 
             :href="project.links.github" 
             target="_blank" 
             class="project-link github">
            <span class="link-icon">📦</span>
            <span class="link-text">GitHub</span>
          </a>
          <a v-if="project.links.demo" 
             :href="project.links.demo" 
             target="_blank" 
             class="project-link demo">
            <span class="link-icon">🎥</span>
            <span class="link-text">데모 영상</span>
          </a>
        </div>
      </section>
    </div>
    <div v-else class="error-message">
      <p>프로젝트 정보를 불러올 수 없습니다.</p>
    </div>

    <!-- Navigation Section -->
    <section class="navigation-section">
      <div class="container">
        <div class="nav-links">
          <NuxtLink 
            v-if="prevProject" 
            :to="`/projects/${prevProject.id}`" 
            class="nav-link prev"
            @click="handleNavigation"
          >
            <span class="nav-label">이전 프로젝트</span>
            <span class="nav-title">{{ prevProject.title }}</span>
          </NuxtLink>
          <div v-else class="nav-link prev disabled">
            <span class="nav-label">이전 프로젝트</span>
            <span class="nav-title">없음</span>
          </div>

          <NuxtLink 
            v-if="nextProject" 
            :to="`/projects/${nextProject.id}`" 
            class="nav-link next"
            @click="handleNavigation"
          >
            <span class="nav-label">다음 프로젝트</span>
            <span class="nav-title">{{ nextProject.title }}</span>
          </NuxtLink>
          <div v-else class="nav-link next disabled">
            <span class="nav-label">다음 프로젝트</span>
            <span class="nav-title">없음</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '@/stores/projects';

const route = useRoute();
const projectStore = useProjectStore();
const isLoading = ref(true);
const swiperInstance = ref<any>(null);

const project = computed(() => {
  const projectId = route.params.id as string;
  return projectStore.getProjectById(projectId);
});

const prevProject = computed(() => {
  const currentIndex = projectStore.projects.findIndex(p => p.id === project.value?.id);
  return currentIndex > 0 ? projectStore.projects[currentIndex - 1] : null;
});

const nextProject = computed(() => {
  const currentIndex = projectStore.projects.findIndex(p => p.id === project.value?.id);
  return currentIndex < projectStore.projects.length - 1 ? projectStore.projects[currentIndex + 1] : null;
});

const handleNavigation = () => {
  isLoading.value = true;
};

const initSwiper = async () => {
  if (typeof window === 'undefined') return;
  await nextTick();
  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true);
  }
  const Swiper = (await import('swiper')).default;
  const { Navigation, Pagination } = await import('swiper/modules');
  await import('swiper/css');
  await import('swiper/css/navigation');
  await import('swiper/css/pagination');
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

const handleResize = () => {
  if (swiperInstance.value) {
    swiperInstance.value.update();
  }
};

onMounted(() => {
  if (project.value?.swiperUi && !isLoading.value && project.value) {
    initSwiper();
  }
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

watch(() => isLoading.value, (newValue) => {
  if (project.value?.swiperUi && !newValue && project.value) {
    initSwiper();
  }
});

watch(() => route.params.id, () => {
  isLoading.value = true;
  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
}, { immediate: true });
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
.project-detail {
  min-height: 100vh;
  background: v.$bg-color;
  color: #fff;

  .container {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1.25rem;
  }

  .hero-section {
    padding: 6rem 0 0;
    border-bottom: 0.0625rem solid rgba(255,255,255,0.1);

    .project-header {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .project-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 2rem;
        font-family: v.$font-en5;
      }
      
      .project-info {
        display: flex;
        justify-content: space-between;
      }
      .project-category {
        font-size: 1.2rem;
        color: #bbb;
        margin-bottom: 0;
      }

      .project-meta {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
        color: #888;
        font-size: 1rem;
      }
    }
  }

  .description-section {
    padding: 4rem 0;
    border-bottom: 0.0625rem solid rgba(255,255,255,0.1);
    @include mobile {
      padding: 2rem 0;
    }
    .description {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #ddd;
      text-align: left;
    }
  }

  .gallery-section {
    position: relative;
    padding-bottom: 4rem;
    
    .swiper-container {
      width: 100%;
      padding: 2rem 0;
    }

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
      @include mobile {
        bottom: 2.5rem;
      }

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

    @media (max-width: 48rem) {
      .swiper-button-next,
      .swiper-button-prev {
        display: none !important;
      }
    }
  }

  .details-section {
    padding: 4rem 0;
    border-top: 0.0625rem solid rgba(255,255,255,0.1);

    .detail-item {
      width: 100%;
      background-color: #222;

      .detail-row {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        border-bottom: 0.0625rem solid rgba(255,255,255,0.1);

        &:last-child {
          border-bottom: none;
        }

        .label {
          color: #888;
          font-size: 0.9rem;
        }

        .value {
          color: #fff;
          font-size: 0.9rem;
        }
      }
    }
  }

  .error-message {
    text-align: center;
    padding: 3rem;
    color: #bbb;
    font-size: 1.1rem;
  }
}

.navigation-section {
  padding: 4rem 0;
  border-top: 0.0625rem solid rgba(255,255,255,0.1);
  background-color: v.$bg-color;

  .nav-links {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .nav-link {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      background-color: #222;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      text-decoration: none;
      color: #fff;

      &:hover:not(.disabled) {
        background-color: #333;
      }

      &.prev {
        text-align: left;
      }

      &.next {
        text-align: right;
      }

      &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .nav-label {
        font-size: 0.9rem;
        color: #888;
        margin-bottom: 0.5rem;
      }

      .nav-title {
        font-size: 1.1rem;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 48rem) {
  .project-detail {
    .hero-section {
      .project-header {
        .project-title {
          font-size: 2rem;
        }

        .project-meta {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }

    .gallery-section {
      .swiper-container {
        .swiper-slide {
          width: 100%;
        }
      }
    }
  }

  .navigation-section {
    .nav-links {
      flex-direction: column;
      gap: 1rem;

      .nav-link {
        &.next {
          text-align: left;
        }
      }
    }
  }
}

// Skeleton styles
.skeleton-title {
  height: 3rem;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  width: 80%;
}

.skeleton-category {
  height: 1.2rem;
  width: 8rem;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
}

.skeleton-meta {
  height: 1rem;
  width: 6rem;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
}

.skeleton-description {
  height: 6rem;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
}

.skeleton-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
}

.skeleton-label {
  height: 0.9rem;
  width: 4rem;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
}

.skeleton-value {
  height: 0.9rem;
  width: 6rem;
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: v.$font-en5;
}

.overview-section {
  padding: 4rem 0;
  border-bottom: 0.0625rem solid rgba(255,255,255,0.1);

  .overview-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .overview-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .label {
        font-size: 0.9rem;
        color: #888;
      }

      .value {
        font-size: 1.1rem;
        color: #fff;
      }

      &.goals {
        grid-column: 1 \/ -1;

        .goals-list {
          list-style: disc;
          padding-left: 1.5rem;
          color: #fff;

          li {
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

.tech-section {
  padding: 4rem 0;
  border-bottom: 0.0625rem solid rgba(255,255,255,0.1);

  .tech-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .tech-category {
      h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #fff;
      }

      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tech-tag {
          padding: 0.5rem 1rem;
          background-color: #222;
          border-radius: 2rem;
          font-size: 0.9rem;
          color: #fff;
        }
      }
    }
  }
}

.features-section {
  padding: 4rem 0;
  border-bottom: 0.0625rem solid rgba(255,255,255,0.1);

  .features-content {
    display: grid;
    gap: 3rem;

    .feature-item {
      .feature-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
      }

      .feature-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #ddd;
        margin-bottom: 1.5rem;
      }

      .feature-image {
        width: 100%;
        border-radius: 0.5rem;
      }
    }
  }
}

.links-section {
  padding: 4rem 0;
  border-bottom: 0.0625rem solid rgba(255,255,255,0.1);

  .links-content {
    display: flex;
    gap: 1rem;

    .project-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      background-color: #222;
      border-radius: 0.5rem;
      text-decoration: none;
      color: #fff;
      transition: all 0.3s ease;

      &:hover {
        background-color: #333;
      }

      .link-icon {
        font-size: 1.2rem;
      }

      .link-text {
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 48rem) {
  .overview-section {
    .overview-content {
      grid-template-columns: 1fr;
    }
  }

  .tech-section {
    .tech-content {
      grid-template-columns: 1fr;
    }
  }

  .links-section {
    .links-content {
      flex-direction: column;
    }
  }
}

.contact-section {
  background: linear-gradient(135deg, #181818 60%, #232323 100%);
  padding: 4rem 0;
  margin-top: 4rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.12);
  .contact-container {
    max-width: 32rem;
    margin: 0 auto;
    padding: 2rem;
    background: rgba(30,30,30,0.95);
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
    letter-spacing: 0.02em;
  }
  .contact-desc {
    color: #bbb;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
}

@media (max-width: 48rem) {
  .contact-section {
    padding: 2rem 0;
    .contact-container {
      padding: 1rem;
    }
    .contact-title {
      font-size: 1.5rem;
    }
  }
}
</style>