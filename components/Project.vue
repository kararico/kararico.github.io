<template>
    <section class="project target" aria-labelledby="project-title">
        <div class="project__inner">
            <div v-for="(project, index) in projects" 
                 :key="index"
                 :class="['project__item', index > 0 ? 'pin' : '']"  
                 :id="`project-${index + 1}`">
                <div class="img-wrap">
                    <div class="project__content">
                        <div class="project__info">
                            <h3>
                                <span class="project__category">{{ project.category }}</span>
                                <span :class="{ 'font-small': project.company === 'SHINSEGAE CASA' }">{{ project.company }}</span>
                            </h3>
                            <h4>
                                {{ project.title }}
                            </h4>
                            <div class="project__details">
                                <ul class="project__links">
                                    <li>
                                        <a :href="project.siteUrl" 
                                           class="project__link" 
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           @click.prevent="handleSiteClick(project.siteUrl)">
                                            <span>GO SITE</span>
                                            <div class="project__icon">
                                                <svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.15472 2.81673L13.8293 2.82734L13.8399 8.5019L12.758 8.5019L12.8004 4.66229L3.10242 14.3603L2.29631 13.5542L11.9943 3.85618L8.15472 3.89861L8.15472 2.81673Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="project__tags">
                                    <li><span>기여도: {{ project.contribution }}</span></li>
                                    <li v-for="skill in project.skills" :key="skill">
                                        <span>#{{ skill }}</span>
                                    </li>
                                </ul>
                                <p class="project__description" v-html="project.description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="project__media">
                        <div class="project__overlay"></div>
                        <template v-if="project.mediaType === 'video'">
                            <video loop 
                                   autoplay 
                                   muted 
                                   playsinline 
                                   class="project__video">
                                <source :src="project.videoUrl" type="video/mp4">
                            </video>
                        </template>
                        <template v-else-if="project.mediaType === 'iframe'">
                            <iframe 
                                :src="getEmbedUrl(project.videoUrl)"
                                class="project__video"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </template>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch')) {
        const videoId = url.split('v=')[1]?.split('&')[0]
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}` : url
    }
    return url
}

const handleSiteClick = (url: string) => {
    if (!url) {
        alert('비공개 프로젝트입니다')
    }else{
        window.open(url, '_blank')
    }
}

const projects = ref([
    {
        category: 'Project',
        company: 'HYUNDAI',
        title: 'EZWEL',
        description: '<em class="highlight">EZWEL</em> 프로젝트를 진행중에 있습니다.',
        siteUrl: '',
        mediaType: 'video',
        videoUrl: 'https://uploads-ssl.webflow.com/6481baa8b4e61d7cb8a9f0a0/64980d39c97910472fbfa13f_HeroVideo_04_compressed-transcode.mp4',
        contribution: '45%',
        skills: ['Nuxt.js', 'Vue.js', 'TypeScript', 'SCSS' ]
    },
    {
        category: 'Project',
        company: 'SKT COMPANY',
        title: 'STARBUCKS',
        description: '<em class="highlight">스타벅스</em> 임직원 사내용 하이브리드 웹 프로젝트입니다.',
        siteUrl: '',
        mediaType: 'video',
        videoUrl: 'https://assets.website-files.com/63f5d378a903c2a12583ce2f/641319fe73926c0e5bc81ccf_ver 2-transcode.mp4',
        contribution: '100%',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Operation',
        company: 'F&F',
        title: 'MLB KOREA',
        description: '<em class="highlight">엠엘비 코리아</em> 홈페이지 부분 개편 운영 프로젝트입니다.',
        siteUrl: 'https://www.mlb-korea.com/',
        mediaType: 'video',
        videoUrl: 'https://cdn.prod.website-files.com/646a4e539ffa024a48651555/649070038794a919744c0b8f_background-video-1280x720-30fps-transcode.mp4',
        contribution: '100%',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Operation',
        company: 'F&F',
        title: 'DISCOVERY',
        description: '<em class="highlight">디스커버리</em> 홈페이지 부분 개편 및 운영 프로젝트입니다.',
        siteUrl: 'https://www.discovery-expedition.com',
        mediaType: 'video',
        videoUrl: 'https://homepage-static.fnf.co.kr/pcVideo_67db5edf809283.56040568.mp4',
        contribution: '100%',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Project',
        company: 'SHINSEGAE CASA',
        title: 'CASAMINA',
        description: '<em class="highlight">까사미아</em> 홈페이지 개편 프로젝트입니다.',
        siteUrl: 'https://casamia.co.kr/home',
        mediaType: 'iframe',
        videoUrl: 'https://www.youtube.com/watch?v=7ZTkYBRDmA0',
        contribution: '100%',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Project',
        company: 'SHINSEGAE CASA',
        title: 'GUUD',
        description: '<em class="highlight">굳닷컴</em> 개편 및 운영 프로젝트입니다.',
        siteUrl: 'https://guud.com',
        mediaType: 'iframe',
        videoUrl: 'https://www.youtube.com/watch?v=1Jy2Chi5hbQ',
        contribution: '100%',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    
])

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    // 인트로 애니메이션
    const introTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.target',
            start: "-10% 50%",
            end: "0% 50%",
            scrub: 0,
        },
    })

    introTl
        .to('.project h2', { width: '100%' }, "n")
        .to('.project__item', { width: '100%' }, "n")
        .from('.project', { yPercent: 1 }, "n")

    // 프로젝트 아이템 애니메이션
    const projectTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".project",
            scrub: 0,
            start: "0 0",
            end: "100% 100%",
        }
    })

    // 각 프로젝트 아이템에 대한 애니메이션
    projects.value.forEach((_, index) => {
        const currentIndex = index + 1
        const prevIndex = index

        // 첫 번째 아이템은 width 100%로 시작
        projectTl
            .set(`.project__item:nth-child(${currentIndex})`, { 
                width: index === 0 ? '100%' : '80%'
            })
            .to(`.project__item:nth-child(${currentIndex})`, { 
                transform: 'translateY(0)',
            }, `item${currentIndex}+=0.1`)
            .to(`.project__item:nth-child(${currentIndex})`, { 
                width: '100%',
            }, `item${currentIndex}`)

        if (index > 0) {
            projectTl
                .to(`.project__item:nth-child(${prevIndex}) .img-wrap`, {
                    opacity: 0,
                }, `item${currentIndex}+=0.1`)
                .to('.project__numbers li', {
                    xPercent: -(100 * index),
                }, `item${currentIndex}`)
        }
    })
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

.project {
    position: relative;
    width: 100%;
    height: 600vh;
    h2 {
        margin: 0 auto;
        width: 80%;
        text-align: center;
        border-bottom: 1px solid rgba(255,255,255,.2);
        padding-bottom: 1.5em;
        letter-spacing: 0.02em;
        font-weight: 300;
        line-height: 1.75;
        margin-bottom: 3em;

        @include mobile {
            // font-size: 3.6em;
            margin-bottom: 2em;
        }
    }

    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      top: 0px;
      width: 100%;
      overflow: hidden;
    }

    &__item {
        will-change: opacity, width;
        width: 70%;
        height: 100%;
        background-color: #000000;
        position: relative;
        overflow: hidden;
        
        &.pin{
            position: absolute;
            top: 0;
            transform: translateY(100%);
        }
        
        @include mobile {
            width: 100%;
        }
    }

    &__content {
        display: flex;
        gap: 1.5em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;

        @include mobile {
            gap: 4em;
        }
    }

    &__info {
        h3 {
            letter-spacing: -.02em;
            margin: 0;
            font-size: 5em;
            font-weight: 400;
            line-height: .9;
            text-transform: uppercase;
            font-family: v.$font-en1;
            @include tablet {
                font-size: 3em;
            }
            @include mobile {
                font-size: 4em;
            }
            .font-small {
                font-size: 0.75em;
                letter-spacing: 0;
                vertical-align: middle;
            }
        }
        h4 {
            font-size: 5em;
            font-weight: 400;
            line-height: 1.2;
            font-family: v.$font-en1;
            @include tablet {
                font-size: 3em;
            }
            @include mobile {
                font-size: 4em;
            }
        }
    }

    &__category {
        display: block;
        white-space: pre-wrap;
        font-family: 'Playfair Display', serif;
        font-size: 0.5em;
        margin-bottom: 0.5em;
        text-transform: initial;

        @include mobile {
           font-size: 0.5em;
           margin-bottom: 0.6em;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__links {
        display: flex;
        gap: 0.5em;
        width: 52em;
        justify-content: center;
        position: relative;

        @include mobile {
            width: 100%;
            gap: 0.6em;
        }

        li {
            &:first-child a {
                border-color: v.$main-color;
                &:hover {
                    color: #ffffff;
                    background-color: v.$main-color;
                    border-color: #1c8946;
                }
            }
        }
    }

    &__link {
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2em;
        border-radius: 0.7em;
        padding: 0.4em 1em;
        backdrop-filter: blur(20px);
        background-color: rgba(16,18,20,.25);
        border: 1px solid rgba(255,255,255,.1);
        transition: 0.3s ease-in-out;

        @include laptop {
            padding: 0.6em 1.4em;
        }

        @include tablet {
            padding: 0.6em 1.4em;
        }

        @include mobile {
            margin-top: 1em;
            border-radius: 2.5em;
            padding: 0.5em 3em;
        }

        span {
            letter-spacing: .02em;
            font-size: 1em;
            font-weight: 300;
            line-height: 1.75;

            @include tablet {
                font-size: 1.1em;
            }
            @include mobile {
                font-size: 1.2em;
            }
        }

        &:hover {
            color: #101214;
            background-color: #fff;
        }
    }

    &__icon {
        width: 1.1em;
        height: 1.1em;
        display: flex;
        justify-content: center;
        align-items: center;

        @include mobile {
            width: 1.2em;
            height: 1.2em;
        }
    }

    &__tags {
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: center;
        margin-top: 2em;
        color: #747474;
        text-transform: uppercase;
        font-size: 1.4em;

        @include tablet {
            font-size: 1.2em;
        }
        @include mobile {
            font-size: 1.2em;
            margin-top: 1em;
            flex-wrap: wrap;
            row-gap: 0;
        }

        li {
            font-family: 'Pretendard', sans-serif;
            font-weight: 400;
            line-height: 1.92;
            &:first-child {
                color: #d3d3d3;
            }
        }
    }

    &__description {
        font-family: 'Pretendard', sans-serif;
        font-weight: 400;
        line-height: 1.92;
        letter-spacing: -0.025em;
        color: #bbbbbb;
        margin-top: 1em;
        font-size: 1.4em;
        :deep(.highlight){
            color: v.$main-color; 
        }
        span {
            color: #ffffff;
        }

        @include tablet {
            font-size: 1.3em;
        }
        @include mobile {
            font-size: 1.2em;
            line-height: 1.4;
            width: 100%;
            margin-top: 0.8em;
        }
    }

    &__media {
        width: 100%;
        height: 100vh;
    }

    &__overlay {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    &__video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: 50%;
        background-size: cover;
        margin: auto;
        position: absolute;
        top: -100%;
        bottom: -100%;
        left: -100%;
        right: -100%;
    }
    &__label {
        letter-spacing: .02em;
        font-size: 1em;
        font-weight: 300;
        line-height: 1.75;

        @include mobile {
            display: none;
        }

        &--mobile {
            display: none;

            @include mobile {
                display: block;
                font-size: 3.6em;
            }
        }
    }
}
</style>