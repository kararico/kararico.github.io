import { useScrollMemory } from '~/composables/useScrollMemory'

export default defineNuxtRouteMiddleware((to, from) => {
  // 클라이언트 사이드에서만 실행
  if (process.client) {
    const { saveScrollPosition } = useScrollMemory()
    
    // 이전 페이지의 스크롤 위치 저장
    if (from.path !== to.path) {
      saveScrollPosition(from.path)
    }
    
    // 새 페이지로 이동 시 스크롤을 맨 위로
    if (to.path !== from.path) {
      nextTick(() => {
        window.scrollTo({
          top: 0,
          behavior: 'instant'
        })
      })
    }
  }
}) 