<template>
  <div class="guide-page">
    <div class="container">
      <h1 class="section-title">Design System Guide</h1>
      <p class="section-subtitle">공통 스타일 기반 UI 가이드</p>

      <!-- Typography -->
      <section class="guide-section">
        <h2 class="guide-title">Typography</h2>
        <div class="typography-samples">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <p>Body Text - 본문 예시입니다. 디자인 시스템의 기본 텍스트 스타일을 확인하세요.</p>
          <span class="text-muted">Muted Text</span>
        </div>
      </section>

      <!-- Color Palette -->
      <section class="guide-section">
        <h2 class="guide-title">Color Palette</h2>
        <div class="color-palette">
          <div class="color-sample" style="background:#2F70C6"><span>#2F70C6</span></div>
          <div class="color-sample" style="background:#339333"><span>#339333</span></div>
          <div class="color-sample" style="background:#666666"><span>#666666</span></div>
          <div class="color-sample" style="background:#E0E000"><span>#E0E000</span></div>
        </div>
      </section>

      <!-- UI Components -->
      <section class="guide-section">
        <h2 class="guide-title">UI Components</h2>
        <div class="ui-samples">
          <button class="btn">Button</button>
          <a href="#" class="link">Link</a>
          <input class="input" type="text" placeholder="Input" />
          <div class="card">
            <div class="card-title">Card Title</div>
            <div class="card-desc">Card description text</div>
            <div class="card-content">Card Content Area</div>
          </div>
        </div>
      </section>

      <!-- Spacing & Layout -->
      <section class="guide-section">
        <h2 class="guide-title">Spacing & Layout</h2>
        <div class="layout-samples">
          <div class="row">
            <div class="col box">168px</div>
            <div class="col box">168px</div>
            <div class="col box">168px</div>
          </div>
          <div class="row mt-3">
            <div class="col box" style="height: 168px;">Box</div>
            <div class="col box" style="height: 168px;">Box</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 가이드 페이지는 별도의 로직 없이 스타일 샘플만 제공합니다.
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_common' as *;

.guide-page {
  padding: 4rem 0;
  min-height: 100vh;
  background: v.$bg-color;
  color: #222;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.section-title {
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
  font-weight: 800;
  color: v.$main-color;
}
.section-subtitle {
  margin-bottom: 2.5rem;
  color: v.$txt-sub-color;
  font-size: 1.1rem;
}

.guide-section {
  background: #23262b;
  border-radius: 1.25rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.06);
  padding: 2.5rem 2rem 2rem 2rem;
  margin-bottom: 2.5rem;
  border: 1px solid #222;
  position: relative;
  transition: box-shadow 0.2s;
  color: #fff;
  
  &:not(:last-child)::after {
    content: '';
    display: block;
    position: absolute;
    left: 2rem;
    right: 2rem;
    bottom: -1.25rem;
    height: 1px;
    background: linear-gradient(90deg, #23262b 0%, #181a1e 100%);
    opacity: 0.7;
  }
}

.guide-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: v.$main-color;
  letter-spacing: -0.01em;
}

.typography-samples h1,
.typography-samples h2,
.typography-samples h3,
.typography-samples h4,
.typography-samples p {
  color: #fff;
}

.typography-samples .text-muted {
  color: v.$text-muted;
  opacity: 0.8;
}

.color-palette {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}
.color-sample {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 2px solid #fff;
}

.ui-samples {
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}
.btn {
  @extend .btn;
}
.link {
  color: #2F70C6;
  text-decoration: underline;
  font-weight: 500;
  font-size: 1rem;
}
.input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  min-width: 120px;
}
.card {
  background: #181a1e;
  border-radius: 1rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
  padding: 1.5rem 1.25rem;
  min-width: 168px;
  max-width: 240px;
  .card-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .card-desc {
    font-size: 0.95rem;
    color: v.$text-muted;
    margin-bottom: 0.75rem;
  }
  .card-content {
    background: #f5f5f5;
    border-radius: 0.5rem;
    min-height: 48px;
    padding: 0.5rem;
    font-size: 0.95rem;
    color: #333;
  }
}

.layout-samples {
  .row {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
  .col {
    flex: 1;
    min-width: 0;
  }
  .box {
    background: #f5f5f5;
    border-radius: 0.75rem;
    border: 1px solid #e0e0e0;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }
  .mt-3 { margin-top: 24px; }
}

@media (max-width: 900px) {
  .container {
    padding: 1rem 0.5rem;
  }
  .guide-section {
    padding: 1.5rem 1rem 1rem 1rem;
  }
  .color-palette {
    gap: 1rem;
  }
}
@media (max-width: 600px) {
  .ui-samples, .color-palette {
    flex-direction: column;
    gap: 1rem;
  }
  .layout-samples .row {
    flex-direction: column;
    gap: 12px;
  }
  .guide-section {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }
}
</style> 