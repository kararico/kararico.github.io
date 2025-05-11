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

</style> 