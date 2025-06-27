export const useScrollMemory = () => {
  const scrollPositions = ref<Record<string, number>>({})
  
  // localStorage에서 스크롤 위치 로드
  const loadScrollPositions = () => {
    if (process.client) {
      try {
        const saved = localStorage.getItem('nuxt-scroll-positions')
        if (saved) {
          scrollPositions.value = JSON.parse(saved)
        }
      } catch (error) {
        console.warn('Failed to load scroll positions:', error)
      }
    }
  }
  
  // localStorage에 스크롤 위치 저장
  const saveScrollPositionsToStorage = () => {
    if (process.client) {
      try {
        localStorage.setItem('nuxt-scroll-positions', JSON.stringify(scrollPositions.value))
      } catch (error) {
        console.warn('Failed to save scroll positions:', error)
      }
    }
  }
  
  // 스크롤 위치 저장
  const saveScrollPosition = (route: string) => {
    if (process.client) {
      scrollPositions.value[route] = window.scrollY
      saveScrollPositionsToStorage()
    }
  }
  
  // 스크롤 위치 복원 (헤더 높이 고려)
  const restoreScrollPosition = (route: string) => {
    if (process.client) {
      const savedPosition = scrollPositions.value[route]
      if (savedPosition !== undefined && savedPosition > 0) {
        // DOM이 완전히 렌더링될 때까지 대기
        setTimeout(() => {
          // 헤더 높이를 고려하여 스크롤 위치 조정
          const header = document.querySelector('.header') as HTMLElement
          const headerHeight = header ? header.offsetHeight : 0
          const adjustedPosition = Math.max(0, savedPosition - headerHeight)
          
          window.scrollTo({
            top: adjustedPosition,
            behavior: 'instant'
          })
        }, 50) // 짧은 지연으로 DOM 렌더링 완료 대기
      }
    }
  }
  
  // 현재 스크롤 위치 저장
  const saveCurrentScrollPosition = () => {
    if (process.client) {
      const route = useRoute()
      saveScrollPosition(route.path)
    }
  }
  
  // 스크롤 위치 초기화
  const clearScrollPositions = () => {
    scrollPositions.value = {}
    if (process.client) {
      localStorage.removeItem('nuxt-scroll-positions')
    }
  }
  
  // 특정 경로의 스크롤 위치 삭제
  const removeScrollPosition = (route: string) => {
    delete scrollPositions.value[route]
    saveScrollPositionsToStorage()
  }
  
  // 초기화 시 localStorage에서 데이터 로드
  if (process.client) {
    loadScrollPositions()
  }
  
  return {
    scrollPositions: readonly(scrollPositions),
    saveScrollPosition,
    restoreScrollPosition,
    saveCurrentScrollPosition,
    clearScrollPositions,
    removeScrollPosition
  }
} 