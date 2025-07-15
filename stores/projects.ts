import { defineStore } from 'pinia';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  bgMedia: string;
  mediaType: 'image' | 'video';
  description: string;
  companyDescription: string;
  companyName: string;
  details: {
    size: string;
    material: string;
    year: string;
  }[];
  images: {
    url: string;
    alt: string;
  }[];
  // 프로젝트 개요
  overview: {
    duration: string;
    team: string;
    role: string;
    goals: string[];
  };
  // 기술 스택
  techStack: {
    frontend: string[];
    backend?: string[];
    database?: string[];
    tools: string[];
  };
  // 주요 기능
  features: {
    title: string;
    description: string;
    image?: string;
  }[];
  // 프로젝트 링크
  links: {
    website?: string;
    github?: string;
    demo?: string;
  };
  tags: string[];
  swipermode: boolean;
}

interface ProjectState {
  projects: Project[];
}

export const useProjectStore = defineStore('projects', {
  state: (): ProjectState => ({
    projects: [
      { 
        id: '1',
        swipermode: false,
        title: '복지몰 웹사이트 리뉴얼',
        category: 'PC',
        image: '/images/products/project1.png',
        bgMedia: 'https://img.ezwelfare.net/welfare_corp/css/user/front/renew/images/main_visual01.mp4',
        mediaType: 'video',
        tags: ['UX/UI', 'Website', 'Admin System'],
        description: `<section class="project">
            <h2 class="sr-only">복지몰 사이트 리뉴얼 구축 프로젝트</h2>
            <p>
              기존 사이트의 UI 구조를 재정비하고 사용자 중심의 경험을 제공하기 위해 마크업과 인터랙션 구현을 담당하였습니다.
            </p>

            <article class="project-details">
              <h3>✅ 주요 기술 스택 및 구조</h3>
              <ul>
                <li><strong>프레임워크:</strong> Nuxt.js 기반 + TypeScript 적용 (정적 타입 안정성 확보)</li>
                <li><strong>스타일링:</strong> SCSS 전처리기 (컴포넌트 기반 스타일 가이드 구축)</li>
                <li><strong>디바이스 대응:</strong> 반응형이 아닌 PC/MOBILE 분리 개발</li>
              </ul>
            </article>

            <article class="interaction">
              <h3>🎨 인터랙션 및 모션 구현</h3>
              <ul>
                <li><strong>Lottie.js:</strong> JSON 애니메이션 연동</li>
                <li><strong>GSAP:</strong> 페이지 진입, 스크롤 트리거, 버튼 액션 등 모션 효과 구현</li>
                <li>다양한 사용자 이벤트에 따라 생동감 있는 UI 전환 제공</li>
              </ul>
            </article>

            <article class="accessibility">
              <h3>🌐 웹 표준 및 접근성</h3>
              <ul>
                <li>시맨틱 마크업으로 웹 접근성 확보</li>
                <li>디자인 시안과의 싱크 강화를 위한 크로스 브라우징 테스트 병행</li>
              </ul>
            </article>

            <article class="collaboration">
              <h3>📘 협업 및 산출물 관리</h3>
              <ul>
                <li><strong>Storybook:</strong> 컴포넌트 기반 문서화 및 협업 효율성 강화</li>
                <li><strong>SCSS 변수/믹스인:</strong> 디자인 가이드 템플릿화</li>
                <li>PC/MOBILE 공통 요소를 유연하게 분리·재사용 가능한 구조 적용</li>
              </ul>
            </article>
          </section>`,
        companyDescription: '국내 최고의 복지 서비스를 제공하는 기업으로, 직원들의 만족도를 최우선으로 하는 혁신적인 복지몰 플랫폼을 구축했습니다.',
        companyName: 'EZWEL',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, CSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/ezwel/product_01.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_02.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_03.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_04.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_05.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_06.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_07.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_08.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_09.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_10.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_11.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_12.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_13.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_14.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_15.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_16.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_17.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_18.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_19.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/ezwel/product_20.png',
            alt: '메인 페이지'
          },
        ],
        overview: {
          duration: '12개월',
          team: '총 10명',
          role: '웹퍼블리셔',
          goals: ['복지몰 사용자들의 접근성과 편의성 향상을 위한 모듈화된 UI 컴포넌트 제작,', '디자인 시스템 기반의 일관된 화면 구현', '다양한 사용자 디바이스 환경에 대응하기 위한 PC/Mobile 구분형 레이아웃 구조 설계' ]
        },
        techStack: {
          frontend: ['HTML', 'CSS', 'JavaScript', 'Nuxt.js', 'TypeScript'],
          tools: ['VS Code', 'Git', 'Figma', 'Storybook']
        },
        features: [
          {
            title: '모듈화된 UI 컴포넌트 제작',
            description: '컴포넌트 구조화로 재사용성 높이고, 디자인 시스템 기반의 일관된 화면 구현'
          },
          {
            title: '디자인 시스템 기반의 일관된 화면 구현',
            description: '피그마 디자인 시스템을 기반으로 일관된 디자인 구현'
          },
          {
            title: '다양한 사용자 디바이스 대응을 위한 반응형 및 적응형 구조 설계',
            description: 'PC/MOBILE 공통 요소를 유연하게 분리·재사용할 수 있도록 체계적인 구조로 퍼블리싱을 진행 중입니다.'
          }
        ],
        links: {
          website: '',
          github: ''
        }
      },
      {
        id: '2',
        swipermode: true,
        title: '스타벅스 임직원 하이브리드앱 프로젝트',
        category: 'MOBILE',
        image: '/images/products/project3.png',
        bgMedia: 'https://videos.pexels.com/video-files/28043968/12290715_2560_1440_24fps.mp4',
        mediaType: 'video',
        tags: ['Hybrid App', 'Mobile', 'UX/UI'],
        description: `<section class="project">
        <h2 class="sr-only">스타벅스 임직원 하이브리드 웹 프로젝트</h2>
        <p>
          스타벅스 임직원 전용 하이브리드 웹앱 구축 프로젝트입니다.<br>
          HTML5, SCSS, jQuery만을 사용하여 모바일 환경에 최적화된 UI/UX를 구현하였습니다.
        </p>
        <article class="project-details">
          <h3>✅ 주요 기술 스택</h3>
          <ul>
            <li><strong>HTML5</strong> - 시맨틱 마크업 및 웹 표준 준수</li>
            <li><strong>SCSS</strong> - 컴포넌트 기반 스타일링 및 유지보수성 강화</li>
            <li><strong>jQuery</strong> - 동적 UI 및 사용자 인터랙션 구현</li>
          </ul>
        </article>
        <article class="optimization">
          <h3>📱 모바일 웹 최적화</h3>
          <ul>
            <li>모바일 디바이스에 맞춘 반응형 레이아웃</li>
            <li>터치 기반 인터페이스 및 빠른 로딩 속도 구현</li>
            <li>임직원 업무 효율성을 위한 직관적인 UI 설계</li>
          </ul>
        </article>
      </section>`,
        companyDescription: '글로벌 커피 브랜드 스타벅스와 함께 임직원들의 업무 효율성을 극대화하는 하이브리드 앱을 개발했습니다.',
        companyName:'STARBUCKS',
        details: [
          {
            size: '720 x 1280',
            material: 'HTML, CSS, JavaScript, jQuery',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/starbucks/main.png',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/starbucks/main2.png',
            alt: '서브 페이지'
          },
          {
            url: '/images/products/starbucks/main3.png',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '3개월',
          team: '총 2명',
          role: '웹 퍼블리셔',
          goals: ['브랜드 아이덴티티 강화', '사용자 경험 개선']
        },
        techStack: {
          frontend: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '주요 기능',
            description: '모바일 환경에 최적화된 레이아웃 구현'
          },
        ],
        links: {
          website: 'https://ricoplgrim.github.io/StarbucksSiren119/',
          github: 'https://ricoplgrim.github.io/StarbucksSiren119/'
        }
      },
      {
        id: '3',
        swipermode: false,
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project4.png',
        bgMedia: 'https://homepage-static.fnf.co.kr/pcVideo_67db5edf809283.56040568.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '혁신적인 디지털 솔루션으로 기업의 브랜드 가치를 극대화하는 웹사이트 리뉴얼을 완료했습니다.',
        companyName: 'MLB KOREA',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, CSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '2개월',
          team: '팀 크기',
          role: '프론트엔드 개발자',
          goals: ['브랜드 아이덴티티 강화', '사용자 경험 개선']
        },
        techStack: {
          frontend: ['HTML', 'CSS', 'JavaScript'],
          backend: ['Node.js'],
          database: ['MongoDB'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '주요 기능 1',
            description: '기능 1에 대한 설명'
          },
          {
            title: '주요 기능 2',
            description: '기능 2에 대한 설명'
          }
        ],
        links: {
          website: 'http://example.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '4',
        swipermode: false,
        title: '더블유컨셉 USA 사이트 구축',
        category: 'PC',
        image: '/images/products/project5.png',
        bgMedia: 'https://videos.pexels.com/video-files/32013494/13644778_2560_1440_25fps.mp4',
        mediaType: 'video',
        tags: ['React', 'Website', 'USA'],
        description: '더블유컨셉 USA 브랜드의 공식 웹사이트를 구축한 프로젝트입니다. React를 활용하여 모던하고 인터랙티브한 사용자 경험을 제공합니다.',
        companyDescription: '더블유컨셉 USA와 협업하여 브랜드 아이덴티티를 반영한 모던한 웹사이트를 구축했습니다.',
        companyName: '더블유컨셉 USA',
        details: [
          {
            size: '1920 x 1080',
            material: 'React, JavaScript, CSS',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '3개월',
          team: '총 3명',
          role: '프론트엔드 개발자',
          goals: ['브랜드 아이덴티티 강화', '모던한 UI/UX 구현', 'React 기반 사이트 구축']
        },
        techStack: {
          frontend: ['React', 'JavaScript', 'CSS3', 'HTML5'],
          tools: ['VS Code', 'Git', 'npm']
        },
        features: [
          {
            title: 'React 기반 모던 웹사이트',
            description: 'React 컴포넌트 기반으로 구축된 모던하고 반응형 웹사이트'
          },
          {
            title: '브랜드 아이덴티티 반영',
            description: '더블유컨셉 USA 브랜드의 아이덴티티를 완벽하게 반영한 디자인'
          }
        ],
        links: {
          website: 'https://wconceptusa.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '5',
        swipermode: false,
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project5.png',
        bgMedia: 'https://videos.pexels.com/video-files/32013494/13644778_2560_1440_25fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '최신 웹 기술을 활용하여 기업의 디지털 프레즌스를 혁신적으로 업그레이드했습니다.',
        companyName: '디지털 프레즌스',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, CSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '2개월',
          team: '팀 크기',
          role: '프론트엔드 개발자',
          goals: ['브랜드 아이덴티티 강화', '사용자 경험 개선']
        },
        techStack: {
          frontend: ['HTML', 'CSS', 'JavaScript'],
          backend: ['Node.js'],
          database: ['MongoDB'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '주요 기능 1',
            description: '기능 1에 대한 설명'
          },
          {
            title: '주요 기능 2',
            description: '기능 2에 대한 설명'
          }
        ],
        links: {
          website: 'http://example.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '6',
        swipermode: false,
        title: '이커머스 라이프 사이트 구축 및 운영',
        category: 'PC',
        image: '/images/products/project6.png',
        bgMedia: 'https://videos.pexels.com/video-files/31646575/13482899_2560_1440_60fps.mp4',
        mediaType: 'video',
        tags: ['Vue.js', 'E-commerce', 'Website'],
        description: '라이프스타일 이커머스 플랫폼을 Vue.js로 구축하고 운영한 프로젝트입니다. 사용자 친화적인 인터페이스와 효율적인 쇼핑 경험을 제공합니다.',
        companyDescription: '라이프스타일 이커머스 플랫폼을 Vue.js로 구축하여 사용자들에게 편리한 쇼핑 경험을 제공하고 있습니다.',
        companyName: '라이프스타일 이커머스',
        details: [
          {
            size: '1920 x 1080',
            material: 'Vue.js, JavaScript, CSS',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '4개월',
          team: '총 4명',
          role: '프론트엔드 개발자',
          goals: ['Vue.js 기반 이커머스 사이트 구축', '사용자 경험 최적화', '지속적인 운영 및 유지보수']
        },
        techStack: {
          frontend: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5'],
          tools: ['VS Code', 'Git', 'npm']
        },
        features: [
          {
            title: 'Vue.js 기반 이커머스 플랫폼',
            description: 'Vue.js 컴포넌트 기반으로 구축된 모던한 이커머스 웹사이트'
          },
          {
            title: '라이프스타일 쇼핑몰 운영',
            description: '라이프스타일 관련 제품들을 효율적으로 관리하고 판매하는 플랫폼'
          }
        ],
        links: {
          website: 'https://lifestyle-ecommerce.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '7',
        swipermode: false,
        title: '까사미아 브랜드 사이트 재구축',
        category: 'PC',
        image: '/images/products/project7.png',
        bgMedia: 'https://videos.pexels.com/video-files/29792714/12800431_1920_1080_60fps.mp4',
        mediaType: 'video',
        tags: ['HTML', 'SCSS', 'JavaScript', 'Branding'],
        description: '까사미아 브랜드의 기존 사이트를 완전히 재구축한 프로젝트입니다. HTML, SCSS, JavaScript를 활용하여 브랜드 아이덴티티를 강화하고 사용자 경험을 개선했습니다.',
        companyDescription: '까사미아와 협업하여 기존 브랜드 사이트를 완전히 재구축하여 브랜드 가치를 극대화했습니다.',
        companyName: '까사미아',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, SCSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '3개월',
          team: '총 3명',
          role: '웹퍼블리셔',
          goals: ['기존 사이트 완전 재구축', '브랜드 아이덴티티 강화', '사용자 경험 개선']
        },
        techStack: {
          frontend: ['HTML5', 'SCSS', 'JavaScript'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '브랜드 사이트 완전 재구축',
            description: '기존 까사미아 사이트를 완전히 새롭게 재구축하여 브랜드 아이덴티티 강화'
          },
          {
            title: '모던한 웹 기술 적용',
            description: 'HTML5, SCSS, JavaScript를 활용한 모던하고 반응형 웹사이트 구현'
          }
        ],
        links: {
          website: 'https://casamia.co.kr',
          github: 'https://github.com/example'
        }
      },
      {
        id: '8',
        swipermode: false,
        title: '불스원 사이트 신규 구축',
        category: 'PC',
        image: '/images/products/project8.png',
        bgMedia: 'https://videos.pexels.com/video-files/30975000/13241693_2160_1440_24fps.mp4',
        mediaType: 'video',
        tags: ['HTML', 'SCSS', 'JavaScript', 'Branding'],
        description: '불스원 브랜드의 새로운 공식 웹사이트를 신규 구축한 프로젝트입니다. HTML, SCSS, JavaScript를 활용하여 브랜드 아이덴티티를 반영한 모던한 웹사이트를 구현했습니다.',
        companyDescription: '불스원과 협업하여 브랜드 아이덴티티를 완벽하게 반영한 새로운 공식 웹사이트를 신규 구축했습니다.',
        companyName: '불스원',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, SCSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '4개월',
          team: '총 4명',
          role: '웹퍼블리셔',
          goals: ['불스원 브랜드 사이트 신규 구축', '브랜드 아이덴티티 반영', '사용자 경험 최적화']
        },
        techStack: {
          frontend: ['HTML5', 'SCSS', 'JavaScript'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '브랜드 사이트 신규 구축',
            description: '불스원 브랜드의 새로운 공식 웹사이트를 완전히 새롭게 구축'
          },
          {
            title: '모던한 웹 기술 적용',
            description: 'HTML5, SCSS, JavaScript를 활용한 모던하고 반응형 웹사이트 구현'
          }
        ],
        links: {
          website: 'https://bullsone.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '9',
        swipermode: false,
        title: '불스원 사이트 신규 구축',
        category: 'PC',
        image: '/images/products/project9.png',
        bgMedia: 'https://videos.pexels.com/video-files/10741100/10741100-hd_2560_1440_30fps.mp4',
        mediaType: 'video',
        tags: ['HTML', 'SCSS', 'JavaScript', 'Branding'],
        description: '불스원 브랜드의 새로운 공식 웹사이트를 신규 구축한 프로젝트입니다. HTML, SCSS, JavaScript를 활용하여 브랜드 아이덴티티를 반영한 모던한 웹사이트를 구현했습니다.',
        companyDescription: '불스원과 협업하여 브랜드 아이덴티티를 완벽하게 반영한 새로운 공식 웹사이트를 신규 구축했습니다.',
        companyName: '불스원',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, SCSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '4개월',
          team: '총 4명',
          role: '웹퍼블리셔',
          goals: ['불스원 브랜드 사이트 신규 구축', '브랜드 아이덴티티 반영', '사용자 경험 최적화']
        },
        techStack: {
          frontend: ['HTML5', 'SCSS', 'JavaScript'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '브랜드 사이트 신규 구축',
            description: '불스원 브랜드의 새로운 공식 웹사이트를 완전히 새롭게 구축'
          },
          {
            title: '모던한 웹 기술 적용',
            description: 'HTML5, SCSS, JavaScript를 활용한 모던하고 반응형 웹사이트 구현'
          }
        ],
        links: {
          website: 'https://bullsone.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '10',
        swipermode: false,
        title: '팸퍼스 브랜드 사이트 구축',
        category: 'PC',
        image: '/images/products/project10.png',
        bgMedia: 'https://videos.pexels.com/video-files/32013494/13644778_2560_1440_25fps.mp4',
        mediaType: 'video',
        tags: ['Vue.js', 'SCSS', 'Branding'],
        description: '팸퍼스 브랜드의 공식 웹사이트를 Vue.js와 SCSS를 활용하여 구축한 프로젝트입니다. 모던한 프레임워크와 스타일링을 통해 브랜드 아이덴티티를 완벽하게 반영했습니다.',
        companyDescription: '팸퍼스와 협업하여 Vue.js와 SCSS를 활용한 모던한 브랜드 웹사이트를 구축했습니다.',
        companyName: '팸퍼스',
        details: [
          {
            size: '1920 x 1080',
            material: 'Vue.js, SCSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '3개월',
          team: '총 3명',
          role: '프론트엔드 개발자',
          goals: ['팸퍼스 브랜드 사이트 구축', 'Vue.js 기반 모던 웹사이트 구현', '브랜드 아이덴티티 반영']
        },
        techStack: {
          frontend: ['Vue.js', 'SCSS', 'JavaScript'],
          tools: ['VS Code', 'Git', 'npm']
        },
        features: [
          {
            title: 'Vue.js 기반 브랜드 사이트',
            description: 'Vue.js 컴포넌트 기반으로 구축된 모던하고 반응형 브랜드 웹사이트'
          },
          {
            title: 'SCSS 스타일링 시스템',
            description: 'SCSS를 활용한 체계적이고 유지보수가 용이한 스타일링 시스템 구축'
          }
        ],
        links: {
          website: 'https://pampers.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '11',
        swipermode: false,
        title: '샤니 브랜드 사이트 구축',
        category: 'PC',
        image: '/images/products/project11.png',
        bgMedia: 'https://videos.pexels.com/video-files/31646575/13482899_2560_1440_60fps.mp4',
        mediaType: 'video',
        tags: ['HTML', 'SCSS', 'JavaScript', 'Branding'],
        description: '샤니 브랜드의 공식 웹사이트를 HTML, SCSS, JavaScript를 활용하여 구축한 프로젝트입니다. 브랜드 아이덴티티를 완벽하게 반영한 모던한 웹사이트를 구현했습니다.',
        companyDescription: '샤니와 협업하여 HTML, SCSS, JavaScript를 활용한 브랜드 아이덴티티가 반영된 웹사이트를 구축했습니다.',
        companyName: '샤니',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, SCSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '3개월',
          team: '총 3명',
          role: '웹퍼블리셔',
          goals: ['샤니 브랜드 사이트 구축', '브랜드 아이덴티티 반영', '사용자 경험 최적화']
        },
        techStack: {
          frontend: ['HTML5', 'SCSS', 'JavaScript'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '브랜드 사이트 구축',
            description: '샤니 브랜드의 공식 웹사이트를 완전히 새롭게 구축'
          },
          {
            title: '모던한 웹 기술 적용',
            description: 'HTML5, SCSS, JavaScript를 활용한 모던하고 반응형 웹사이트 구현'
          }
        ],
        links: {
          website: 'https://shani.com',
          github: 'https://github.com/example'
        }
      },
      {
        id: '12',
        swipermode: false,
        title: '좋은사람들 리뉴얼 사이트',
        category: 'PC',
        image: '/images/products/project12.png',
        bgMedia: 'https://videos.pexels.com/video-files/30975000/13241693_2160_1440_24fps.mp4',
        mediaType: 'video',
        tags: ['HTML', 'SCSS', 'JavaScript', 'Renewal'],
        description: '좋은사람들 브랜드의 기존 사이트를 완전히 리뉴얼한 프로젝트입니다. HTML, SCSS, JavaScript를 활용하여 브랜드 아이덴티티를 강화하고 사용자 경험을 개선했습니다.',
        companyDescription: '좋은사람들과 협업하여 기존 브랜드 사이트를 완전히 리뉴얼하여 브랜드 가치를 극대화했습니다.',
        companyName: '좋은사람들',
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, SCSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '4개월',
          team: '총 6명',
          role: '웹퍼블리셔',
          goals: ['기존 사이트 완전 리뉴얼', '브랜드 아이덴티티 강화', '사용자 경험 개선']
        },
        techStack: {
          frontend: ['HTML5', 'SCSS', 'JavaScript'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '브랜드 사이트 완전 리뉴얼',
            description: '기존 좋은사람들 사이트를 완전히 새롭게 리뉴얼하여 브랜드 아이덴티티 강화'
          },
          {
            title: '모던한 웹 기술 적용',
            description: 'HTML5, SCSS, JavaScript를 활용한 모던하고 반응형 웹사이트 구현'
          }
        ],
        links: {
          website: 'https://goodpeople.co.kr',
          github: 'https://github.com/example'
        }
      },
      {
        id: '13',
        swipermode: false,
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project13.png',
        bgMedia: 'https://videos.pexels.com/video-files/10741100/10741100-hd_2560_1440_30fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '전문적인 웹 개발 역량과 창의적인 디자인으로 기업의 디지털 브랜딩을 성공적으로 완성했습니다.',
        companyName: '디지털 브랜딩',
        
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, CSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/item01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
        ],
        overview: {
          duration: '2개월',
          team: '팀 크기',
          role: '프론트엔드 개발자',
          goals: ['브랜드 아이덴티티 강화', '사용자 경험 개선']
        },
        techStack: {
          frontend: ['HTML', 'CSS', 'JavaScript'],
          backend: ['Node.js'],
          database: ['MongoDB'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '주요 기능 1',
            description: '기능 1에 대한 설명'
          },
          {
            title: '주요 기능 2',
            description: '기능 2에 대한 설명'
          }
        ],
        links: {
          website: 'http://example.com',
          github: 'https://github.com/example'
        }
      },
    ]
  }),
  
  getters: {
    getProjectById: (state: ProjectState) => (id: string) => {
      return state.projects.find((project: Project) => project.id === id);
    },
    getProjectsByCategory: (state: ProjectState) => (category: string) => {
      if (category === '전체') return state.projects;
      return state.projects.filter((project: Project) => project.category === category);
    }
  }
}); 