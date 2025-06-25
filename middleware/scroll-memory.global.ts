import { useScrollMemory } from '~/composables/useScrollMemory'

export default defineNuxtRouteMiddleware((to, from) => {
  // 클라이언트 사이드에서만 실행
  if (process.client) {
    const { saveScrollPosition, restoreScrollPosition } = useScrollMemory()
    
    // 이전 페이지의 스크롤 위치 저장
    if (from.path !== '/') {
      saveScrollPosition(from.path)
    }
    
    // 새 페이지로 이동 시 저장된 스크롤 위치 복원
    if (to.path !== '/') {
      // 페이지 로드 완료 후 스크롤 위치 복원
      nextTick(() => {
        // DOM이 완전히 렌더링될 때까지 대기
        setTimeout(() => {
          restoreScrollPosition(to.path)
        }, 200) // 더 긴 지연을 두어 모든 컴포넌트가 마운트된 후 복원
      })
    } else {
      // 홈페이지로 이동 시 스크롤을 맨 위로
      nextTick(() => {
        window.scrollTo({
          top: 0,
          behavior: 'instant'
        })
      })
    }
  }
}) 