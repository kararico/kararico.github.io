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
  
  // 스크롤 위치 복원
  const restoreScrollPosition = (route: string) => {
    if (process.client) {
      const savedPosition = scrollPositions.value[route]
      if (savedPosition !== undefined && savedPosition > 0) {
        // 다음 tick에서 스크롤 위치 복원
        nextTick(() => {
          window.scrollTo({
            top: savedPosition,
            behavior: 'instant'
          })
        })
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