<template>
  <div class="project-card" @click="navigateToProject">
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

const navigateToProject = () => {
  navigateTo(`/projects/${props.project.id}`);
};
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

    .project-image {
      width: 100%;
      height: rem(250);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
        @include mobile {
          font-size: rem(16);
        }
      }
      .project-description {
        font-size: rem(14);
        color: #bbb;
        margin: 0;
        line-height: 1.5;
      }
    }
  }
</style> 