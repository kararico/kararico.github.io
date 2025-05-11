<template>
  <footer class="footer">
      <div class="link-area">
          <a href="tel:010-9181-0226" data-hover>
              <span class="pc">PHONE</span>
              <i class="mobile"><img src="@/assets/images/call.svg" alt="전화번호:010-9181-0226"></i>
          </a>
          <a href="mailto:tmvkmfmxk00@naver.com" data-hover>
              <span class="pc">EMAIL</span>
              <i class="mobile"><img src="@/assets/images/mail.svg" alt="이메일주소:tmvkfmxk00@naver.com"></i>
          </a>
          <a href="https://github.com/ohl1234?tab=repositories" target="_blank" data-hover>
              <span class="pc">GITHUB</span>
              <i class="mobile"><img src="@/assets/images/github.png" alt="깃허브주소:https://github.com/ohl1234"></i>
          </a>
      </div>
      <div class="copy-area">
          <small>© 2022. All rights reserved.</small>
      </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



</script>

<style scoped>
.footer {
  /* 기존 CSS 스타일 유지 */
}
</style>

