<template>
  <div class="projects-page">
    <div class="container">
      <h1 class="page-title">Projects</h1>
      
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-item">
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </span>
            </div>
            <NuxtLink :to="`/projects/${project.id}`" class="project-link">
              자세히 보기
              <i class="fas fa-arrow-right"></i> 
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

.projects-page {
  padding: $spacing-xxl 0;
  background: $color-background;
  min-height: 100vh;
}

.page-title {
  font-size: 3rem;
  font-weight: $font-weight-bold;
  color: $color-primary;
  margin-bottom: $spacing-xl;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
}

.project-item {
  background: white;
  border-radius: $border-radius-lg;
  overflow: hidden;
  box-shadow: $shadow-md;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;

    .project-title {
      color: $color-accent;
    }
  }
}

.project-image {
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

.project-info {
  padding: $spacing-lg;
}

.project-title {
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
  color: $color-primary;
  margin-bottom: $spacing-sm;
  transition: color 0.3s ease;
}

.project-description {
  color: $color-text-secondary;
  margin-bottom: $spacing-md;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-xs;
  margin-bottom: $spacing-md;
}

.tag {
  padding: 4px 12px;
  background: rgba($color-accent, 0.1);
  color: $color-accent;
  border-radius: $border-radius-full;
  font-size: 0.875rem;
  font-weight: $font-weight-medium;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: $spacing-xs;
  color: $color-accent;
  font-weight: $font-weight-medium;
  text-decoration: none;
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

@media (max-width: $breakpoint-md) {
  .page-title {
    font-size: 2.5rem;
  }
}
</style> 