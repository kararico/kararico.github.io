<template>
	<footer class="footer" id="contact" role="contentinfo">
		<div class="footer__container">
			<div class="footer__content" v-if="false">
				<div class="footer__contact">
					<h2 class="footer__title">Contact us</h2>
					<p class="footer__email">
						<a href="mailto:ixkfo86@gmail.com" aria-label="이메일로 연락하기">ixkfo86@gmail.com</a>
					</p>
				</div>
				<nav class="footer__social" aria-label="소셜 미디어 링크">
					<a class="footer__social-link" href="mailto:ixkfo86@gmail.com" aria-label="이메일 보내기">
						<img src="@/assets/images/layout/footer/email_white.png" alt="이메일 아이콘" width="24" height="24">
					</a>
					<a class="footer__social-link" href="tel:01091819744" aria-label="전화하기">
						<img src="@/assets/images/layout/footer/call_white.png" alt="전화 아이콘" width="24" height="24">
					</a>
					<a class="footer__social-link" target="_blank" href="https://www.instagram.com/heojeongweon2087?igsh=dXRpNHh6dmkzb2cx" aria-label="인스타그램 방문하기" rel="noopener noreferrer">
						<img src="@/assets/images/layout/footer/instar_white.png" alt="인스타그램 아이콘" width="24" height="24">
					</a>
					<a class="footer__social-link" target="_blank" href="https://github.com/kararico" aria-label="깃허브 방문하기" rel="noopener noreferrer">
						<img src="@/assets/images/layout/footer/github_white.png" alt="깃허브 아이콘" width="24" height="24">
					</a>
				</nav>
			</div>
			<div class="footer__bottom">
				<small class="footer__copyright">©2025 All rights reserved.</small>
			</div>
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

.footer {
  background-color: #111;
  padding: 2rem 0 2rem;
  color: #fff;
  position: relative;

  @include mobile {
    padding: 3rem 0 1.5rem;
  }

  .footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @include tablet {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }
    
    @include mobile {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }
  }

  .footer__contact {
    .footer__title {
      font-size: 2.5rem;
      font-family: v.$font-en5;
      margin-bottom: 1rem;
      font-weight: 600;

      @include mobile {
        font-size: 2rem;
      }
    }

    .footer__email {
      font-size: 1.1rem;
      opacity: 0.8;

      a {
        color: inherit;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 1;
        }

        &:focus-visible {
          outline: 2px solid v.$main-color;
          outline-offset: 2px;
        }
      }
    }
  }

  .footer__social {
    display: flex;
    gap: 1.5rem;

    @include mobile {
      gap: 1rem;
    }

    .footer__social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;

      @include mobile {
        width: 2.5rem;
        height: 2.5rem;
      }

      img { 
        width: 1.5rem;
        height: 1.5rem;
        opacity: 0.8;
        transition: opacity 0.3s ease;

        @include mobile {
          width: 1.2rem;
          height: 1.2rem;
        }
      }

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        img {
          opacity: 1;
        }
      }

      &:focus-visible {
        outline: 2px solid v.$main-color;
        outline-offset: 2px;
      }
    }
  }

  .footer__bottom {
    text-align: center;
    padding-top: 2rem;

    .footer__copyright {
      font-size: 0.9rem;
      opacity: 0.5;
      font-family: v.$font-kn1;
    }
  }
}
</style>