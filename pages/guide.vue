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
  max-width: rem(900);
  margin: 0 auto;
  padding: rem(32) rem(24);
}

.section-title {
  margin-bottom: rem(8);
  font-size: rem(35);
  font-weight: 800;
  color: v.$main-color;
}
.section-subtitle {
  margin-bottom: rem(40);
  color: v.$txt-sub-color;
  font-size: rem(18);
}

.guide-section {
  background: #23262b;
  border-radius: rem(20);
  box-shadow: 0 rem(2) rem(16) 0 rgba(0,0,0,0.06);
  padding: rem(40) rem(32) rem(32) rem(32);
  margin-bottom: rem(40);
  border: rem(1) solid #222;
  position: relative;
  transition: box-shadow 0.2s;
  color: #fff;
  
  &:not(:last-child)::after {
    content: '';
    display: block;
    position: absolute;
    left: rem(32);
    right: rem(32);
    bottom: rem(-20);
    height: rem(1);
    background: linear-gradient(90deg, #23262b 0%, #181a1e 100%);
    opacity: 0.7;
  }
}

.guide-title {
  font-size: rem(21);
  font-weight: 700;
  margin-bottom: rem(24);
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
  gap: rem(32);
  margin-bottom: rem(16);
}
.color-sample {
  width: rem(80);
  height: rem(80);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: rem(13);
  font-weight: 600;
  box-shadow: 0 rem(2) rem(8) rgba(0,0,0,0.08);
  border: rem(2) solid #fff;
}

.ui-samples {
  display: flex;
  align-items: flex-end;
  gap: rem(24);
  flex-wrap: wrap;
  margin-bottom: rem(24);
}
.btn {
  @extend .btn;
}
.link {
  color: #2F70C6;
  text-decoration: underline;
  font-weight: 500;
  font-size: rem(16);
}
.input {
  padding: rem(8) rem(16);
  border: rem(1) solid #ccc;
  border-radius: rem(8);
  font-size: rem(16);
  outline: none;
  min-width: rem(120);
}
.card {
  background: #181a1e;
  border-radius: rem(16);
  box-shadow: 0 rem(2) rem(8) 0 rgba(0,0,0,0.06);
  padding: rem(24) rem(20);
  min-width: rem(168);
  max-width: rem(240);
  .card-title {
    font-size: rem(18);
    font-weight: 700;
    margin-bottom: rem(8);
  }
  .card-desc {
    font-size: rem(15);
    color: v.$text-muted;
    margin-bottom: rem(12);
  }
  .card-content {
    background: #f5f5f5;
    border-radius: rem(8);
    min-height: rem(48);
    padding: rem(8);
    font-size: rem(15);
    color: #333;
  }
}

.layout-samples {
  .row {
    display: flex;
    gap: rem(24);
    margin-bottom: rem(24);
  }
  .col {
    flex: 1;
    min-width: 0;
  }
  .box {
    background: #f5f5f5;
    border-radius: rem(12);
    border: rem(1) solid #e0e0e0;
    height: rem(72);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: rem(16);
    color: #333;
    font-weight: 500;
  }
  .mt-3 { margin-top: rem(24); }
}

@media (max-width: 900px) {
  .container {
    padding: rem(16) rem(8);
  }
  .guide-section {
    padding: rem(24) rem(16) rem(16) rem(16);
  }
  .color-palette {
    gap: rem(16);
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