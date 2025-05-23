<template>
  <div class="project-card" @click="navigateToProject">
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-category">{{ project.category }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

const props = defineProps<{
  project: Project;
}>();

const navigateToProject = () => {
  // Add navigation logic here
};
</script>

<style scoped>
.project-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  background: #fff;
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

/* .project-card:hover .project-image img {
  transform: scale(1.05);
} */

.project-info {
  padding: 20px;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
}

.project-category {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}
</style> 