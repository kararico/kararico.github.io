<template>
  <div class="project-card" @click="navigateToProject">
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-category">{{ project.category }}</p>
      <p class="project-period">제작기간: {{ project.period }}</p>
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
  period: string;
}

const props = defineProps<{
  project: Project;
}>();

const navigateToProject = () => {
  navigateTo(`/projects/${props.project.id}`);
};
</script>

<style scoped>
.project-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: rem(8);
  overflow: hidden;
  box-shadow: 0 rem(2) rem(8) rgba(0, 0, 0, 0.1);
}

/* .project-card:hover {
  transform: translateY(-5px);
} */

.project-image {
  width: 100%;
  height: rem(250);
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  padding: rem(20);
}

.project-title {
  font-size: rem(19);
  font-weight: 600;
  margin: 0 0 rem(8) 0;
  color: #fff;
}

.project-category {
  font-size: rem(14);
  color: #fff;
  margin: 0;
}

.project-period {
  font-size: rem(14);
  color: #bbb;
  margin: rem(5) 0 0 0;
}
</style> 