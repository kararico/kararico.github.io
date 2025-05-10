<template>
  <section class="experience-section">
    <div class="container">
      <h2 class="section-title">전문 분야</h2>
      <div class="experience-content">
        <div class="experience-text">
          <p class="experience-description">
            웹 표준과 접근성을 준수하며, 사용자 경험을 최우선으로 하는 퍼블리싱을 제공합니다.
          </p>
          <div class="experience-features">
            <div class="feature">
              <i class="fas fa-code"></i>
              <span>시맨틱 마크업</span>
            </div>
            <div class="feature">
              <i class="fas fa-mobile-alt"></i>
              <span>반응형 웹</span>
            </div>
            <div class="feature">
              <i class="fas fa-universal-access"></i>
              <span>웹 접근성</span>
            </div>
          </div>
        </div>
        <div class="experience-stats">
          <div class="stat-item">
            <span class="stat-number">20+</span>
            <span class="stat-label">퍼블리싱 작업</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">웹 표준 준수</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">AA</span>
            <span class="stat-label">접근성 등급</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = ref([
  {
    company: 'Creative Studio',
    period: '2020 - Present',
    position: 'Senior Frontend Developer',
    details: [
      'Led development of multiple high-profile client projects',
      'Implemented modern frontend architectures and best practices',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    company: 'Digital Agency',
    period: '2018 - 2020',
    position: 'Frontend Developer',
    details: [
      'Developed responsive web applications using Vue.js',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Optimized website performance and user experience'
    ]
  },
  {
    company: 'Tech Startup',
    period: '2016 - 2018',
    position: 'Junior Developer',
    details: [
      'Built and maintained client websites',
      'Worked with various CMS platforms',
      'Implemented responsive designs and animations'
    ]
  }
]);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.experience-section {
  padding: $spacing-xxl 0;
  background: $color-background;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
  margin-top: $spacing-xl;
}

.experience-item {
  background: white;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  box-shadow: $shadow-md;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, $color-accent, $color-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;

    &::before {
      opacity: 1;
    }

    .experience-title {
      color: $color-accent;
    }
  }
}

.experience-title {
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
  color: $color-primary;
  margin-bottom: $spacing-md;
  transition: color 0.3s ease;
}

.experience-description {
  color: $color-text-secondary;
  line-height: 1.6;
  margin-bottom: $spacing-lg;
}

.experience-details {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  color: $color-text-secondary;

  i {
    color: $color-accent;
    font-size: 1.2rem;
  }

  strong {
    color: $color-primary;
    font-weight: $font-weight-medium;
  }
}

.experience-features {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.feature {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  color: $color-text-secondary;
  font-size: 1.2rem;

  i {
    color: $color-accent;
    font-size: 1.4rem;
  }
}

.experience-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
  padding: $spacing-lg;
  background: white;
  border-radius: 12px;
  box-shadow: $shadow-sm;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
  }
}

.stat-number {
  font-size: 2.5rem;
  font-weight: $font-weight-bold;
  color: $color-accent;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  color: $color-text-secondary;
  font-weight: $font-weight-medium;
}

@media (max-width: $breakpoint-lg) {
  .experience-content {
    grid-template-columns: 1fr;
    gap: $spacing-xl;
  }

  .experience-stats {
    order: -1;
  }
}

@media (max-width: $breakpoint-md) {
  .experience-description {
    font-size: 1.3rem;
  }

  .feature {
    font-size: 1.1rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}
</style> 