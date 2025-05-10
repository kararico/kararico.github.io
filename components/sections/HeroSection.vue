<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="line">Web</span>
          <span class="line accent">Publisher</span>
        </h1>
        <p class="hero-description">
          <strong>웹 표준</strong>과 <strong>접근성</strong>을 준수하는 퍼블리싱
        </p>
        <div class="hero-features">
          <div class="feature-item">
            <i class="fas fa-code"></i>
            <span>시맨틱 <strong>HTML5</strong> 마크업</span>
          </div>
          <div class="feature-item">
            <i class="fas fa-mobile-alt"></i>
            <span>반응형 <strong>웹 디자인</strong></span>
          </div>
          <div class="feature-item">
            <i class="fas fa-universal-access"></i>
            <span>웹 <strong>접근성</strong> 준수</span>
          </div>
        </div>
        <div class="hero-cta">
          <NuxtLink to="/works" class="btn btn-primary">
            <i class="fas fa-folder-open"></i>
            작업물 보기
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline">
            <i class="fas fa-envelope"></i>
            연락하기
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: $spacing-xxl 0;
  background: $color-background;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba($color-accent, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: clamp(4rem, 10vw, 6rem);
  line-height: 1.1;
  margin-bottom: $spacing-lg;
  color: $color-primary;
  font-weight: $font-weight-bold;

  .line {
    display: inline-block;
    transform: translateY(100%);
    opacity: 0;
    animation: fadeInUp 0.8s forwards;
    
    &.accent {
      color: $color-accent;
    }
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

.hero-description {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: $color-text-secondary;
  margin-bottom: $spacing-xl;
  animation: fadeIn 1s 0.6s forwards;
  opacity: 0;
  line-height: 1.6;

  strong {
    color: $color-accent;
    font-weight: $font-weight-bold;
  }
}

.hero-features {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
  margin-bottom: $spacing-xl;
  animation: fadeIn 1s 0.8s forwards;
  opacity: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  color: $color-text-secondary;
  font-size: 1.2rem;

  i {
    color: $color-accent;
    font-size: 1.4rem;
  }

  strong {
    color: $color-accent;
    font-weight: $font-weight-bold;
  }
}

.hero-cta {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  animation: fadeIn 1s 1s forwards;
  opacity: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  padding: $spacing-md $spacing-xl;
  border-radius: 8px;
  font-weight: $font-weight-medium;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  i {
    font-size: 1.4rem;
  }

  &-primary {
    background: $color-accent;
    color: white;
    box-shadow: 0 4px 15px rgba($color-accent, 0.2);

    &:hover {
      background: darken($color-accent, 10%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba($color-accent, 0.3);
    }
  }

  &-outline {
    border: 2px solid $color-accent;
    color: $color-accent;
    background: transparent;

    &:hover {
      background: $color-accent;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba($color-accent, 0.2);
    }
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: $breakpoint-md) {
  .hero-section {
    padding: $spacing-xl 0;
  }

  .hero-cta {
    flex-direction: column;
    gap: $spacing-sm;
  }

  .btn {
    width: 100%;
    padding: $spacing-md;
  }

  .feature-item {
    font-size: 1.1rem;
  }
}
</style> 