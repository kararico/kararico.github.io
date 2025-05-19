<template>
	<footer class="footer" id="contact" role="contentinfo">
		<div class="footer__top-area">
			<div class="footer__txt-box">
				<h2 class="footer__tit">
					<a href="mailto:ixkfo86@gmail.com" class="footer__link-mail" aria-label="이메일로 연락하기">Let's talk!</a>
				</h2>
			</div>
			<nav class="footer__link-area" aria-label="소셜 미디어 링크">
				<div class="footer__box">
					<a class="footer__link-mail" href="mailto:ixkfo86@gmail.com" aria-label="이메일 보내기">
						<img src="@/assets/images/layout/footer/email_white.png" alt="이메일 아이콘" width="24" height="24">
					</a>
				</div>
				<div class="footer__box">
					<a class="footer__link-phone" href="tel:01091819744" aria-label="전화하기">
						<img src="@/assets/images/layout/footer/call_white.png" alt="전화 아이콘" width="24" height="24">
					</a>
				</div>
				<div class="footer__box">
					<a target="_blank" href="https://www.instagram.com/heojeongweon2087?igsh=dXRpNHh6dmkzb2cx" class="footer__link-velog" aria-label="인스타그램 방문하기" rel="noopener noreferrer">
						<img src="@/assets/images/layout/footer/instar_white.png" alt="인스타그램 아이콘" width="24" height="24">
					</a>
				</div>
				<div class="footer__box">
					<a target="_blank" href="https://github.com/kararico" class="footer__link-github" aria-label="깃허브 방문하기" rel="noopener noreferrer">
						<img src="@/assets/images/layout/footer/github_white.png" alt="깃허브 아이콘" width="24" height="24">
					</a>
				</div>
			</nav>
		</div>
		<div class="footer__bottom-area">
			<small class="footer__copy">©2025 All rights reserved.</small>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 포커스 시 아웃라인 스타일 적용 함수
const handleFocus = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.tagName === 'A') {
    target.style.outline = '2px solid v.$main-color'
    target.style.outlineOffset = '2px'
  }
}

// 포커스 해제 시 아웃라인 스타일 제거 함수
const handleBlur = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.tagName === 'A') {
    target.style.outline = 'none'
  }
}

// 컴포넌트 마운트 시 실행
onMounted(() => {
  // 모든 푸터 링크에 키보드 접근성 이벤트 리스너 추가
  const links = document.querySelectorAll('.footer a')
  links.forEach(link => {
    link.addEventListener('focus', handleFocus as EventListener)
    link.addEventListener('blur', handleBlur as EventListener)
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

// 푸터 기본 스타일
.footer {
  position: relative;
  z-index: 10;
  background-color: #111;

  // 푸터 상단 영역
  .footer__top-area {
    display: flex;
    justify-content: space-between;
    border: solid rgba(255, 255, 255, 0.3);
    border-width: 1px 0;

    @include tablet {
      flex-direction: column;
    }
    @include mobile {
      flex-direction: column;
	  border:0;
    }

    // 푸터 텍스트 박스
    .footer__txt-box {
      flex: 1;
      position: relative;

      // 푸터 제목
      .footer__tit {
        text-align: center;
        font-size: 5rem;
        font-family: v.$font-en5;
        padding: 4rem;
        transition: 0.5s cubic-bezier(1, 0, 0, 1);

        @include mobile {
          padding: 1.2rem;
          font-size: 1.5rem;
        }

        a {
          text-decoration: none;
          color: inherit;

          &:focus-visible {
            outline: 2px solid v.$main-color;
            outline-offset: 2px;
          }
        }
      }

      // 호버 효과를 위한 가상 요소
      &::after {
        content: "";
        position: absolute;
        top: 0;
        height: 0;
        width: 100%;
        background-color: v.$main-color;
        left: 0;
        transition: all 0.5s cubic-bezier(1, 0, 0, 1);
        z-index: -1;
      }

      // 데스크톱 호버 효과
      @media (hover: hover) {
        &:hover {
          &::after {
            height: 100%;
          }

          .footer__tit {
            color: #fff;
            z-index: 10;
          }
        }
      }
      // 모바일에서 호버 효과 제거
      @media (hover: none) and (pointer: coarse) {
        &:hover {
          &::after {
            height: 0 !important;
          }
          .footer__tit {
            color: inherit !important;
            z-index: auto !important;
          }
        }
      }
    }

    // 푸터 링크 영역
    .footer__link-area {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include tablet {
        border-top: 1px solid rgba(255, 255, 255, 0.3);
      }

      @include mobile {
        justify-content: center;
        gap: 1rem;
      }

      a {
        display: block;
        padding: 3.5rem;
        text-decoration: none;
        color: inherit;

        &:focus-visible {
          outline: 2px solid v.$main-color;
          outline-offset: 2px;
        }

        @include mobile {
          padding: .5rem;
        }
      }

      // 각 링크 박스
      .footer__box {
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        @include tablet {
          flex: 1;
          padding: 4rem;

          &:first-child {
            border: none;
          }
        }

		@include mobile {
			border:0;	
		}
        img {
          transition: all 0.5s cubic-bezier(1, 0, 0, 1);
          width: 2.5rem;
          height: auto;

          @include mobile {
            width: 1.5rem;
          }
        }

        // 호버 효과를 위한 가상 요소
        &::after {
          content: "";
          position: absolute;
          top: 0;
          height: 0;
          width: 100%;
          background-color: v.$main-color;
          left: 0;
          transition: all 0.5s cubic-bezier(1, 0, 0, 1);
          z-index: -1;
        }

        // 데스크톱 호버 효과
        @media (hover: hover) {
          &:hover {
            &::after {
              height: 100%;
            }
          }
        }
        // 모바일에서 호버 효과 제거
        @media (hover: none) and (pointer: coarse) {
          &:hover {
            &::after {
              height: 0 !important;
            }
          }
        }
      }

      // 이메일, 전화 링크 아이콘
      .footer__link-mail,
      .footer__link-phone {
        img {
          width: 2.5rem;

          @include mobile {
            width: 1.5rem;
          }
        }
      }

      // 인스타그램, 깃허브 링크 아이콘
      .footer__link-velog,
      .footer__link-github {
        img {
          width: 3.5rem;

          @include mobile {
            width: 1.5rem;
          }
        }
      }
    }
  }

  // 푸터 하단 영역
  .footer__bottom-area {
    padding: 1rem 0 1rem 4rem;
    text-align: center;

    @include mobile {
      padding: 1.4rem;
    }

    // 저작권 텍스트
    .footer__copy {
      font-size: 1.4rem;
      font-family: v.$font-kn1;
      color: rgba(255, 255, 255, 0.5);
	  opacity: .4;
      @include mobile {
        font-size: 1.2rem;
      }
    }
  }
}
</style>