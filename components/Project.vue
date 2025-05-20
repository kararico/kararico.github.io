<template>
    <div class="project target" aria-labelledby="project-title" :style="{ height: sectionHeight }">
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
                            </h3>
                            <h4>
                                {{ project.title }}
                            </h4>
                            <div class="project__details">
                                <ul class="project__tags">
                                    <li><span>skill</span></li>
                                    <li v-for="skill in project.skills" :key="skill">
                                        <span>#{{ skill }}</span>
                                    </li>
                                </ul>
                                <p class="project__description" v-html="project.description"></p>
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
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// YouTube URL을 임베드 URL로 변환하는 함수
const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch')) {
        const videoId = url.split('v=')[1]?.split('&')[0]
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}` : url
    }
    return url
}

// 사이트 링크 클릭 처리 함수
const handleSiteClick = (url: string) => {
    if (!url) {
        alert('비공개 프로젝트입니다')
    }else{
        window.open(url, '_blank')
    }
}

// 프로젝트 데이터
const projects = ref([
    {
        category: 'Project',
        title: 'EZWEL',
        description: '<em class="highlight">EZWEL</em> 프로젝트를 진행중에 있습니다.',
        siteUrl: '',
        mediaType: 'video',
        videoUrl: 'https://img.ezwelfare.net/welfare_corp/css/user/front/renew/images/main_visual01.mp4',
        skills: ['Nuxt.js', 'TypeScript', 'HTML5', 'SCSS', 'STORYBOOK' ]
    },
    {
        category: 'Project',
        title: 'STARBUCKS',
        description: '<em class="highlight">스타벅스</em> 임직원 사내용 하이브리드 앱 프로젝트입니다.',
        siteUrl: '',
        mediaType: 'video',
        videoUrl: 'https://videos.pexels.com/video-files/28043968/12290715_2560_1440_24fps.mp4',
        skills: ['HTML5', 'JavaScript','Jquery', 'SCSS']
    },
    {
        category: 'Operation',
        title: 'MLB KOREA',
        description: '<em class="highlight">엠엘비 코리아</em> 홈페이지 부분 개편 운영 프로젝트입니다.',
        siteUrl: 'https://www.mlb-korea.com/',
        mediaType: 'video',
        videoUrl: 'https://cdn.prod.website-files.com/646a4e539ffa024a48651555/649070038794a919744c0b8f_background-video-1280x720-30fps-transcode.mp4',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Operation',
        title: 'DISCOVERY',
        description: '<em class="highlight">디스커버리</em> 홈페이지 부분 개편 및 운영 프로젝트입니다.',
        siteUrl: 'https://www.discovery-expedition.com',
        mediaType: 'video',
        videoUrl: 'https://homepage-static.fnf.co.kr/pcVideo_67db5edf809283.56040568.mp4',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Project',
        title: 'CASAMINA',
        description: '<em class="highlight">까사미아</em> 홈페이지 개편 프로젝트입니다.',
        siteUrl: 'https://casamia.co.kr/home',
        mediaType: 'video',
        videoUrl: 'https://videos.pexels.com/video-files/32013494/13644778_2560_1440_25fps.mp4',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Project',
        title: 'GUUD',
        description: '<em class="highlight">굳닷컴</em> 개편 및 운영 프로젝트입니다.',
        siteUrl: 'https://guud.com',
        mediaType: 'video',
        videoUrl: 'https://videos.pexels.com/video-files/31646575/13482899_2560_1440_60fps.mp4',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Project',
        title: 'BULLSONE',
        description: '<em class="highlight">불스원</em> 구축 프로젝트입니다.',
        siteUrl: 'https://bullsone.com/',
        mediaType: 'video',
        videoUrl: 'https://videos.pexels.com/video-files/29792714/12800431_1920_1080_60fps.mp4',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Project',
        title: 'LG SIGNATURE GLOBAL',
        description: '<em class="highlight">LG시그니처 글로벌 사이트</em> 구축 프로젝트입니다.',
        siteUrl: 'https://www.lg.com/global/',
        mediaType: 'video',
        videoUrl: 'https://videos.pexels.com/video-files/30975000/13241693_2160_1440_24fps.mp4',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    {
        category: 'Project',
        title: 'Funbeerking',
        description: '<em class="highlight">펀비어킹</em> 구축 프로젝트입니다.',
        siteUrl: 'http://www.funbeerking.com/index.php',
        mediaType: 'video',
        videoUrl: 'https://videos.pexels.com/video-files/10741100/10741100-hd_2560_1440_30fps.mp4',
        skills: ['HTML', 'JavaScript', 'SCSS']
    },
    
    
])

// 섹션 높이 설정
const sectionHeight = ref('600vh')

// 반응형에 따른 섹션 높이 업데이트 함수
const updateSectionHeight = () => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches
    
    if (isMobile) {
        sectionHeight.value = '400vh'
    } else if (isTablet) {
        sectionHeight.value = '500vh'
    } else {
        sectionHeight.value = '600vh'
    }
}

// 컴포넌트 마운트 시 실행
onMounted(() => {
    updateSectionHeight()
    window.addEventListener('resize', updateSectionHeight)
    
    gsap.registerPlugin(ScrollTrigger)
    // 인트로 애니메이션 설정
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

    // 프로젝트 아이템 애니메이션 설정
    const projectTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".project",
            scrub: 0,
            start: "top top",
            end: "100% 100%",
            pin: true,
            anticipatePin: 1,
        }
    })

    // 각 프로젝트 아이템에 대한 애니메이션 적용
    projects.value.forEach((_, index) => {
        const currentIndex = index + 1
        const prevIndex = index

        if (index === 0) {
            // 첫 번째 아이템은 초기 상태에서 보이도록 설정
            projectTl
                .set(`.project__item:nth-child(${currentIndex})`, { 
                    width: '100%',
                    transform: 'translateY(0)',
                    opacity: 1,
                    position: 'relative'
                })
        } else {
            // 나머지 아이템들은 애니메이션 적용
            projectTl
                .set(`.project__item:nth-child(${currentIndex})`, { 
                    width: '80%',
                    opacity: 0,
                    position: 'absolute',
                    top: 0
                })
                .to(`.project__item:nth-child(${currentIndex})`, { 
                    transform: 'translateY(0)',
                    opacity: 1,
                    duration: 0.5
                }, `item${currentIndex}+=0.1`)
                .to(`.project__item:nth-child(${currentIndex})`, { 
                    width: '100%',
                }, `item${currentIndex}`)
                .to(`.project__item:nth-child(${prevIndex}) .img-wrap`, {
                    opacity: 0,
                }, `item${currentIndex}+=0.1`)
        }
    })
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
    window.removeEventListener('resize', updateSectionHeight)
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

.project {
    width: 100%;
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
                font-size: 2.8em;
                word-break: keep-all;
                white-space: pre-line;
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
        margin-top: 2em;
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
        padding: 1em 4em;
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
        letter-spacing: -0.025em;
        color: #bbbbbb;
        margin-top: .5em;
        font-size: 1.4em;
        line-height: 1.5;
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