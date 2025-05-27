import { defineStore } from 'pinia';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  period: string;
  location: string;
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
    backend: string[];
    database: string[];
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
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/item01.jpg',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
        location: '서울',
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
        id: '2',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/item01.jpg',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
        location: '서울',
        swiperUi: false,
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
        id: '3',
        title: '기업 웹사이트 리뉴얼',
        category: '기업브랜딩',
        image: '/images/products/item01.jpg',
        description: '기업의 브랜드 아이덴티티를 강화하고 사용자 경험을 개선한 웹사이트 리뉴얼 프로젝트입니다.',
        period: '2024.01 - 2024.03',
        location: '서울',
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