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
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* .project-card:hover {
  transform: translateY(-5px);
} */

.project-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  padding: 20px;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #fff;
}

.project-category {
  font-size: 0.9rem;
  color: #fff;
  margin: 0;
}

.project-period {
  font-size: 0.85rem;
  color: #bbb;
  margin: 0.3em 0 0 0;
}
</style> 