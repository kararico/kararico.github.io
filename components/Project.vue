<template>
  <section class="sc-project" data-color="#000">
    <div class="title-area">
      <h2 class="sc-title">MY PROJECT</h2>
    </div>
    <div class="project-area">
      <div v-for="(project, index) in projects" :key="index" :class="['project-wrap', `wrap${index + 1}`]">
        <div class="bg-shadow"></div>
        <div class="column-left">
          <a v-if="project.link" :href="project.link" class="thumb-box" target="_blank" data-img>
            <img :src="project.logo" :alt="project.title + ' 로고'">
          </a>
          <div v-else class="thumb-box">
            <img :src="project.logo" :alt="project.title + ' 로고'">
          </div>
        </div>
        <div class="column-right">
          <div class="info-box">
            <div class="pagination">
              <em class="current"><span class="blind">현재페이지</span>{{ index + 1 }}</em>
              /
              <span class="total"><span class="blind">전체페이지</span>{{ projects.length }}</span>
            </div>
            <h3 class="project-tit">{{ project.title }}</h3>
            <p class="desc">{{ project.description }}</p>
            <P class="date">{{ project.date }}</P>
            <div class="links">
              <button class="btn-link" data-hover @click="handleLinkClick(project.link)">Go Site</button>
            </div>
            <div v-if="project.skills" class="skill">
              <span v-for="(skill, skillIndex) in project.skills" :key="skillIndex">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ezwellLogo from '~/assets/images/portfolio/ezwell-logo.jpg'
import starbucksLogo from '~/assets/images/portfolio/starbucks-logo.png'
import wconceptLogo from '~/assets/images/portfolio/wconcept-logo.png' 

import naverLogo from '~/assets/images/naver-logo.png'
import cityhallLogo from '~/assets/images/cityhall-logo1.png'
import danoLogo from '~/assets/images/dano-logo.png'
import aesopLogo from '~/assets/images/Aesop-Logo.png'
import dalkommLogo from '~/assets/images/dalkomm-logo.svg'
import baeminLogo from '~/assets/images/baemin-logo.svg'
import webtoonLogo from '~/assets/images/webtoon-logo.png'

const projects = ref([
  {
    title: 'HYUNDAI EZWELL',
    description: '차세대 프로젝트 현대이지웰 복지몰 사이트 구축',
    link: '',
    logo: ezwellLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['Nuxt.js', 'Typescript', 'scss']
  }, 
  {
    title: 'Starbucks',
    description: '스타벅스 임직원 사이렌 오더 하이브리드 앱 프로젝트',
    link: '',
    logo: starbucksLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['J-QUERY', 'SCSS', 'HTML5']
  },
  {
    title: 'DANO SHOP',
    description: '동일한 Class명을 사용하여 공통 디자인을 적용하고,비동기 데이터 통신을 활용하여 클론코딩한 다노샵 적응형 Mobile버전 웹사이트 입니다.',
    link: 'https://ohl1234.github.io/danoshop2',
    review: 'https://velog.io/@ohl1234/%EB%8B%A4%EB%85%B8%EC%83%B5-Clone-coding',
    logo: wconceptLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['SCSS', 'J-QUERY', 'Java-Script', 'JSON', 'Swiper']
  },
  {
    title: 'Aesop',
    description: 'Aesop 공식사이트와 GDWEB,Awwwards 등 레퍼런스 사이트를 참고하여 만든 Aesop 브랜딩 페이지 반응형 웹사이트 입니다.',
    link: 'https://ohl1234.github.io/Aesop',
    review: 'https://velog.io/@ohl1234/Aesop-%EB%B0%98%EC%9D%91%ED%98%95-%EB%A6%AC%EB%89%B4%EC%96%BC-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%BD%94%EB%94%A9',
    logo: aesopLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['SCSS', 'Grid', 'J-QUERY', 'Java-Script', 'GSAP', 'Swiper']
  },
  {
    title: 'Dal.Komm',
    description: '달콤커피 공식사이트와 GDWEB,Awwwards 등 레퍼런스 사이트를 참고하여 만든 적응형 PC 웹사이트 입니다.',
    link: 'https://ohl1234.github.io/dalkomm',
    review: 'https://velog.io/@ohl1234/DalKomm-coffee-%EC%A0%81%EC%9D%91%ED%98%95PC-%EB%A6%AC%EB%89%B4%EC%96%BC-%EC%BD%94%EB%94%A9',
    logo: dalkommLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['SCSS', 'J-QUERY', 'Java-Script', 'GSAP', 'Swiper']
  },
  {
    title: 'BAEMIN',
    description: '배달의 민족 랜딩페이지 사이트와 GDWEB,Awwwards 등 레퍼런스 사이트를 참고하여 만든 반응형 웹사이트 입니다.',
    link: 'https://ohl1234.github.io/baemin',
    review: 'https://velog.io/@ohl1234/%EB%B0%B0%EB%8B%AC%EC%9D%98-%EB%AF%BC%EC%A1%B1-%EB%B0%98%EC%9D%91%ED%98%95-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%BD%94%EB%94%A9',
    logo: baeminLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['SCSS', 'J-QUERY', 'Java-Script', 'GSAP']
  },
  {
    title: 'Naver Webtoon',
    description: '웹 접근성을 준수하고 비동기 데이터 통신을 활용하여 클론코딩한 네이버 웹툰 적응형 Mobile버전 웹사이트 입니다.',
    link: 'https://ohl1234.github.io/naverwebtoon',
    review: 'https://velog.io/@ohl1234/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%A0%81%EC%9D%91%ED%98%95-%EB%84%A4%EC%9D%B4%EB%B2%84%EC%9B%B9%ED%88%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9',
    logo: webtoonLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['SCSS', 'J-QUERY', 'Java-Script', 'Swiper']
  }
])

const handleLinkClick = (link: string) => {
  if (!link) {
    alert('비공개 사이트 입니다.')
    return
  }
  window.open(link, '_blank')
}
</script>

<style scoped>
.sc-project {
  /* 기존 CSS 스타일 유지 */
}

.btn-link {
  display: inline-block;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #000;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-link:hover {
  background: #000;
  color: #fff;
}

.btn-link[data-hover]:hover {
  transform: translateY(-2px);
}
</style> 