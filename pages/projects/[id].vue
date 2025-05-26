<template>
  <div>
    <h1>프로젝트 상세</h1>
    <div v-if="project">
      <h2>{{ project.title }}</h2>
      <img :src="project.image" alt="" />
      <p>{{ project.category }}</p>
    </div>
    <div v-else>
      <p>프로젝트 정보를 불러올 수 없습니다.</p>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>