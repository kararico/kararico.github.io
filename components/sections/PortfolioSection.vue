<template>
  <section class="portfolio-section">
    <div class="container">
      <h2 class="section-title">주요 서비스</h2>
      <div class="portfolio-grid">
        <div v-for="(project, index) in projects" :key="index" class="portfolio-item">
          <div class="portfolio-image">
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="portfolio-info">
            <h3 class="portfolio-title">{{ project.title }}</h3>
            <p class="portfolio-description">{{ project.description }}</p>
            <div class="portfolio-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </span>
            </div>
            <NuxtLink :to="`/projects/${project.id}`" class="portfolio-link">
              자세히 보기
              <i class="fas fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import project1Image from '~/assets/images/project1.jpg';
import project2Image from '~/assets/images/project2.jpg';
import project3Image from '~/assets/images/project3.jpg';

const projects = ref([
  {
    title: '금융권 웹사이트',
    description: '웹 접근성과 웹 표준을 준수한 금융권 웹사이트 퍼블리싱',
    image: '/images/portfolio/finance.jpg',
    id: 'finance',
    tags: ['HTML5', 'CSS3', '웹접근성']
  },
  {
    title: '쇼핑몰 메인',
    description: '반응형 웹 디자인이 적용된 쇼핑몰 메인 페이지 퍼블리싱',
    image: '/images/portfolio/shopping.jpg',
    id: 'shopping',
    tags: ['반응형', 'SCSS', 'JavaScript']
  },
  {
    title: '기업 홈페이지',
    description: '시맨틱 마크업이 적용된 기업 홈페이지 퍼블리싱',
    image: '/images/portfolio/corporate.jpg',
    id: 'corporate',
    tags: ['시맨틱', 'CSS3', 'jQuery']
  }
]);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.portfolio-section {
  padding: $spacing-xxl 0; 
  background: $color-background;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
  margin-top: $spacing-xl;
}

.portfolio-item {
  background: white;
  border-radius: $border-radius-lg;
  overflow: hidden;
  box-shadow: $shadow-md;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: $border-radius-lg;
    background: linear-gradient(45deg, $color-accent, $color-primary) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;

    &::before {
      opacity: 1;
    }

    .portfolio-title {
      color: $color-accent;
    }
  }
}

.portfolio-image {
  position: relative;
  padding-top: 66.67%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.portfolio-info {
  padding: $spacing-lg;
}

.portfolio-title {
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
  color: $color-primary;
  margin-bottom: $spacing-sm;
  transition: color 0.3s ease;
}

.portfolio-description {
  color: $color-text-secondary;
  margin-bottom: $spacing-md;
  line-height: 1.6;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-xs;
}

.tag {
  padding: 4px 12px;
  background: rgba($color-accent, 0.1);
  color: $color-accent;
  border-radius: $border-radius-full;
  font-size: 0.875rem;
  font-weight: $font-weight-medium;
  transition: all 0.3s ease;

  &:hover {
    background: $color-accent;
    color: white;
  }
}

.work-date {
  position: absolute;
  top: $spacing-md;
  right: $spacing-md;
  background: rgba($color-primary, 0.9);
  color: white;
  padding: 4px 12px;
  border-radius: $border-radius-full;
  font-size: 0.875rem;
  font-weight: $font-weight-medium;
  backdrop-filter: blur(4px);
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: $spacing-xs;
  color: $color-accent;
  font-weight: $font-weight-medium;
  transition: all 0.3s ease;

  i {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: $color-primary;

    i {
      transform: translateX(5px);
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $breakpoint-md) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style> 