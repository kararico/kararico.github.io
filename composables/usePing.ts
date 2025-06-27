export const usePing = () => {
  // 현재 프로토콜과 호스트 정보를 안전하게 가져오기
  const getPingHostProtocol = () => {
    if (process.client) {
      return window.location.protocol
    }
    return 'https:'
  }

  const getHostAndPath = () => {
    if (process.client) {
      return window.location.host + window.location.pathname
    }
    return 'localhost:3000'
  }

  // ping 함수
  const pingServer = async () => {
    try {
      const pingHostProtocol = getPingHostProtocol()
      const hostAndPath = getHostAndPath()
      
      const response = await fetch(`${pingHostProtocol}//${hostAndPath}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      return response.ok
    } catch (error) {
      console.error('Ping failed:', error)
      return false
    }
  }

  return {
    pingServer,
    getPingHostProtocol,
    getHostAndPath
  }
} 