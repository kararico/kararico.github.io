export const useSafeFetch = () => {
  // 안전한 fetch 함수
  const safeFetch = async (url: string, options?: RequestInit) => {
    try {
      // URL이 상대 경로인 경우 현재 도메인을 기준으로 절대 경로로 변환
      if (url.startsWith('/')) {
        if (process.client) {
          url = window.location.origin + url
        } else {
          url = 'http://localhost:3000' + url
        }
      }
      
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      })
      
      return response
    } catch (error) {
      console.error('Fetch failed:', error)
      throw error
    }
  }

  // 현재 도메인으로 ping
  const pingCurrentDomain = async () => {
    try {
      if (process.client) {
        const response = await fetch(window.location.origin, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        return response.ok
      }
      return true
    } catch (error) {
      console.error('Ping current domain failed:', error)
      return false
    }
  }

  return {
    safeFetch,
    pingCurrentDomain
  }
} 