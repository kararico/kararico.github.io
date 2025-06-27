import { usePing } from '~/composables/usePing'

export default defineNuxtRouteMiddleware((to, from) => {
  // 클라이언트 사이드에서만 실행
  if (process.client) {
    const { pingServer } = usePing()
    
    // 페이지 이동 시 서버 ping (선택적)
    // 실제로는 필요하지 않을 수 있으므로 주석 처리
    /*
    nextTick(() => {
      pingServer().then(success => {
        if (!success) {
          console.warn('Server ping failed during navigation')
        }
      })
    })
    */
  }
}) 