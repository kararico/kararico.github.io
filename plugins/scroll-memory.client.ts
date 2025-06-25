import { useScrollMemory } from '~/composables/useScrollMemory'

export default defineNuxtPlugin(() => {
  const { saveCurrentScrollPosition } = useScrollMemory()
  
  // 스크롤 이벤트 리스너 추가
  let scrollTimeout: NodeJS.Timeout
  const handleScroll = () => {
    // 스크롤이 끝난 후 100ms 뒤에 위치 저장 (성능 최적화)
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      saveCurrentScrollPosition()
    }, 100)
  }
  
  // 페이지 언로드 시 현재 스크롤 위치 저장
  const handleBeforeUnload = () => {
    saveCurrentScrollPosition()
  }
  
  // 이벤트 리스너 등록
  if (process.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // 플러그인 언마운트 시 이벤트 리스너 제거
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearTimeout(scrollTimeout)
    })
  }
}) 