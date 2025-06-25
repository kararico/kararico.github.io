<template>
  <div class="error-page">
    <div class="error-content">
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <NuxtLink to="/" class="home-link">
        홈으로 돌아가기
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

// 404 에러 상태 설정
setResponseStatus(404)
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem;
}

.error-content {
  max-width: 600px;
}

.error-content h1 {
  font-size: 8rem;
  margin: 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.error-content h2 {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 300;
}

.error-content p {
  font-size: 1.2rem;
  margin: 2rem 0;
  opacity: 0.9;
}

.home-link {
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.home-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .error-content h1 {
    font-size: 6rem;
  }
  
  .error-content h2 {
    font-size: 1.5rem;
  }
  
  .error-content p {
    font-size: 1rem;
  }
}
</style> 