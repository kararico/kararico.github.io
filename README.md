# 2025 정원 포트폴리오

웹퍼블리셔 정원(JUNGWON)의 2025년 포트폴리오 사이트입니다.

## 🚀 기술 스택

- **프레임워크**: Nuxt.js 3.7.0
- **언어**: Vue.js 3, TypeScript
- **상태관리**: Pinia
- **스타일링**: SCSS/Sass
- **애니메이션**: GSAP (GreenSock Animation Platform)
- **슬라이더**: Swiper
- **이메일 서비스**: EmailJS
- **배포**: GitHub Pages

## 📁 프로젝트 구조

```
kararico.github.io/
├── 📄 app.vue                    # 루트 앱 컴포넌트
├── 📄 nuxt.config.ts             # Nuxt 설정 파일
├── 📄 package.json               # 프로젝트 의존성 및 스크립트
├── 📄 tsconfig.json              # TypeScript 설정
├── 📄 .eslintrc.js               # ESLint 설정
├── 📄 yarn.lock                  # Yarn 락 파일
├── 📄 extensions.txt             # VS Code 확장 프로그램 목록
├── 📄 test.html                  # 테스트 HTML 파일
│
├── 📁 .git/                      # Git 저장소
├── 📁 .github/                   # GitHub Actions 및 설정
├── 📁 .nuxt/                     # Nuxt 빌드 파일 (자동 생성)
├── 📁 .output/                   # Nuxt 출력 파일 (자동 생성)
├── 📁 dist/                      # 배포용 빌드 파일
├── 📁 node_modules/              # Node.js 의존성 패키지
│
├── 📁 assets/                    # 정적 리소스
│   ├── 📁 css/                   # CSS 파일들
│   ├── 📁 fonts/                 # 폰트 파일들
│   ├── 📁 images/                # 이미지 파일들
│   ├── 📁 js/                    # JavaScript 파일들
│   ├── 📁 scss/                  # SCSS 스타일 파일들
│   └── 📁 videos/                # 비디오 파일들
│
├── 📁 components/                # Vue 컴포넌트
│   ├── 📁 common/                # 공통 컴포넌트
│   ├── 📄 About.vue              # 소개 섹션 컴포넌트
│   ├── 📄 Client.vue             # 클라이언트 섹션 컴포넌트
│   ├── 📄 Contact.vue            # 연락처 컴포넌트
│   ├── 📄 Cursor.vue             # 커스텀 커서 컴포넌트
│   ├── 📄 Footer.vue             # 푸터 컴포넌트
│   ├── 📄 Header.vue             # 헤더 컴포넌트
│   ├── 📄 Loading.vue            # 로딩 컴포넌트
│   ├── 📄 Project.vue            # 프로젝트 섹션 컴포넌트
│   ├── 📄 ProjectCard.vue        # 프로젝트 카드 컴포넌트
│   ├── 📄 ScrollTop.vue          # 스크롤 탑 버튼 컴포넌트
│   └── 📄 Visual.vue             # 비주얼 섹션 컴포넌트
│
├── 📁 composables/               # Vue Composable 함수들
├── 📁 layouts/                   # 레이아웃 컴포넌트
├── 📁 middleware/                # Nuxt 미들웨어
├── 📁 pages/                     # 라우트 페이지들
│   ├── 📁 projects/              # 프로젝트 관련 페이지들
│   ├── 📄 about.vue              # 소개 페이지
│   ├── 📄 client.vue             # 클라이언트 페이지
│   ├── 📄 contact.vue            # 연락처 페이지
│   ├── 📄 error.vue              # 에러 페이지
│   ├── 📄 guide.vue              # 가이드 페이지
│   └── 📄 index.vue              # 메인 페이지
│
├── 📁 plugins/                   # Nuxt 플러그인
├── 📁 public/                    # 정적 파일 (빌드 시 복사됨)
├── 📁 server/                    # 서버 사이드 코드
└── 📁 stores/                    # Pinia 상태 관리 스토어
```

## 🎯 주요 기능

### 📱 반응형 웹 디자인
- 모바일, 태블릿, 데스크톱 완벽 지원
- 다양한 화면 크기에 최적화된 레이아웃

### ✨ 애니메이션 효과
- GSAP를 활용한 부드러운 애니메이션
- 스크롤 기반 애니메이션
- 페이지 전환 효과

### 🎨 인터랙티브 요소
- 커스텀 커서 효과
- 스크롤 탑 버튼
- 로딩 애니메이션

### 📧 연락처 기능
- EmailJS를 통한 이메일 전송
- 폼 유효성 검사
- 실시간 피드백

### 🖼️ 포트폴리오 갤러리
- 프로젝트 카드 형태의 갤러리
- Swiper를 활용한 슬라이더
- 프로젝트 상세 정보 표시

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 19.9.0 이상
- Yarn 또는 npm

### 설치 및 실행

```bash
# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev

# 프로덕션 빌드
npm run build
# 또는
yarn build

# 정적 사이트 생성 (GitHub Pages용)
npm run generate
# 또는
yarn generate

# 빌드 결과 미리보기
npm run preview
# 또는
yarn preview
```

### 추가 스크립트

```bash
# 프로젝트 정리 (node_modules, 빌드 파일 삭제)
npm run clean

# 정리 후 재설치
npm run clean-install

# Yarn으로 설치 (선택적 의존성 제외)
npm run yarn-install
```

## 🌐 배포 정보

- **도메인**: https://kararico.github.io
- **배포 플랫폼**: GitHub Pages
- **배포 방식**: 정적 사이트 생성 (SSG)
- **SSR**: 비활성화 (SPA 모드)
<!-- 
## 📋 환경 변수

프로젝트에서 사용하는 환경 변수들:

```typescript
// nuxt.config.ts
runtimeConfig: {
  public: {
    emailjsServiceId: 'service_kcpb8c8',
    emailjsTemplateId: 'template_svlyog9',
    emailjsPublicKey: '2mwZfZ5PDdllye2lc'
  }
}
``` -->

## 🎨 디자인 시스템

### 폰트 패밀리
- **한글**: Pretendard, Noto Sans KR, GmarketSansMedium
- **영문**: Playfair Display, Zephyr, Fahkwang, Kaushan Script

### 아이콘
- Font Awesome 6.5.1

### 색상 및 스타일
- SCSS를 활용한 모듈화된 스타일링
- CSS 변수를 통한 테마 관리

## 🔧 개발 가이드

### 컴포넌트 작성 규칙
- Vue 3 Composition API 사용
- TypeScript 타입 정의
- Props 및 Emits 명시적 정의

### 스타일링 가이드
- SCSS 모듈화
- BEM 방법론 적용
- 반응형 디자인 우선

### 성능 최적화
- 이미지 최적화
- 코드 스플리팅
- 지연 로딩 적용

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 👤 연락처

- **이름**: 정원 (JUNGWON)
- **직무**: 웹퍼블리셔
- **연도**: 2025
