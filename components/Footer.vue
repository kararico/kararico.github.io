<template>
	<footer class="footer" id="contact" role="contentinfo">
		<div class="top-area">
			<div class="txt-box">
				<h2 class="tit">
					<a href="mailto:ixkfo86@gmail.com" class="link-mail" aria-label="이메일로 연락하기">Let's talk!</a>
				</h2>
			</div>
			<nav class="link-area" aria-label="소셜 미디어 링크">
				<div class="message box">
					<a class="link-mail" href="mailto:ixkfo86@gmail.com" aria-label="이메일 보내기">
						<img src="@/assets/images/layout/footer/email_white.png" alt="이메일 아이콘" width="24" height="24">
					</a>
				</div>
				<div class="phone box">
					<a class="link-phone" href="tel:01091819744" aria-label="전화하기">
						<img src="@/assets/images/layout/footer/call_white.png" alt="전화 아이콘" width="24" height="24">
					</a>
				</div>
				<div class="velog box">
					<a target="_blank" href="javascript:void(0)" class="link-velog" aria-label="벨로그 방문하기" rel="noopener noreferrer">
						<img src="@/assets/images/layout/footer/velog_white.png" alt="벨로그 아이콘" width="24" height="24">
					</a>
				</div>
				<div class="github box">
					<a target="_blank" href="https://github.com/kararico" class="link-github" aria-label="깃허브 방문하기" rel="noopener noreferrer">
						<img src="@/assets/images/layout/footer/github_white.png" alt="깃허브 아이콘" width="24" height="24">
					</a>
				</div>
			</nav>
		</div>
		<div class="bottom-area">
			<small class="copy">©2025 All rights reserved.</small>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 키보드 접근성을 위한 포커스 스타일
const handleFocus = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.tagName === 'A') {
    target.style.outline = '2px solid v.$main-color'
    target.style.outlineOffset = '2px'
  }
}

const handleBlur = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.tagName === 'A') {
    target.style.outline = 'none'
  }
}

onMounted(() => {
  // 키보드 접근성 이벤트 리스너 추가
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

.footer {
  position: relative;
  z-index: 10;
  background-color: #111;

  .top-area {
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

    .txt-box {
      flex: 1;
      position: relative;

      .tit {
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

      @media (hover: hover) {
        &:hover {
          &::after {
            height: 100%;
          }

          .tit {
            color: #000;
            z-index: 10;
          }
        }
      }
    }

    .link-area {
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

      .box {
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        @include tablet {
          flex: 1;
          padding: 7rem;

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

        @media (hover: hover) {
          &:hover {
            &::after {
              height: 100%;
            }
          }
        }
      }

      .link-mail,
      .link-phone {
        img {
          width: 2.5rem;

          @include mobile {
            width: 1.5rem;
          }
        }
      }

      .link-velog,
      .link-github {
        img {
          width: 3.5rem;

          @include mobile {
            width: 1.5rem;
          }
        }
      }
    }
  }

  .bottom-area {
    padding: 1rem 0 1rem 4rem;
    text-align: center;

    @include mobile {
      padding: 1.4rem;
    }

    .copy {
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