import { useScrollMemory } from './useScrollMemory'

export const usePageScroll = () => {
  const { saveScrollPosition, restoreScrollPosition } = useScrollMemory()
  const route = useRoute()
  
  // 페이지 진입 시 스크롤 위치 복원
  const onPageEnter = () => {
    if (process.client) {
      nextTick(() => {
        setTimeout(() => {
          restoreScrollPosition(route.path)
        }, 300) // 페이지 전환 애니메이션 완료 후 복원
      })
    }
  }
  
  // 페이지 이탈 시 스크롤 위치 저장
  const onPageLeave = () => {
    if (process.client) {
      saveScrollPosition(route.path)
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