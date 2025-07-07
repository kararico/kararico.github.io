<template>
    <section class="brand-hero" ref="heroRef">
      <!-- 배경 비디오 -->
      <video 
        v-if="project && project.mediaType === 'video'" 
        class="bg-video" 
        :src="project.bgMedia || '/videos/default.mp4'"
        autoplay 
        muted 
        loop 
        playsinline
      ></video>
      
      <!-- 배경 이미지 -->
      <div 
        v-else-if="project" 
        class="bg-image" 
        :style="{ backgroundImage: `url(${project.bgMedia || '/images/products/project1.png'})` }"
      ></div>
      
      <div class="dimd" ref="dimdRef"></div>
      <div class="brand-title-hero" ref="titleHeroRef">{{ project?.companyName || 'Loading...' }}</div>
      <button class="scroll-down" @click="scrollToDetail">↓</button>
    </section>
    <section class="brand-detail" ref="detailRef"> 
      <div class="brand-header">
        <div class="inner">
            <h1 class="brand-title">{{ project?.title || 'Loading...' }}</h1>
            <div class="brand-meta">
              <div class="meta-item">
                <div class="meta-title">CLIENT</div>
                <div class="meta-underline"></div>
                <div class="meta-value">{{ project?.companyName || 'Loading...' }}</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">RELEASE DATE</div>
                <div class="meta-underline"></div>
                <div class="meta-value">{{ project?.details?.[0]?.year || '2024' }}</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">TYPE</div>
                <div class="meta-underline"></div>
                <div class="meta-value">{{ project?.category || 'Loading...' }}</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">PROJECT DURATION</div>
                <div class="meta-underline"></div>
                <div class="meta-value">{{ project?.overview?.duration || 'Loading...' }}</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">TEAM ROLE</div>
                <div class="meta-underline"></div>
                <div class="meta-value">{{ project?.overview?.role || 'Loading...' }}</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">TEAM COMPOSITION</div>
                <div class="meta-underline"></div>
                <div class="meta-value">{{ project?.overview?.team || 'Loading...' }}</div>
              </div>
              <div class="meta-item">
                <div class="meta-title">TECH STACK</div>
                <div class="meta-underline"></div>
                <div class="meta-value">{{ project?.techStack?.tools?.join(', ') || 'Loading...' }}</div>
              </div>
            </div>
            <div class="brand-tags" v-if="project && project.tags && project.tags.length">
              <span v-for="tag in project.tags" :key="tag" class="tag">#{{ tag }}</span>
            </div>
        </div>
      </div>
      <div class="brand-main-image">
        <div v-if="swiperMode && project && project.images && project.images.length" class="image-container">
          <Swiper
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :navigation="isDesktop"
            pagination
            class="image-container"
          >
            <SwiperSlide v-for="(img, idx) in project.images" :key="`${img.url}-${idx}`">
              <img :src="img.url" :alt="img.alt" />
            </SwiperSlide>
            <template #navigation-prev v-if="isDesktop">
              <div class="swiper-button-prev"></div>
            </template>
            <template #navigation-next v-if="isDesktop">
              <div class="swiper-button-next"></div>
            </template>
          </Swiper>
        </div>
        <div v-else-if="project && project.images && project.images.length" class="image-container">
          <img
            v-for="(img, idx) in project.images"
            :key="`${img.url}-${idx}`"
            :src="img.url"
            :alt="img.alt"
          />
        </div>
        <div v-else class="no-image">
          <p>프로젝트 메인 이미지가 없습니다.</p>
        </div>
      </div>
      <div class="brand-description">
        <div class="inner">
          <h2>프로젝트 소개</h2>
          <div v-html="project?.description || ''"></div>
          <button class="site-link-btn" @click="goToSite">
            사이트 바로가기
          </button>
        </div>
      </div>
      <div class="project-nav">
        <div 
          v-if="prevProject"
          class="project-nav-item prev"
          @mouseenter="isDesktop && (isPrevHover = true)"
          @mouseleave="isDesktop && (isPrevHover = false)"
          @click="goToPrevProject"
        >
          <div class="nav-bg" :style="{ backgroundImage: `url(${prevProject.image || '/images/products/project_1-poster.jpg'})` }"></div>
          <div class="nav-content">
            <span class="nav-arrow">&#8592;</span>
            <span class="nav-label">PREV PROJECT</span>
            <span v-if="isDesktop && isPrevHover" class="nav-title">{{ prevProject.title || '이전 프로젝트' }}</span>
          </div>
        </div>
        <div 
          v-if="nextProject"
          class="project-nav-item next"
          @mouseenter="isDesktop && (isNextHover = true)"
          @mouseleave="isDesktop && (isNextHover = false)"
          @click="goToNextProject"
        >
          <div class="nav-bg" :style="{ backgroundImage: `url(${nextProject.image || '/images/products/project_2-poster.jpg'})` }"></div>
          <div class="nav-content">
            <span class="nav-label">NEXT PROJECT</span>
            <span class="nav-arrow">&#8594;</span>
            <span v-if="isDesktop && isNextHover" class="nav-title">{{ nextProject.title || '다음 프로젝트' }}</span>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useHead } from '#imports'
import { useRoute, useRouter } from 'vue-router';
import { useProjectStore } from '@/stores/projects';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const route = useRoute();
const router = useRouter(); 
const projectStore = useProjectStore();

const swiperMode = computed(() => {
  const projectId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
  return projectStore.getProjectById(projectId)?.swipermode === true;
});
const heroRef = ref<HTMLElement | null>(null);
const detailRef = ref<HTMLElement | null>(null);
const dimdRef = ref<HTMLElement | null>(null);
const titleHeroRef = ref<HTMLElement | null>(null);
const isPrevHover = ref(false);
const isNextHover = ref(false);
const isDesktop = ref(true);

// 현재 프로젝트 정보를 가져오는 computed 속성
const project = computed(() => {
  const projectId = route.params.id as string;
  return projectStore.getProjectById(projectId);
});

// 이전 프로젝트 정보를 가져오는 computed 속성
const prevProject = computed(() => {
  const currentIndex = projectStore.projects.findIndex(p => p.id === project.value?.id);
  return currentIndex > 0 ? projectStore.projects[currentIndex - 1] : null;
});

// 다음 프로젝트 정보를 가져오는 computed 속성
const nextProject = computed(() => {
  const currentIndex = projectStore.projects.findIndex(p => p.id === project.value?.id);
  return currentIndex < projectStore.projects.length - 1 ? projectStore.projects[currentIndex + 1] : null;
});

function setHeroAndDetailHeight() {
  if (heroRef.value && detailRef.value) {
    const heroHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    heroRef.value.style.height = heroHeight + 'px';
    detailRef.value.style.marginTop = heroHeight + 'px';
  }
}

function handleScroll() {
  if (!heroRef.value || !dimdRef.value || !titleHeroRef.value || !detailRef.value) return;
  const detailTop = detailRef.value.offsetTop;
  const scrollY = window.scrollY || window.pageYOffset;
  // progress: 0(맨 위) ~ 1(brand-detail이 화면 상단에 닿을 때)
  const progress = Math.min(1, Math.max(0, scrollY / detailTop));

  // dimd: 0 → 0.8
  const dimdOpacity = 0.8 * progress;
  dimdRef.value.style.opacity = String(dimdOpacity);

  // title: 1 → 0
  const titleOpacity = 1 - progress;
  titleHeroRef.value.style.opacity = String(titleOpacity);
}

function scrollToDetail() {
  if (detailRef.value) {
    const header = document.querySelector('.header') as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 0;
    window.scrollTo({
      top: detailRef.value.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }
}

function goToSite() {
  if (project.value?.links?.website) {
    window.open(project.value.links.website, '_blank');
  } else {
    alert('사이트 링크가 없습니다.');
  }
}

function goToPrevProject() {
  if (prevProject.value) {
    router.push(`/projects/${prevProject.value.id}`);
  }
}

function goToNextProject() {
  if (nextProject.value) {
    router.push(`/projects/${nextProject.value.id}`);
  }
}

function handleResize() {
  isDesktop.value = window.innerWidth > 1024;
  if (!isDesktop.value) {
    isPrevHover.value = false;
    isNextHover.value = false;
  }
}

onMounted(() => {
  setHeroAndDetailHeight();
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setHeroAndDetailHeight);
    window.visualViewport.addEventListener('scroll', setHeroAndDetailHeight);
  } else {
    window.addEventListener('resize', setHeroAndDetailHeight);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (window.visualViewport) {
    window.visualViewport.removeEventListener('resize', setHeroAndDetailHeight);
    window.visualViewport.removeEventListener('scroll', setHeroAndDetailHeight);
  } else {
    window.removeEventListener('resize', setHeroAndDetailHeight);
  }
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;

.brand-hero {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: center center/cover no-repeat;
    z-index: 0;
  }

  .dimd {
    position: absolute;
    inset: 0;
    background: #111;
    opacity: 1;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.2s;
  }
  .brand-title-hero, .scroll-down {
    position: relative;
    z-index: 2;
  }
 
  .brand-title-hero {
    color: #fff;
    font-size: rem(64);
    font-weight: 700;
    letter-spacing: 0.25em;
    text-align: center;
    text-shadow: 0 rem(4) rem(24) rgba(0,0,0,0.18);
    transition: opacity 0.2s;
    @include mobile {
      font-size: rem(40);
    }
  }
  .scroll-down {
    position: absolute;
    bottom: rem(40);
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    font-size: rem(32);
    color: #fff;
    opacity: 0.8;
    animation: scroll-bounce 1.2s infinite alternate;
    z-index: 2;
  }
}

@keyframes scroll-bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(16px); }
}

.brand-detail {
  position: relative;
  z-index: 2;
  background: #fff;
  color: #222;

  .brand-header {
    .inner {
      padding: 0 rem(32);
      text-align: center;
      margin:0 auto rem(40);
      max-width: rem(980);
      @include tablet {
        padding: 0 rem(24);
      }
      @include mobile {
        padding: 0 rem(19.2);
        text-align: left;
      }
      .brand-title {
				padding:rem(48) 0 rem(32);
				font-size: rem(40);
				font-weight: 700;
        text-align: left;
        font-family: v.$font-kn2;
        @include tablet {
          font-size: rem(32);
          padding:rem(28) 0;
        }
        @include mobile {
          font-size: rem(20);
          padding:rem(14) 0;
        }
			}
			.brand-meta {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: rem(24);
				margin: rem(40) 0 rem(32) 0;
				text-align: left;

				@include tablet {
					display: flex;
					flex-direction: column;
					gap: rem(16);
					margin: rem(10) 0 rem(16) 0;
				}
				@include mobile {
					display: flex;
					flex-direction: column;
					gap: rem(12);
					margin: rem(10) 0 rem(16) 0;
				}

				.meta-item {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					min-width: 0;
					padding-bottom: rem(8);
				}
				.meta-title {
          display: block;
          width: 100%;
					font-size: rem(16);
					font-weight: 500;
          padding-bottom: rem(10);
					margin-bottom: rem(10);
					font-family: v.$font-kn2;
          font-weight: 700;
          border-bottom: 0;
					@include tablet { font-size: rem(14);    border-bottom: rem(1) solid #111; }
					@include mobile { font-size: rem(12);    border-bottom: rem(1) solid #111; }
				}
				.meta-underline {
					width: 100%;
					height: rem(0.48);
					background: #222;
					margin-bottom: rem(12);
					@include tablet {
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						width: 100%;
						height: rem(1);
						background: #e0e0e0;
						margin: 0;
					}
					@include mobile {
						display: none;
					}
				}
				.meta-value {
					font-size: rem(24);
					color: #444;
					font-weight: 400;
					word-break: keep-all;
					font-family: v.$font-en1;
					@include tablet { font-size: rem(18); }
					@include mobile { font-size: rem(15); }
				}
			}
			.meta-item:last-child {
				@media (min-width: 1025px) {
					grid-column: 1 / -1;
				}
			}
    	.brand-tags {
        .tag {
          display: inline-block;
          background: #111;
          color: #fff;
          border-radius: rem(16);
          padding: rem(4.8) rem(16);
          font-size: rem(15.2);
          margin: 0 rem(4.8) rem(4.8) 0;
          font-family: v.$font-en1;
          @include mobile {
            font-size: rem(12);
            margin: 0 rem(4) rem(4) 0;
          }
        }
      }
    }
  }
  .brand-main-image {
    width: 100%;
    margin-bottom: rem(64);
    @include tablet {
      margin-bottom: rem(30);
    }
    .image-container {
      position: relative;
      width: 100%;
      max-width: rem(1440);
      margin: 0 auto;
      @include tablet {
        img {
          width: 100%;
        }
      }
      @include mobile {
        img {
          width: 100%;
        }
      }
      .swiper{
        .swiper-slide {
          img{ margin:0 auto; }
        }
      }
  
    }
    .no-image {
      width: 100%;
      text-align: center;
      padding: rem(64) rem(32);
      background: #f5f5f5;
      border-radius: rem(8);
      border: rem(2) dashed #ddd;
      @include tablet {
        padding: rem(48) rem(24);
      }
      @include mobile {
        padding: rem(32) rem(16);
      }
      p {
        font-size: rem(24);
        color: #666;
        font-family: v.$font-kn2;
        margin: 0;
        @include tablet {
          font-size: rem(19.2);
        }
        @include mobile {
          font-size: rem(16);
        }
      }
    }
  }
  .brand-description {
    .inner {
      padding: 0 rem(32);
      margin:0 auto rem(40);
      max-width: rem(980);
      @include tablet {
        padding: 0 rem(24);
      }
      @include mobile {
        padding: 0 rem(19.2);
      }
    }
    h2 {
      font-size: rem(40);
      font-weight: 600;
      @include tablet {
        font-size: rem(24);
      }
      @include mobile {
        font-size: rem(18);
      }
    }
    p {
      font-size: rem(24);
      line-height: 1.5;
      color: #333;
      font-family: v.$font-kn2;
      @include tablet {
        line-height: 1.3;
        font-size: rem(17.6);
      }
      @include mobile {
        line-height: 1.3;
        font-size: rem(15);
      }
    }
  }
}

.brand-overview {
  margin: rem(40) auto 0 auto;
  max-width: rem(980);
  .inner{
      padding: 0 rem(32);
      margin:0 auto rem(40);
      max-width: rem(980);
      @include tablet {
        padding: 0 rem(24);
        max-width: 100%;
      }
      @include mobile {
        padding: 0 rem(19.2);
        max-width: 100%;
      }
    h2 {
      font-size: rem(40);
      font-weight: 600;
      margin-bottom: rem(32);
      text-align: left;
      @include tablet {
        font-size: rem(32);
        margin-bottom: rem(19.2);
      }
      @include mobile {
        font-size: rem(24);
        margin-bottom: rem(19.2);
      }
    }

    .overview-row {
      display: flex;
      flex-direction: column;
      gap: rem(16);
      margin-bottom: rem(40);
      @include tablet {
        flex-direction: row;
        margin-bottom: rem(32);
      }
      @include mobile {
        margin-bottom: rem(32);
      }
      .overview-card {
        display: flex;
        justify-content: space-between;
        min-width: rem(256);
        width: 100%;
        max-width: 100%;
        border-bottom: rem(1) solid #e0e0e0;
        padding-bottom: rem(16);
        align-items: flex-start;
        @include tablet {
          padding-bottom: rem(16);
        }
        @include mobile {
          padding-bottom: rem(6.4);
        }
      }
    }

    .overview-grid {
      display: flex;
      flex-wrap: wrap;
      gap: rem(32);
      flex-direction: column;
    }

    .overview-label {
      font-size: rem(24);
      font-weight: 700;
      color: #222;
      margin-bottom: rem(8);
      @include tablet {
        font-size: rem(19.2);
      }
      @include mobile {
        font-size: rem(19.2);
      }
    }

    .overview-value {
      font-size: rem(24);
      color: #444;
      font-weight: 400;
      @include tablet {
        padding-right: rem(16);
        font-size: rem(17.6);
      }
      @include mobile {
        padding-right: rem(16);
        font-size: rem(17.6);
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: rem(8);
      margin-top: rem(19.2);
      .tech-tag {
        background: #111;
        color: #fff;
        border-radius: rem(16);
        padding: rem(12) rem(22.4);
        font-size: rem(19.2);
        margin: 0 rem(3.2) rem(3.2) 0;
        display: inline-block;
        font-family: v.$font-en1;
        @include tablet {
          font-size: rem(16);
        }
        @include mobile {
          padding: rem(8) rem(16);
          font-size: rem(16);
        }
      }
    }

    .goals-list {
      display: flex;
      flex-direction: column;
      gap: rem(8);
      list-style: disc;
      padding-left: rem(19.2);
      margin-top: rem(11.2);
      font-family: v.$font-kn2;
      li {
        font-size: 1em;
        color: #444;
        @include tablet {
          font-size: rem(19.2);
        }
        @include mobile {
          font-size: rem(16);
        }
      }
    }
  }
}

.site-link-btn {
  display: flex;
  justify-content: center;
  margin:0 auto;
  padding: rem(14.4) rem(35.2);
  background: #222;
  color: #fff;
  border: none;
  border-radius: rem(12);
  font-size: rem(18);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 rem(2) rem(8) 0 rgba(0,0,0,0.08);
  text-align: center;
  @include tablet {
    width: 100%;
  }
  @include mobile {
    width: 100%;
    font-size: rem(14);
  }
  &:hover, &:focus {
    background: #444;
    color: #fff;
    box-shadow: 0 rem(4) rem(16) 0 rgba(0,0,0,0.12);
  }
}

.project-nav {
  display: flex;
  width: 100%;
  margin: rem(48) auto 0 auto;
  min-height: rem(224);
  position: relative;

  @include tablet {
    background: none;
    min-height: auto;
    max-width: 100%;
    padding: 0;
  }
  @include mobile {
    background: none;
    min-height: rem(80);
    max-width: 100%;
    padding: 0;
  }

  .project-nav-item {
    width: 50%;
    flex: 0 0 50%;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    // 이전 또는 다음 프로젝트 중 하나만 있을 때 100% 너비
    &:only-child {
      width: 100%;
      flex: 0 0 100%;
    }

    @include tablet {
      background: none !important;
      width: auto;
      flex: 1 1 0;
      min-width: 0;
      padding: rem(32) 0;
      
      &:only-child {
        width: auto;
        flex: 1 1 0;
      }
    }

    .nav-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.5);
      z-index: 1;
      transition: filter 0.2s, transform 0.3s ease;

      @include tablet {
        display: none !important;
      }
      @include mobile {
        display: none !important;
      }
    }

    .nav-content {
      position: relative;
      z-index: 2;
      color: #fff;
      font-size: rem(32);
      font-weight: 700;
      text-align: center;
      letter-spacing: 0.05em;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: rem(224);
      transition: all 0.3s ease;

      .nav-label, .nav-arrow {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .nav-title {
        position: absolute;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        font-size: rem(24);
        max-width: 100%;
        text-align: center;
        line-height: 1.3;
      }

      @include tablet {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        min-height: unset;
        display: flex;

        .nav-label, .nav-title, .nav-arrow {
          color: #111 !important;
          font-size: rem(14.4) !important;
          font-weight: 700;
          text-decoration: none !important;
          opacity: 1 !important;
          margin: 0 rem(3.2);
        }

        .nav-title {
          position: static;
          opacity: 1 !important;
          transform: none !important;
        }
      }
      @include mobile {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        min-height: unset;
        display: flex;

        .nav-label, .nav-title, .nav-arrow {
          color: #111 !important;
          font-size: rem(14.4) !important;
          font-weight: 700;
          text-decoration: none !important;
          opacity: 1 !important;
          margin: 0 rem(3.2);
        }

        .nav-title {
          position: static;
          opacity: 1 !important;
          transform: none !important;
        }
      }
    }

    // PC에서 호버 시 애니메이션
    @media (min-width: 1025px) {
      &:hover {
        .nav-bg {
          filter: brightness(0.7);
          transform: scale(1.2);
        }

        .nav-content {
          .nav-label, .nav-arrow {
            opacity: 0;
            transform: translateY(-10px);
          }

          .nav-title {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }

    &.prev {
      @include tablet {
        justify-content: flex-start;
        .nav-label {
          @include mobile {
            margin-left: rem(8);
            font-size: rem(16);
          }
        }
      }
    }

    &.next {
      @include tablet {
        justify-content: flex-end;
        .nav-label {
          @include mobile {
            margin-right: rem(8);
            font-size: rem(16);
          }
        }
      }
    }
  }
}

// v-html로 삽입된 프로젝트 설명 스타일 (글로벌 스타일)
:deep(.project) {
  padding: rem(40) 0;
  font-family: v.$font-kn2;
  line-height: 1.7;
  color: #333;
  @include tablet {
    padding: rem(24) 0;
  }
  @include mobile {
    padding: rem(16) 0;
  }
  h2 {
    font-size: rem(40);
    margin-bottom: rem(32);
    color: #222;
    border-bottom: rem(2) solid #ddd;
    padding-bottom: rem(16);
    @include tablet {
      font-size: rem(32);
      margin-bottom: rem(12);
    }
    @include mobile {
      font-size: rem(14);
      margin-bottom: rem(10);
    }
  }
  p {
    font-size: rem(24);
    margin-bottom: rem(19.2);
    font-family: v.$font-kn2;
    @include tablet {
      font-size: rem(19.2);
    }
    @include mobile {
      font-size: rem(12);
    }
  }

  article {
    margin-bottom: rem(32);
    font-family: v.$font-kn2;
    @include tablet {
      margin-bottom: rem(19.2);
    }
    @include mobile {
      margin-bottom: rem(19.2);
    }
  }

  h3 {
    font-size: rem(24);
    margin-bottom: rem(10);
    color: #444;
    position: relative;
    @include tablet {
      font-size: rem(19.2);
    }
    @include mobile {
      font-size: rem(14);
    }
   
  }

  ul {
    padding-left: rem(19.2);
    margin: 0;

    li {
      margin-bottom: rem(8);
      list-style: disc;
    }
  }
}

</style> 