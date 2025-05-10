<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">About Me</h1> 
      
      <div class="about-content">
        <div class="about-section">
          <h2 class="section-title">Profile</h2>
          <div class="profile-content">
            <div class="profile-image">
              <!-- <img src="/images/profile.jpg" alt="Profile Image"> -->
            </div>
            <div class="profile-info">
              <h3>Web Publisher</h3>
              <p class="profile-description">
                웹 표준과 접근성을 준수하는 퍼블리싱을 제공합니다.<br>
                사용자 경험을 최우선으로 생각하며, 반응형 웹 디자인을 구현합니다.
              </p>
              <div class="profile-details">
                <div class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Seoul, South Korea</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-envelope"></i>
                  <span>contact@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2 class="section-title">Skills</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <i class="fab fa-html5"></i>
              <h3>HTML5</h3>
              <p>시맨틱 마크업</p>
            </div>
            <div class="skill-item">
              <i class="fab fa-css3-alt"></i>
              <h3>CSS3</h3>
              <p>반응형 웹 디자인</p>
            </div>
            <div class="skill-item">
              <i class="fab fa-js"></i>
              <h3>JavaScript</h3>
              <p>인터랙티브 기능</p>
            </div>
            <div class="skill-item">
              <i class="fab fa-sass"></i>
              <h3>SCSS</h3>
              <p>스타일 모듈화</p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2 class="section-title">Experience</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">2023</div>
              <div class="timeline-content">
                <h3>금융권 웹사이트 퍼블리싱</h3>
                <p>웹 접근성과 웹 표준을 준수한 금융권 웹사이트 퍼블리싱</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2022</div>
              <div class="timeline-content">
                <h3>쇼핑몰 메인 페이지</h3>
                <p>반응형 웹 디자인이 적용된 쇼핑몰 메인 페이지 퍼블리싱</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2021</div>
              <div class="timeline-content">
                <h3>기업 홈페이지</h3>
                <p>시맨틱 마크업이 적용된 기업 홈페이지 퍼블리싱</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.about-page {
  padding: $spacing-xxl 0;
  background: $color-background;
  min-height: 100vh;
}

.page-title {
  font-size: 3rem;
  font-weight: $font-weight-bold;
  color: $color-primary;
  margin-bottom: $spacing-xl;
  text-align: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-xxl;
}

.about-section {
  background: white;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  box-shadow: $shadow-md;
}

.section-title {
  font-size: 2rem;
  font-weight: $font-weight-bold;
  color: $color-primary;
  margin-bottom: $spacing-xl;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: $color-accent;
    border-radius: $border-radius-full;
  }
}

.profile-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: $spacing-xl;
  align-items: center;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.profile-image {
  img {
    width: 100%;
    height: auto;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-lg;
  }
}

.profile-info {
  h3 {
    font-size: 2rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-md;
  }
}

.profile-description {
  font-size: 1.2rem;
  color: $color-text-secondary;
  line-height: 1.8;
  margin-bottom: $spacing-lg;
}

.profile-details {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  color: $color-text-secondary;
  font-size: 1.1rem;

  i {
    color: $color-accent;
    font-size: 1.2rem;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-lg;
}

.skill-item {
  text-align: center;
  padding: $spacing-lg;
  background: rgba($color-accent, 0.05);
  border-radius: $border-radius-lg;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba($color-accent, 0.1);
  }

  i {
    font-size: 3rem;
    color: $color-accent;
    margin-bottom: $spacing-md;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-xs;
  }

  p {
    color: $color-text-secondary;
  }
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 120px;
    width: 2px;
    height: 100%;
    background: rgba($color-accent, 0.2);

    @media (max-width: $breakpoint-md) {
      left: 20px;
    }
  }
}

.timeline-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: $spacing-xl;
  position: relative;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 60px 1fr;
    gap: $spacing-lg;
  }
}

.timeline-date {
  font-size: 1.2rem;
  font-weight: $font-weight-bold;
  color: $color-accent;
  text-align: right;

  @media (max-width: $breakpoint-md) {
    font-size: 1rem;
  }
}

.timeline-content {
  h3 {
    font-size: 1.3rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-xs;
  }

  p {
    color: $color-text-secondary;
    line-height: 1.6;
  }
}

@media (max-width: $breakpoint-md) {
  .page-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .profile-description {
    font-size: 1.1rem;
  }
}
</style> 