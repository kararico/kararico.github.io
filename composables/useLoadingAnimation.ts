import { gsap } from 'gsap'

export const useLoadingAnimation = () => {
  const loadingAni = gsap.timeline({
    onComplete: () => {
      // 인트로 애니메이션 시작
      const introAni = gsap.to('.sc-visual .txt-motion', {
        transformStyle: "preserve-3d",
        opacity: 1,
        rotationX: 0,
        transformOrigin: "50% 50%",
        yPercent: 0,
        duration: 1.2,
        stagger: 0.1,
        paused: true
      })
      introAni.play()
    }
  })

  loadingAni
    .addLabel('a')
    .to('.loading .list1', { y: '-280vw', duration: 4 }, 'a')
    .to('.loading .list2', { y: '-140vw', duration: 5 }, 'a')
    .to('.loading .list3', { y: '-340vw', duration: 3 }, 'a')
    .to('.loading', { yPercent: -100, display: 'none' }, 'a+=5')
} 