<template>
    <div class="contact-page">
      <main class="main-content">
        <div class="container">
          <h1 class="section-title">Contact</h1>
          <p class="section-subtitle">
            프로젝트 문의나 협업 제안을 기다리고 있습니다.<br />
            아래 연락처로 언제든지 연락주세요.
          </p>
          
          <div class="contact-grid"> 
            <div class="contact-form-section">
              <form @submit.prevent="handleSubmit" class="contact-form" aria-label="Contact form" novalidate>
                <div class="form-group">
                  <label for="name">이름</label>
                  <input type="text" id="name" v-model="form.name" required autocomplete="name" aria-required="true" ref="nameRef">
                </div>
    
                <div class="form-group">
                  <label for="email">이메일</label>
                  <input type="email" id="email" v-model="form.email" required autocomplete="email" aria-required="true" ref="emailRef">
                </div>
    
                <div class="form-group">
                  <label for="subject">제목</label>
                  <input type="text" id="subject" v-model="form.subject" required aria-required="true" ref="subjectRef">
                </div>
    
                <div class="form-group">
                  <label for="message">메시지</label>
                  <textarea id="message" v-model="form.message" rows="5" required aria-required="true" ref="messageRef"></textarea>
                </div>
    
                <div aria-live="polite" class="sr-only" v-if="statusMsg">
                  {{ statusMsg }}
                </div>
    
                <button type="submit" class="btn" :aria-busy="statusType === 'success' ? 'false' : statusType === 'error' ? 'false' : 'true'">
                  전송하기
                  <i class="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <div v-if="popup.visible" class="popup-layer" @click.self="closePopup">
        <div class="popup-content">
          <span class="popup-message">{{ popup.message }}</span>
          <button class="popup-close" @click="closePopup" aria-label="닫기">확인</button>
        </div>
      </div>
      <div v-if="toast.visible" class="toast" :class="toast.type">{{ toast.message }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Vue와 관련된 필요한 컴포넌트들을 import
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';

  // Nuxt 런타임 설정 가져오기
  const config = useRuntimeConfig();

  // 폼 데이터를 관리하는 ref 객체
  const form = ref({
    name: '', 
    email: '',
    subject: '',
    message: ''
  });

  // 폼 제출 상태를 관리하는 ref 변수들
  const statusMsg = ref('');
  const statusType = ref<'success'|'error'|''>('');

  // 폼 입력 필드들의 ref 객체들
  const nameRef = ref<HTMLInputElement | null>(null)
  const emailRef = ref<HTMLInputElement | null>(null)
  const subjectRef = ref<HTMLInputElement | null>(null)
  const messageRef = ref<HTMLTextAreaElement | null>(null)

  // 팝업과 토스트 메시지를 관리하는 ref 객체들
  const popup = ref({ visible: false, message: '' })
  const toast = ref({ visible: false, message: '', type: '' });

  // 팝업 메시지를 표시하는 함수
  function showPopup(msg: string) {
    popup.value.message = msg
    popup.value.visible = true
    setTimeout(() => { popup.value.visible = false }, 2500)
  }

  // 팝업을 닫는 함수
  function closePopup() {
    popup.value.visible = false
  }

  // 토스트 메시지를 표시하는 함수
  function showToast(msg: string, type: string = 'success') {
    toast.value.message = msg;
    toast.value.type = type;
    toast.value.visible = true;
    setTimeout(() => { toast.value.visible = false }, 2500);
  }
    
  // 폼 유효성 검사 함수
  const validateForm = () => {
    // 이름 입력 검사
    if (!form.value.name.trim()) {
      statusMsg.value = '이름을 입력해주세요.';
      showPopup('이름을 입력해주세요.');
      setTimeout(() => {
        nameRef.value?.focus();
      }, 300);
      return false;
    }
    // 이메일 입력 검사
    if (!form.value.email.trim()) {
      statusMsg.value = '이메일을 입력해주세요.';
      showPopup('이메일을 입력해주세요.');
      setTimeout(() => {
        emailRef.value?.focus();
      }, 300);
      return false;
    }
    // 이메일 형식 검사
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.value.email)) {
      statusMsg.value = '올바른 이메일 형식을 입력해주세요.';
      showPopup('올바른 이메일 형식을 입력해주세요.');
      setTimeout(() => {
        emailRef.value?.focus();
      }, 300);
      return false;
    }
    // 제목 입력 검사
    if (!form.value.subject.trim()) {
      statusMsg.value = '제목을 입력해주세요.';
      showPopup('제목을 입력해주세요.');
      setTimeout(() => {
        subjectRef.value?.focus();
      }, 300);
      return false;
    }
    // 메시지 입력 검사
    if (!form.value.message.trim()) {
      statusMsg.value = '메시지를 입력해주세요.';
      showPopup('메시지를 입력해주세요.');
      setTimeout(() => {
        messageRef.value?.focus();
      }, 300);
      return false;
    }
    return true;
  }
  
  // 폼 제출 처리 함수
  const handleSubmit = async () => {
    statusMsg.value = '';
    statusType.value = '';
    if (!validateForm()) return;
    popup.value = { visible: true, message: '메일 전송 중...' };
    try {
      // EmailJS를 사용하여 이메일 전송
      await emailjs.send(
        config.public.emailjsServiceId as string, 
        config.public.emailjsTemplateId as string,
        {
          name: form.value.name,
          email: form.value.email,
          subject: form.value.subject,
          message: form.value.message,
          to_email: 'ixkfo86@gmail.com',
        },
        config.public.emailjsPublicKey as string 
      );
      // 성공 처리
      popup.value.visible = false;
      showToast('메일 전송이 완료되었습니다.', 'success');
      statusMsg.value = '메시지가 성공적으로 전송되었습니다!';
      statusType.value = 'success';
      form.value = { name: '', email: '', subject: '', message: '' };
    } catch (e) {
      // 에러 처리
      popup.value.visible = false;
      showToast('전송에 실패했습니다. 다시 시도해주세요.', 'error');
      statusMsg.value = '메시지 전송에 실패했습니다. 다시 시도해주세요.';
      statusType.value = 'error';
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @use '@/assets/scss/common/_var' as v;
  @use '@/assets/scss/common/_mixins' as *;
  @use '@/assets/scss/common/_common' as *;
  .contact-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #181818 60%, #232323 100%);
    color: #fff;
    font-family: v.$font-en5, 'Pretendard', 'Noto Sans KR', sans-serif;
    padding: 4rem 0;

    .container {
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
    }

    .section-title,
    .section-subtitle {
      text-align: left;
      width: 100%;
    }

    .contact-grid {
      display: flex;
      gap: 3rem;
      width: 100%;
      justify-content: center;
      align-items: flex-start;
      margin-top: 1rem;
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
      }
    }

    .contact-form-section {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .contact-form {
      width: 100%;
      background: rgba(40,40,40,0.95);
      border-radius: 1rem;
      padding: 2rem 1.5rem;
      box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      label {
        font-size: 1rem;
        color: #bbb;
        margin-bottom: 0.4rem;
      }
      input, textarea {
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid #333;
        background: #232323;
        color: #fff;
        font-size: 1rem;
        transition: border 0.2s, box-shadow 0.2s;
        &:focus {
          border: 1.5px solid v.$main-color;
          outline: none;
          box-shadow: 0 0 0 2px v.$main-color;
        }
      }
      textarea {
        resize: vertical;
      }
    }

    .btn {
      @extend .btn;
      width: 300px;
      border-radius: 0.25rem;
      justify-content: center;
      margin: 1.5rem auto 0 auto;
      font-size: 1.1rem;
      i {
        font-size: 1.1rem;
        margin-left: 0.5rem;
      }
    }

    .popup-layer {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.35);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .popup-content {
      background: #232323;
      color: #fff;
      border-radius: 1em;
      padding: 2em 2.5em;
      box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 220px;
    }
    .popup-message {
      font-size: 1.15em;
      margin-bottom: 1.2em;
      text-align: center;
    }
    .popup-close {
      background: #fff;
      color: #181818;
      border: none;
      border-radius: 0.5em;
      padding: 0.5em 1.5em;
      font-size: 1em;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      &:hover {
        background: #181818;
        color: #fff;
      }
    }

    .toast {
      position: fixed;
      left: 50%;
      bottom: 3em;
      transform: translateX(-50%);
      background: v.$main-color;
      color: #fff;
      padding: 1em 2em;
      border-radius: 2em;
      font-size: 1.1em;
      font-weight: 600;
      box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
      z-index: 9999;
      animation: toast-fadein 0.3s, toast-fadeout 0.3s 1.2s;
      pointer-events: none;
      text-align: center;
      opacity: 0.98;
      &.error {
        background: #e74c3c;
      }
    }

    @keyframes toast-fadein {
      from { opacity: 0; transform: translateX(-50%) translateY(30px);}
      to   { opacity: 1; transform: translateX(-50%) translateY(0);}
    }

    @keyframes toast-fadeout {
      from { opacity: 1; }
      to   { opacity: 0; }
    }
  }
  </style>
  