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
  swiperUi: boolean;
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
}

interface ProjectState {
  projects: Project[];
}

export const useProjectStore = defineStore('projects', {
  state: (): ProjectState => ({
    projects: [
      {
        id: '1',
        title: '복지몰 웹사이트 리뉴얼',
        category: 'PC',
        image: '/images/products/project1.png',
        bgMedia: 'https://img.ezwelfare.net/welfare_corp/css/user/front/renew/images/main_visual01.mp4',
        mediaType: 'video',
        tags: ['UX/UI', 'Website', 'Admin System'],
        description: `<section class="project">
            <h2>복지몰 사이트 리뉴얼 구축 프로젝트</h2>
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
        companyName: '이지웰(주)',
        swiperUi: true,
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, CSS, JavaScript',
            year: '2024'
          }
        ],
        images: [
          {
            url: '/images/products/project-detail_img01.jpg',
            alt: '메인 페이지'
          },
          {
            url: '/images/products/item01.jpg',
            alt: '서브 페이지'
          }
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
        title: '스타벅스 임직원 하이브리드앱 프로젝트',
        category: 'MOBILE',
        image: '/images/products/project3.png',
        bgMedia: 'https://videos.pexels.com/video-files/28043968/12290715_2560_1440_24fps.mp4',
        mediaType: 'video',
        tags: ['Hybrid App', 'Mobile', 'UX/UI'],
        description: '스타벅스 임직원 하이브리드앱 프로젝트에 웹 퍼블리셔로 참여하였습니다.',
        companyDescription: '글로벌 커피 브랜드 스타벅스와 함께 임직원들의 업무 효율성을 극대화하는 하이브리드 앱을 개발했습니다.',
        companyName: '스타벅스 코리아',
        swiperUi: true,
        details: [
          {
            size: '720 x 1280',
            material: 'HTML, CSS, JavaScript, jQuery',
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
          website: '',
          github: ''
        }
      },
      {
        id: '3',
        title: '패션 이커머스 부분 개편 및 운영',
        category: 'PC',
        image: '/images/products/project2.png',
        bgMedia: 'https://cdn.prod.website-files.com/646a4e539ffa024a48651555/649070038794a919744c0b8f_background-video-1280x720-30fps-transcode.mp4',
        mediaType: 'video',
        tags: ['E-commerce', 'Fashion', 'UI 개선'],
        description: 'MLB KOREA 패션 이커머스 부분 개편 및 운영 프로젝트에 웹 퍼블리셔로 참여하였습니다.',
        companyDescription: 'MLB KOREA와 협업하여 패션 이커머스 플랫폼의 사용자 경험을 혁신적으로 개선했습니다.',
        companyName: 'MLB KOREA',
        swiperUi: false,
        details: [
          {
            size: '1920 x 1080',
            material: 'HTML, CSS, JavaScript, jQuery',
            year: '2023 ~ 2024'
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
          team: '총 2명',
          role: '웹퍼블리셔',
          goals: ['브랜드 아이덴티티 강화', '사용자 경험 개선', '웹 표준 준수']
        },
        techStack: {
          frontend: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
          tools: ['VS Code', 'Git']
        },
        features: [
          {
            title: '주요 기능 1',
            description: '사용자 UI 개선'
          },
          {
            title: '주요 기능 2',
            description: '모바일 환경에 최적화된 레이아웃 구현'
          }
        ],
        links: {
          website: 'https://www.mlb-korea.com/',
          github: 'https://github.com/example'
        }
      },
  
      {
        id: '4',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project4.png',
        bgMedia: 'https://homepage-static.fnf.co.kr/pcVideo_67db5edf809283.56040568.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '혁신적인 디지털 솔루션으로 기업의 브랜드 가치를 극대화하는 웹사이트 리뉴얼을 완료했습니다.',
        companyName: '테크 솔루션즈',
        swiperUi: true,
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
        id: '5',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project5.png',
        bgMedia: 'https://videos.pexels.com/video-files/32013494/13644778_2560_1440_25fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '최신 웹 기술을 활용하여 기업의 디지털 프레즌스를 혁신적으로 업그레이드했습니다.',
        companyName: '디지털 프레즌스',
        swiperUi: true,
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
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project6.png',
        bgMedia: 'https://videos.pexels.com/video-files/31646575/13482899_2560_1440_60fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '사용자 중심의 디자인으로 기업의 온라인 브랜딩을 완전히 새롭게 재정의했습니다.',
        companyName: '브랜드 리뉴얼',
        swiperUi: true,
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
        id: '7',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project7.png',
        bgMedia: 'https://videos.pexels.com/video-files/29792714/12800431_1920_1080_60fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '모던한 웹 디자인과 최적화된 사용자 경험으로 기업의 디지털 전환을 성공적으로 이끌었습니다.',
        companyName: '디지털 전환',
        swiperUi: true,
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
        id: '8',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project8.png',
        bgMedia: 'https://videos.pexels.com/video-files/30975000/13241693_2160_1440_24fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '반응형 웹 디자인과 인터랙티브 요소를 통해 기업의 온라인 존재감을 대폭 향상시켰습니다.',
        companyName: '온라인 브랜딩',
        swiperUi: true,
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
        id: '9',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project9.png',
        bgMedia: 'https://videos.pexels.com/video-files/10741100/10741100-hd_2560_1440_30fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '크리에이티브한 디자인과 기술적 혁신으로 기업의 디지털 아이덴티티를 완전히 새롭게 구축했습니다.',
        companyName: '크리에이티브 솔루션',
        swiperUi: true,
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
        id: '10',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project10.png',
        bgMedia: 'https://videos.pexels.com/video-files/32013494/13644778_2560_1440_25fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '최첨단 웹 기술과 창의적인 디자인으로 기업의 온라인 브랜드 가치를 극대화했습니다.',
        companyName: '브랜드 가치',
        swiperUi: true,
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
        id: '11',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project11.png',
        bgMedia: 'https://videos.pexels.com/video-files/31646575/13482899_2560_1440_60fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '사용자 경험 중심의 디자인과 최적화된 성능으로 기업의 디지털 마케팅 효과를 대폭 증대시켰습니다.',
        companyName: '디지털 마케팅',
        swiperUi: true,
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
        id: '12',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project12.png',
        bgMedia: 'https://videos.pexels.com/video-files/30975000/13241693_2160_1440_24fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '혁신적인 UI/UX 디자인과 최신 웹 표준을 적용하여 기업의 온라인 경쟁력을 크게 향상시켰습니다.',
        companyName: 'UI/UX 혁신',
        swiperUi: true,
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
        id: '13',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/project13.png',
        bgMedia: 'https://videos.pexels.com/video-files/10741100/10741100-hd_2560_1440_30fps.mp4',
        mediaType: 'video',
        tags: ['Branding', 'Website', 'Renewal'],
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        companyDescription: '전문적인 웹 개발 역량과 창의적인 디자인으로 기업의 디지털 브랜딩을 성공적으로 완성했습니다.',
        companyName: '디지털 브랜딩',
        swiperUi: true,
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