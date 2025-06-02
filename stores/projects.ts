import { defineStore } from 'pinia';

interface Project {
  id: string;
  title: string;
  category: string[];
  image: string;
  description: string;
  period: string;
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project1.png',
        description: `복지몰 사이트 리뉴얼 구축 프로젝트에 웹 퍼블리셔로 참여하였습니다.

          기존 사이트의 UI 구조를 재정비하고, 사용자 중심의 경험을 제공하기 위해 마크업과 인터랙션 구현을 담당하고 있습니다. 프로젝트는 Nuxt.js 기반으로 구축되었으며, TypeScript를 적용하여 정적 타입의 안정성과 유지보수성을 확보했습니다.
          
          스타일링은 SCSS 전처리기를 활용하여 컴포넌트 기반의 구조화된 스타일 가이드를 구성하였습니다.
          본 프로젝트는 반응형 구조가 아닌, PC와 MOBILE을 분리하여 별도의 레이아웃 및 컴포넌트를 구축하는 방식으로 진행되고 있습니다.
          디바이스 환경에 따라 페이지가 완전히 분기되며, 각각의 사용 환경에 최적화된 UI를 제공합니다. 

          인터랙션 구현은 Lottie.js를 활용한 애니메이션 연동과 GSAP을 이용한 모션 효과 중심으로 구성하였습니다.
          페이지 진입, 스크롤 트리거, 버튼 액션 등 다양한 사용자 이벤트에 따라 생동감 있는 전환 효과를 구현하였습니다.

          웹 접근성과 웹 표준을 고려하여 시맨틱한 마크업을 유지하며,
          디자인 시안과의 싱크를 높이기 위해 다양한 브라우저 환경에서 크로스 테스트를 병행하였습니다.

          Storybook을 통해 컴포넌트 기반의 산출물을 문서화하고 있으며,
          디자이너 및 개발자와의 협업 효율을 높이기 위해 UI 시각화 및 재사용성을 고려한 구조로 개발하고 있습니다.

          SCSS 변수와 믹스인을 활용하여 디자인 가이드를 템플릿화하고,
          PC/MOBILE 공통 요소를 유연하게 분리·재사용할 수 있도록 체계적인 구조로 퍼블리싱을 진행 중입니다.`,
        period: '2024.11 - NOW',
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
        category: ['MOBILE'],
        image: '/images/products/project3.png',
        description: '스타벅스 임직원 하이브리드앱 프로젝트에 웹 퍼블리셔로 참여하였습니다.',
        period: '2024.01 - 2024.03',
        swiperUi: true,
        details: [
          {
            size: '720 x 1280',
            material: 'HTML, CSS, JavaScript, jQuery ',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project2.png',
        description: 'MLB KOREA 패션 이커머스 부분 개편 및 운영 프로젝트에 웹 퍼블리셔로 참여하였습니다.',
        period: '2023.12 - 2024.03',
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
          github: ''
        }
      },
  
      {
        id: '4',
        title: '기업 웹사이트 리뉴얼',
        category: ['PC', 'MOBILE'],
        image: '/images/products/project4.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project5.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project6.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project7.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project8.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project9.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project10.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        category: ['PC', 'MOBILE'],
        image: '/images/products/project11.png',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
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