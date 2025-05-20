<template>
    <div class="client__section">
        <div class="client__container">
            <h2 class="client__title">Client</h2>
            <p class="client__summary">그동안 함께 작업했던 <span class="main-color">클라이언트</span>들입니다.</p>
            <div class="client__rolling-wrapper">
                <ul class="client__rolling-list">
                    <li v-for="(logo, i) in logos" :key="`a-${i}`" class="client__rolling-item">
                        <img :src="logo" :alt="`client-logo-${i}`" />
                    </li>
                    <li v-for="(logo, i) in logos" :key="`b-${i}`" class="client__rolling-item">
                        <img :src="logo" :alt="`client-logo-${i}`" />
                    </li>
                </ul>
            </div>
        </div>  
    </div>
</template>

<script setup lang="ts">
// 클라이언트 로고 이미지 경로 배열
const logos = [
  '/images/clients/amorepacific.png',
  '/images/clients/bing.png',
  '/images/clients/bullsone.png',
  '/images/clients/casamia-logo.png',
  '/images/clients/discovery.png',
  '/images/clients/good-logo.png',
  '/images/clients/hodoo.png',
  '/images/clients/ktng.png',
  '/images/clients/laneige.png',
  '/images/clients/lgu.png',
  '/images/clients/lifeplanet.png',
  '/images/clients/lingtea2.png',
  '/images/clients/mb-logo.png',
  '/images/clients/megabox.png',
  '/images/clients/mlb.png',
  '/images/clients/nc.png',
  '/images/clients/nexon-1.png',
  '/images/clients/png-logo.png',
  '/images/clients/samsung.png',
  '/images/clients/simmons.png',
  '/images/clients/starbucks-logo.png'
]
</script>

<style lang="scss" scoped>
    @use '@/assets/scss/common/_var' as v;
    @use '@/assets/scss/common/_mixins' as *;

    .client__section {
        width: 100%;
        background: #181a1e;
        padding: 6em 12em;
        overflow: hidden;
        @include tablet { padding: 5em 2.5em 5em; }
        @include mobile { padding: 4em 1.2em 4em; }
    }

    .client__title {
        color: #fff;
        font-size: 3em;
        font-weight: 800;
        margin-bottom: 0.75em;
        z-index: 1;
        padding-bottom: 0.25em;
        letter-spacing: 0.025em;
        font-family: v.$font-en5;
        @include tablet { font-size: 2em; margin-bottom:.5rem;}
        @include mobile { font-size: 1.5em; margin-bottom: 0; }
    }

    .client__summary {
        font-size: 2.2em;
        font-weight: 600;
        margin-bottom: .5em;
        color: #fff;
        text-shadow: 0 2px 16px rgba(76,222,128,0.15);
        line-height: 1.3;
        z-index: 1;
        word-break:keep-all;
        .main-color { color: v.$main-color; font-weight: 700; }
        @include tablet { font-size: 1.5em; margin-bottom:0;}
        @include mobile { font-size: 1.5em; margin-bottom: 0; }
    }

    .client__rolling-wrapper {
        width: 100vw;
        overflow: hidden;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 5em;
        @include tablet { margin-top: 3em;}
        @include mobile { margin-top: 2em;}
    }

    .client__rolling-list {
        display: flex;
        gap: 0;
        width: max-content;
        animation: rolling 100s linear infinite;
    }

    .client__rolling-item {
        flex: 0 0 auto;
        margin: 0 .2rem;
        img {
            width: 25.875rem;
            height: 13.75rem;
            object-fit: contain;
            display: block;
            
            @include tablet { width: 10.375rem; height: 5.625rem; }
            @include mobile { width: 10.375rem; height: 5.625rem; }
        }
    }

    // 로고 롤링 애니메이션
    @keyframes rolling {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
</style>


