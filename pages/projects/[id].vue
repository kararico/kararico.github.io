<template>
  <div class="project-detail-page">
    <div class="container">
      <div class="project-header">
        <NuxtLink to="/projects/project" class="back-link"> 
          <i class="fas fa-arrow-left"></i>
          프로젝트 목록으로
        </NuxtLink>
        <h1 class="project-title">{{ project.title }}</h1>
        <div class="project-meta">
          <span class="project-date">{{ project.date }}</span>
          <div class="project-tags">
            <span v-for="(tag, index) in project.tags" :key="index" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="project-content">
        <div class="project-gallery">
          <img :src="project.mainImage" :alt="project.title" class="main-image">
          <div class="thumbnail-grid" v-if="project.images && project.images.length > 0">
            <img 
              v-for="(image, index) in project.images" 
              :key="index" 
              :src="image" 
              :alt="`${project.title} - 이미지 ${index + 1}`"
              class="thumbnail"
              @click="selectedImage = image"
            >
          </div>
        </div>

        <div class="project-info">
          <section class="info-section">
            <h2>프로젝트 개요</h2>
            <p>{{ project.description }}</p>
          </section>

          <section class="info-section">
            <h2>주요 기능</h2>
            <ul class="feature-list">
              <li v-for="(feature, index) in project.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </section>

          <section class="info-section">
            <h2>사용 기술</h2>
            <div class="tech-stack">
              <div v-for="(tech, index) in project.technologies" :key="index" class="tech-item">
                <i :class="tech.icon"></i>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </section>

          <section class="info-section" v-if="project.challenges">
            <h2>주요 도전 과제</h2>
            <ul class="challenge-list">
              <li v-for="(challenge, index) in project.challenges" :key="index">
                <h3>{{ challenge.title }}</h3>
                <p>{{ challenge.description }}</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'nuxt/app';
// import finance from '/images/portfolio/finance.jpg';
// import shopping from '/images/portfolio/shopping.jpg';
// import corporate from '/images/portfolio/corporate.jpg';
 
const route = useRoute();
const projectId = ref(route.params.id);

// 프로젝트 데이터 목록
const projectsData = {
  finance: {
    title: '금융권 웹사이트',
    date: '2024.01',
    description: '웹 접근성과 웹 표준을 준수한 금융권 웹사이트 퍼블리싱 프로젝트입니다. 사용자 경험을 최우선으로 고려하여 설계되었으며, 모든 사용자가 쉽게 이용할 수 있도록 접근성을 높였습니다.',
    mainImage: "",
    images: [
      // '/images/portfolio/finance-detail1.jpg',
    //   '/images/portfolio/finance-detail2.jpg',
    //   '/images/portfolio/finance-detail3.jpg'
    ],
    tags: ['HTML5', 'CSS3', '웹접근성', '반응형'],
    features: [
      '웹 접근성 지침 준수 (WCAG 2.1)',
      '반응형 웹 디자인 구현',
      '크로스 브라우징 지원',
      '시맨틱 마크업 적용',
      '성능 최적화'
    ],
    technologies: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'SCSS', icon: 'fab fa-sass' }
    ],
    challenges: [
      {
        title: '웹 접근성 구현',
        description: '스크린 리더 사용자를 위한 ARIA 레이블 적용 및 키보드 네비게이션 구현'
      },
      {
        title: '성능 최적화',
        description: '이미지 최적화 및 코드 스플리팅을 통한 페이지 로딩 속도 개선'
      }
    ]
  },
  shopping: {
    title: '쇼핑몰 메인',
    date: '2024.02',
    description: '반응형 웹 디자인이 적용된 쇼핑몰 메인 페이지 퍼블리싱 프로젝트입니다. 모바일 사용자를 고려한 UI/UX 설계와 빠른 페이지 로딩을 구현했습니다.',
    mainImage: "",
    images: [
      // '/images/portfolio/shopping-detail1.jpg',
    //   '/images/portfolio/shopping-detail2.jpg'
    ],
    tags: ['반응형', 'SCSS', 'JavaScript'],
    features: [
      '모바일 퍼스트 반응형 디자인',
      '이미지 레이지 로딩 구현',
      '인터랙티브 UI 컴포넌트',
      '성능 최적화'
    ],
    technologies: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'SCSS', icon: 'fab fa-sass' },
      { name: 'JavaScript', icon: 'fab fa-js' }
    ],
    challenges: [
      {
        title: '모바일 최적화',
        description: '다양한 디바이스에서의 최적화된 사용자 경험 구현'
      },
      {
        title: '성능 개선',
        description: '이미지 최적화와 레이지 로딩을 통한 페이지 로딩 속도 개선'
      }
    ]
  },
  corporate: {
    title: '기업 홈페이지',
    date: '2024.03',
    description: '시맨틱 마크업이 적용된 기업 홈페이지 퍼블리싱 프로젝트입니다. 검색 엔진 최적화(SEO)와 접근성을 고려한 설계를 구현했습니다.',
    mainImage: "",
    images: [
      // '/images/portfolio/corporate-detail1.jpg',
    //   '/images/portfolio/corporate-detail2.jpg'
    ],
    tags: ['시맨틱', 'CSS3', 'jQuery'],
    features: [
      '시맨틱 마크업 구조',
      'SEO 최적화',
      '크로스 브라우징 지원',
      'jQuery 인터랙션'
    ],
    technologies: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'jQuery', icon: 'fab fa-js' }
    ],
    challenges: [
      {
        title: 'SEO 최적화',
        description: '검색 엔진 최적화를 위한 시맨틱 마크업 구조 설계'
      },
      {
        title: '브라우저 호환성',
        description: '다양한 브라우저에서의 일관된 디자인과 기능 구현'
      }
    ]
  }
};

// 현재 프로젝트 ID에 해당하는 데이터 가져오기
const project = ref(projectsData[projectId.value as keyof typeof projectsData]);

// 프로젝트가 존재하지 않는 경우 404 페이지로 리다이렉트
if (!project.value) {
  navigateTo('/404');
}

const selectedImage = ref(project.value.mainImage);

// 라우트 파라미터(id)가 바뀔 때마다 project 데이터 갱신
watch(
  () => route.params.id,
  (newId) => {
    project.value = projectsData[newId as keyof typeof projectsData];
    if (!project.value) {
      navigateTo('/404');
    }
    selectedImage.value = project.value.mainImage;
  }
);
</script>

<style lang="scss" scoped>

</style> 