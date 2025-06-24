<template>
  <div class="hero-background" :class="type">
    <svg class="background-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient :id="`gradient1-${type}`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :style="`stop-color:${colors?.gradient1?.start || '#FF6B6B'};stop-opacity:${opacity || 0.5}`">
            <animate attributeName="offset" values="0;1;0" dur="10s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" :style="`stop-color:${colors?.gradient1?.end || '#4ECDC4'};stop-opacity:${opacity || 0.5}`">
            <animate attributeName="offset" values="1;0;1" dur="10s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient :id="`gradient2-${type}`" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :style="`stop-color:${colors?.gradient2?.start || '#FFE66D'};stop-opacity:${opacity || 0.5}`">
            <animate attributeName="offset" values="0;1;0" dur="8s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" :style="`stop-color:${colors?.gradient2?.end || '#6B66FF'};stop-opacity:${opacity || 0.5}`">
            <animate attributeName="offset" values="1;0;1" dur="8s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <circle class="floating-circle" cx="20" cy="20" r="15" :fill="`url(#gradient1-${type})`">
        <animate attributeName="cx" values="20;80;20" dur="20s" repeatCount="indefinite" />
        <animate attributeName="cy" values="20;80;20" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle class="floating-circle" cx="80" cy="80" r="12" :fill="`url(#gradient2-${type})`">
        <animate attributeName="cx" values="80;20;80" dur="15s" repeatCount="indefinite" />
        <animate attributeName="cy" values="80;20;80" dur="15s" repeatCount="indefinite" />
      </circle>
      <path class="floating-path" d="M10,50 Q50,10 90,50 T90,50" fill="none" :stroke="`url(#gradient1-${type})`" stroke-width="0.5">
        <animate attributeName="d" 
          values="M10,50 Q50,10 90,50 T90,50;
                  M10,50 Q50,90 90,50 T90,50;
                  M10,50 Q50,10 90,50 T90,50"
          dur="8s" 
          repeatCount="indefinite" />
      </path>
      <path class="floating-path" d="M10,30 Q50,70 90,30 T90,30" fill="none" :stroke="`url(#gradient2-${type})`" stroke-width="0.5">
        <animate attributeName="d" 
          values="M10,30 Q50,70 90,30 T90,30;
                  M10,30 Q50,-10 90,30 T90,30;
                  M10,30 Q50,70 90,30 T90,30"
          dur="6s" 
          repeatCount="indefinite" />
      </path>
    </svg>
  </div>
</template>

<script setup lang="ts">
// Props 정의
defineProps<{
  type?: 'hero' | 'aboutContent'
  opacity?: number
  colors?: {
    gradient1?: {
      start: string
      end: string
    }
    gradient2?: {
      start: string
      end: string
    }
  }
}>()
</script>

<style lang="scss" scoped>
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
  &.hero {
    .background-svg {
      filter: blur(40px);
      transform: scale(1.5);
    }
    .floating-circle {
      opacity: 0.7;
      mix-blend-mode: screen;
    }
    .floating-path {
      opacity: 0.5;
      mix-blend-mode: screen;
    }
  }

  &.aboutContent {
    .background-svg {
      filter: blur(32px);
      transform: scale(1.2);
    }
    .floating-circle {
      opacity: 0.18;
      mix-blend-mode: screen;
    }
    .floating-path {
      opacity: 0.15;
      mix-blend-mode: screen;
    }
  }
}

.background-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.floating-circle {
  filter: blur(8px);
}

.floating-path {
  filter: blur(4px);
}
</style> 