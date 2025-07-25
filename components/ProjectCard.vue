<template>
  <div ref="cardRef" class="project-card" @click="handleCardClick">
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
      <div class="project-tags" v-if="project.tags && project.tags.length">
        <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
      </div>
    </div>  
   
    <div class="project-info">
      <h3 class="project-title">
        <span>{{ project.companyName }}</span>/<span>{{ project.year }}</span>/<span>{{ project.websiteType }}</span>
      </h3>
      <p class="project-description">{{ project.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  companyDescription: string;
  companyName: string;
  websiteType: string;
  swipermode: boolean;
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

// 카드 클릭 핸들러
const handleCardClick = () => {
  const website = props.project.links?.website;
  
  if (website && website.trim() !== '') {
    // 웹사이트 링크가 있으면 새창에서 열기
    window.open(website, '_blank', 'noopener,noreferrer');
  } else {
    // 웹사이트 링크가 없거나 빈 값이면 부드러운 얼럿 표시
    alert('이 프로젝트는 비공개로 설정되어 있어 웹사이트를 제공하지 않습니다.');
  }
};

// 링크 텍스트 반환
const getLinkText = () => {
  const website = props.project.links?.website;
  return website && website.trim() !== '' ? '웹사이트 방문' : '비공개 프로젝트';
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
      position: relative;
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
      position: absolute;
      bottom: rem(4);
      left: rem(8);
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
      padding: rem(20) rem(14);
      .project-title {
        display: flex;
        align-items: center;
        gap: rem(8);
        font-size: rem(19);
        font-weight: 600;
        margin: 0 0 rem(8) 0;
        color: #fff;
        font-family: v.$font-en3;
        transition: color 0.3s ease;
        @include mobile {
          gap: rem(4);
        }
        span{
          font-size: rem(19);
          font-weight: 600;
          color: #fff;
          font-family: v.$font-kn2;
          @include mobile {
            font-size: rem(20);
          }
        }
    
      }
      
      .project-description {
        font-size: rem(14);
        color: #dbdbdb;
        margin: 0 0 rem(12) 0;
        line-height: 1.5;
        transition: color 0.3s ease;
        @include mobile {
          font-size: rem(16);
        }
      }

      .project-links {
        margin-top: rem(12);
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: rem(6);
          color: #667eea;
          font-size: rem(13);
          font-weight: 500;
          text-decoration: none;
          padding: rem(6) rem(12);
          border-radius: rem(4);
          background: rgba(102, 126, 234, 0.1);
          transition: all 0.3s ease;
          
          &:hover {
            background: rgba(102, 126, 234, 0.2);
            color: #7c8ff5;
            transform: translateX(rem(2));
          }
          
          svg {
            transition: transform 0.3s ease;
          }
          
          &:hover svg {
            transform: translate(rem(2), rem(-2));
          }
        }
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