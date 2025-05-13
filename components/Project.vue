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
    title: 'WCONCEPT US',
    description: '더블유컨셉 US, 프레임워크 VUE.JS 변환 작업',
    link: '',
    review: '',
    logo: wconceptLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['VUE.JS', 'Java-Script', 'SCSS' ]
  },
  {
    title: 'DISCOVERY',
    description: '디스커버리 사이트 유지 운영',
    link: 'https://www.discovery-expedition.com/',
    review: '',
    logo: aesopLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['HTML5', 'SCSS', 'J-QUERY', 'GSAP',]
  },
  {
    title: 'MLB KOREA',
    description: 'MLB KOREA 사이트 유지 운영',
    link: 'https://www.mlb-korea.com/',
    review: '',
    logo: dalkommLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['HTML5', 'SCSS', 'J-QUERY', 'GSAP',]
  },
  {
    title: 'CASAMIA',
    description: '까사미아 브랜드 사이트 구축',
    link: 'https://casamia.co.kr/home',
    review: '',
    logo: baeminLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['SCSS', 'J-QUERY', 'Java-Script', 'GSAP']
  },
  {
    title: 'Guud',
    description: '라이프 스타일 이커머스 사이트 구축',
    link: 'https://www.guud.co.kr/',
    review: '',
    logo: webtoonLogo,
    date: '2024.09 ~ 2025.03',
    skills: ['SCSS', 'VUE.JS', 'Java-Script' ]
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