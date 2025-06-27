import { useScrollMemory } from './useScrollMemory'

export const usePageScroll = () => {
  const { saveScrollPosition, restoreScrollPosition } = useScrollMemory()
  const route = useRoute()
  
  // 페이지 진입 시 스크롤 위치 복원 (미들웨어에서 처리하므로 비활성화)
  const onPageEnter = () => {
    // 미들웨어에서 이미 처리하므로 여기서는 추가 작업만 수행
    if (process.client) {
      // 페이지 전환 애니메이션이 완료된 후 추가적인 스크롤 조정이 필요한 경우
      nextTick(() => {
        // 헤더 높이만큼 추가 조정이 필요한 경우
        const header = document.querySelector('.header') as HTMLElement
        if (header && window.scrollY > 0) {
          const headerHeight = header.offsetHeight
          const currentScroll = window.scrollY
          if (currentScroll < headerHeight) {
            window.scrollTo({
              top: headerHeight,
              behavior: 'smooth'
            })
          }
        }
      })
    }
  }
  
  // 페이지 이탈 시 스크롤 위치 저장 (미들웨어에서 처리하므로 비활성화)
  const onPageLeave = () => {
    // 미들웨어에서 이미 처리하므로 여기서는 추가 작업만 수행
    if (process.client) {
      // 페이지 이탈 시 필요한 정리 작업
    }
  }
  
  // 특정 요소로 스크롤
  const scrollToElement = (selector: string, offset: number = 0) => {
    if (process.client) {
      const element = document.querySelector(selector)
      if (element) {
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset + rect.top - offset
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        })
      }
    }
  }
  
  // 맨 위로 스크롤
  const scrollToTop = () => {
    if (process.client) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
  
  // 현재 스크롤 위치 가져오기
  const getCurrentScrollPosition = () => {
    if (process.client) {
      return window.scrollY
    }
    return 0
  }
  
  return {
    onPageEnter,
    onPageLeave,
    scrollToElement,
    scrollToTop,
    getCurrentScrollPosition
  }
} 