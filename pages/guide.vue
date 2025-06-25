<template>
  <div class="guide-page">
    <div class="container">
      <h1 class="section-title">Design System Guide</h1>
      <p class="section-subtitle">공통 스타일 기반 UI 가이드</p>

      <!-- Typography -->
      <section class="guide-section">
        <h2 class="guide-title">Typography Font Size </h2>
        <div class="typography-samples">
          <h1>Heading 1 (32px)</h1>
          <h2>Heading 2 (24px)</h2>
          <h3>Heading 3 (20px)</h3>
          <h4>Heading 4 (18px)</h4>
        </div>
      </section>

      <section class="guide-section">
        <h2 class="guide-title">Typography Font-family</h2>
        <div class="typography-samples">
          <p>국문</p>
          <h1 class="kn1">프렌다드 폰트</h1>
          <h1 class="kn2">노토산스 KR</h1>
          <h1 class="kn3">G마켓 산스</h1>
        </div>
        <div class="typography-samples">
          <p>영문</p>
          <h1 class="en1">Zephyr</h1>
          <h1 class="en2">Fahkwang</h1>
          <h1 class="en3">Playfair Display</h1>
          <h1 class="en4">Kaushan Script</h1>
        </div>
      </section>

      <!-- <span class="text-muted">Muted Text</span -->
      <!-- Color Palette -->
      <section class="guide-section">
        <h2 class="guide-title">Color Palette</h2>
        <div class="color-palette">
          <div class="color-sample"><span>#2F70C6</span></div>
          <div class="color-sample"><span>#339333</span></div>
          <div class="color-sample"><span>#666666</span></div>
          <div class="color-sample"><span>#E0E000</span></div>
          <div class="color-sample"><span>#111111</span></div>
          <div class="color-sample"><span>#222222</span></div>
          <div class="color-sample"><span>#333333</span></div>
          <div class="color-sample"><span>#444444</span></div>
          <div class="color-sample"><span>#555555</span></div>
          <div class="color-sample"><span>#666666</span></div>
          <div class="color-sample"><span>#777777</span></div>
        </div>
      </section>

      <!-- UI Components -->
      <section class="guide-section">
        <h2 class="guide-title">UI Components</h2>
        
        <!-- Buttons -->
        <div class="component-area">
          <h3 class="component-title">Buttons</h3>
          <div class="component-samples">
            <button class="btn">Button</button>
            <button class="btn btn--primary">Primary Button</button>
            <button class="btn btn--secondary">Secondary Button</button>
            <button class="btn btn--outline">Outline Button</button>
          </div>
        </div>

        <!-- Links -->
        <div class="component-area">
          <h3 class="component-title">Links</h3>
          <div class="component-samples">
            <a href="#" class="link">Default Link</a>
            <a href="#" class="link link--primary">Primary Link</a>
            <a href="#" class="link link--underline">Underline Link</a>
          </div>
        </div>

        <!-- Inputs -->
        <div class="component-area">
          <h3 class="component-title">Inputs</h3>
          <div class="component-samples">
            <input class="input" type="text" placeholder="Default Input" />
            <input class="input input--search" type="text" placeholder="Search Input" />
            <input class="input input--error" type="text" placeholder="Error Input" />
          </div>
        </div>

        <!-- Cards -->
        <div class="component-area">
          <h3 class="component-title">Cards</h3>
          <div class="component-samples">
            <div class="card">
              <div class="card-title">Default Card</div>
              <div class="card-desc">Card description text</div>
              <div class="card-content">Card Content Area</div>
            </div>
            <div class="card card--shadow">
              <div class="card-title">Shadow Card</div>
              <div class="card-desc">Card with shadow effect</div>
              <div class="card-content">Card Content Area</div>
            </div>
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
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '#imports'
import { usePageScroll } from '@/composables/usePageScroll'

// 스크롤 위치 관리 훅 추가
const { onPageEnter, onPageLeave } = usePageScroll()

useHead({
  title: 'Design System Guide | 정원 포트폴리오',
  meta: [
    { name: 'description', content: '정원 포트폴리오의 디자인 시스템 가이드입니다.' }
  ]
})

onMounted(() => {
  // 페이지 진입 시 스크롤 위치 복원
  onPageEnter()
})

onUnmounted(() => {
  // 페이지 이탈 시 스크롤 위치 저장
  onPageLeave()
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_common' as *;
@use '@/assets/scss/common/_mixins' as *;

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

.typography-samples h1{ font-size: rem(32); }
.typography-samples h2{ font-size: rem(24); }
.typography-samples h3{ font-size: rem(20); }
.typography-samples h4{ font-size: rem(18); }
.typography-samples p{ font-size: rem(16); }

.typography-samples .en1{ font-family: v.$font-en1; font-weight: bold; }
.typography-samples .en2{ font-family: v.$font-en2; font-weight: bold; }
.typography-samples .en3{ font-family: v.$font-en3; font-weight: bold; }
.typography-samples .en4{ font-family: v.$font-en4; font-weight: bold; }

.typography-samples .kn1{ font-family: v.$font-kn1; font-weight: bold; }
.typography-samples .kn2{ font-family: v.$font-kn2; font-weight: bold; }
.typography-samples .kn3{ font-family: v.$font-kn3; font-weight: bold; }


.typography-samples h1,
.typography-samples h2,
.typography-samples h3,
.typography-samples h4,
.typography-samples p {
  color: #fff;
}

.typography-samples + div{
  margin-top: rem(16);
}
.typography-samples .text-muted {
  color: v.$text-muted;
  opacity: 0.8;
}

.color-palette {
  display: flex;
  gap: rem(32);
  margin-bottom: rem(16);
  flex-wrap: wrap;
  .color-sample{
    &:nth-child(1){ background: v.$c2f70c6; }
    &:nth-child(2){ background: v.$c339333; }
    &:nth-child(3){ background: v.$c666666; }
    &:nth-child(4){ background: v.$cE0E000; }
    &:nth-child(5){ background: v.$c111111; }
    &:nth-child(6){ background: v.$c222222; }
    &:nth-child(7){ background: v.$c333333; }
    &:nth-child(8){ background: v.$c444444; }
    &:nth-child(9){ background: v.$c555555; }
    &:nth-child(10){ background: v.$c666666; }
    &:nth-child(11){ background: v.$c777777; }
  }
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

.component-area {
  margin-bottom: rem(40);
  padding: rem(24);
  background: rgba(255, 255, 255, 0.05);
  border-radius: rem(12);
  
  &:last-child {
    margin-bottom: 0;
  }
}

.component-title {
  font-size: rem(20);
  font-weight: 600;
  margin-bottom: rem(16);
  color: #fff;
}

.component-samples {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
  padding: rem(16);
  background: rgba(0, 0, 0, 0.2);
  border-radius: rem(8);
}

// Button Styles
.btn {
  padding: rem(12) rem(24);
  border-radius: rem(6);
  border: none;
  background: #2a2a2a;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background: v.$main-color;
  }

  &--secondary {
    background: #4a4a4a;
  }

  &--outline {
    background: transparent;
    border: rem(1) solid #fff;
  }

  &:hover {
    box-shadow: 0 rem(4) rem(12) rgba(0, 0, 0, 0.2);
  }
}

// Link Styles
.link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &--primary {
    color: v.$main-color;
  }

  &--underline {
    text-decoration: underline;
  }

  &:hover {
    opacity: 0.8;
  }
}

// Input Styles
.input {
  padding: rem(12) rem(16);
  border-radius: rem(6);
  border: rem(1) solid #4a4a4a;
  background: #2a2a2a;
  color: #fff;
  width: rem(200);

  &::placeholder {
    color: #888;
  }

  &--search {
    padding-left: rem(40);
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23888"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>');
    background-repeat: no-repeat;
    background-position: rem(12) center;
    background-size: rem(20);
  }

  &--error {
    border-color: #ff4444;
  }
}

// Card Styles
.card {
  padding: rem(20);
  background: #2a2a2a;
  border-radius: rem(8);
  width: rem(280);

  &-title {
    font-size: rem(18);
    font-weight: 600;
    margin-bottom: rem(8);
    color: #fff;
  }

  &-desc {
    font-size: rem(14);
    color: #888;
    margin-bottom: rem(16);
  }

  &-content {
    padding: rem(16);
    background: rgba(255, 255, 255, 0.05);
    border-radius: rem(4);
    color: #fff;
  }

  &--hover {
    transition: all 0.3s ease;
    &:hover {
      background: #333;
    }
  }

  &--shadow {
    box-shadow: 0 rem(8) rem(24) rgba(0, 0, 0, 0.2);
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