<template>
  <div ref="cardRef" class="project-card" @click="navigateToProject">
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
    </div>  
    <div class="project-tags" v-if="project.tags && project.tags.length">
      <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.companyDescription }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from 'nuxt/app';
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  companyDescription: string;
  swiperUi: boolean;
  details: {
    size: string;
    material: string;
    year: string;
  }[];
  images: {
    url: string;
    alt: string;
  }[];
  overview: {
    duration: string;
    team: string;
    role: string;
    goals: string[];
  };
  techStack: {
    frontend: string[];
    backend?: string[];
    database?: string[];
    tools: string[];
  };
  features: {
    title: string;
    description: string;
    image?: string;
  }[];
  links: {
    website?: string;
    github?: string;
    demo?: string;
  };
  tags: string[];
}

const props = defineProps<{
  project: Project;
}>();

const cardRef = ref<HTMLElement | null>(null);
let scrollTrigger: ScrollTrigger | null = null;

const navigateToProject = () => {
  navigateTo(`/projects/${props.project.id}`);
};

// 애니메이션 초기화 함수
const initializeAnimation = () => {
  if (!cardRef.value) return;

  // GSAP 플러그인 등록
  gsap.registerPlugin(ScrollTrigger);

  // 초기 상태 설정
  gsap.set(cardRef.value, {
    y: 60,
    opacity: 0,
    scale: 0.95
  });

  // 스크롤 트리거 애니메이션
  scrollTrigger = ScrollTrigger.create({
    trigger: cardRef.value,
    start: 'top bottom-=100',
    end: 'bottom top+=100',
    onEnter: () => {
      gsap.to(cardRef.value, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1
      });
    },
    onLeave: () => {
      gsap.to(cardRef.value, {
        y: -30,
        opacity: 0.7,
        scale: 0.98,
        duration: 0.4,
        ease: 'power2.in'
      });
    },
    onEnterBack: () => {
      gsap.to(cardRef.value, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    },
    onLeaveBack: () => {
      gsap.to(cardRef.value, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.in'
      });
    }
  });
};

// 컴포넌트 마운트 시 애니메이션 초기화
onMounted(() => {
  // DOM이 렌더링된 후 애니메이션 설정
  setTimeout(() => {
    initializeAnimation();
  }, 100);
});

// 컴포넌트 언마운트 시 정리
onUnmounted(() => {
  if (scrollTrigger) {
    scrollTrigger.kill();
    scrollTrigger = null;
  }
});
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  
  .project-card {
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: rem(8);
    overflow: hidden;
    box-shadow: 0 rem(2) rem(8) rgba(0, 0, 0, 0.1);
    will-change: transform, opacity;
    
    &:hover {
      transform: translateY(-rem(4));
      box-shadow: 0 rem(4) rem(16) rgba(0, 0, 0, 0.2);
    }

    .project-image {
      width: 100%;
      height: rem(250);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }
    
    &:hover .project-image img {
      transform: scale(1.05);
    }

    .project-tags {
      display: flex;
      gap: rem(8);
      flex-wrap: wrap;
      margin: rem(16) 0;
      
      .project-tag {
        display: inline-block;
        background: transparent;
        color: #fff;
        font-size: rem(12);
        font-weight: 600;
        padding: rem(4) rem(14);
        font-family: v.$font-en1;
        letter-spacing: 0.01em;
        white-space: nowrap;
        background: #363636;
        color: #fff;
        border-radius: rem(4);
        transition: background-color 0.3s ease;
        
        &:hover {
          background: #555;
        }
      }
    }
    
    .project-info {
      padding: 0 rem(14);
      
      .project-title {
        font-size: rem(19);
        font-weight: 600;
        margin: 0 0 rem(8) 0;
        color: #fff;
        font-family: v.$font-en3;
        transition: color 0.3s ease;
        
        @include mobile {
          font-size: rem(16);
        }
      }
      
      .project-description {
        font-size: rem(14);
        color: #bbb;
        margin: 0;
        line-height: 1.5;
        transition: color 0.3s ease;
      }
    }
    
    &:hover {
      .project-title {
        color: #fff;
      }
      
      .project-description {
        color: #ddd;
      }
    }
  }
</style> 