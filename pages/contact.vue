<template>
    <div class="contact-page">
      <div class="container">
        <h1 class="page-title">Contact</h1>
        
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p class="contact-description">
              프로젝트 문의나 협업 제안을 기다리고 있습니다.<br>
              아래 연락처로 언제든지 연락주세요.
            </p>
            
            <div class="contact-details">
              <div class="detail-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:ixkfo86@gmail.com">ixkfo86@gmail.com</a>
                </div>
              </div>
              
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Location</h3>
                  <p>Incheon, South Korea</p>
                </div>
              </div>
            </div>
  
            <div class="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
  
          <div class="contact-form">
            <form @submit.prevent="handleSubmit" aria-label="Contact form" novalidate>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" required autocomplete="name" aria-required="true" ref="nameRef">
              </div>
  
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required autocomplete="email" aria-required="true" ref="emailRef">
              </div>
  
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required aria-required="true" ref="subjectRef">
              </div>
  
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required aria-required="true" ref="messageRef"></textarea>
              </div>
  
              <div aria-live="polite" class="sr-only" v-if="statusMsg">
                {{ statusMsg }}
              </div>
  
              <button type="submit" class="submit-button" :aria-busy="statusType === 'success' ? 'false' : statusType === 'error' ? 'false' : 'true'">
                Send Message
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
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
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';
  const config = useRuntimeConfig();
  console.log(config );
  const form = ref({
    name: '', 
    email: '',
    subject: '',
    message: ''
  });
  
  const statusMsg = ref('');
  const statusType = ref<'success'|'error'|''>('');
  
  const nameRef = ref<HTMLInputElement | null>(null)
  const emailRef = ref<HTMLInputElement | null>(null)
  const subjectRef = ref<HTMLInputElement | null>(null)
  const messageRef = ref<HTMLTextAreaElement | null>(null)
  
  const popup = ref({ visible: false, message: '' })
  const toast = ref({ visible: false, message: '', type: '' });
  
  function showPopup(msg: string) {
    popup.value.message = msg
    popup.value.visible = true
    setTimeout(() => { popup.value.visible = false }, 2500)
  }
  function closePopup() {
    popup.value.visible = false
  }
  function showToast(msg: string, type: string = 'success') {
    toast.value.message = msg;
    toast.value.type = type;
    toast.value.visible = true;
    setTimeout(() => { toast.value.visible = false }, 2500);
  }
    
  const validateForm = () => {
    if (!form.value.name.trim()) {
      statusMsg.value = '이름을 입력해주세요.';
      showPopup('이름을 입력해주세요.');
      setTimeout(() => {
        nameRef.value?.focus();
      }, 300);
      return false;
    }
    if (!form.value.email.trim()) {
      statusMsg.value = '이메일을 입력해주세요.';
      showPopup('이메일을 입력해주세요.');
      setTimeout(() => {
        emailRef.value?.focus();
      }, 300);
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.value.email)) {
      statusMsg.value = '올바른 이메일 형식을 입력해주세요.';
      showPopup('올바른 이메일 형식을 입력해주세요.');
      setTimeout(() => {
        emailRef.value?.focus();
      }, 300);
      return false;
    }
    if (!form.value.subject.trim()) {
      statusMsg.value = '제목을 입력해주세요.';
      showPopup('제목을 입력해주세요.');
      setTimeout(() => {
        subjectRef.value?.focus();
      }, 300);
      return false;
    }
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
  
  const handleSubmit = async () => {
    statusMsg.value = '';
    statusType.value = '';
    if (!validateForm()) return;
    popup.value = { visible: true, message: '메일 전송 중...' };
    try {
      await emailjs.send(
        config.public.emailjsServiceId as string, // EmailJS Service ID
        config.public.emailjsTemplateId as string, // EmailJS Template ID
        {
          name: form.value.name,
          email: form.value.email,
          subject: form.value.subject,
          message: form.value.message,
          to_email: 'ixkfo86@gmail.com',
        },
        config.public.emailjsPublicKey as string // EmailJS Public Key
      );
      popup.value.visible = false;
      showToast('메일 전송이 완료되었습니다.', 'success');
      statusMsg.value = '메시지가 성공적으로 전송되었습니다!';
      statusType.value = 'success';
      form.value = { name: '', email: '', subject: '', message: '' };
    } catch (e) {
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
  .contact-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #181818 60%, #232323 100%);
    color: #fff;
    font-family: v.$font-en5, 'Pretendard', 'Noto Sans KR', sans-serif;
    padding: 4rem 0;

    .container {
      max-width: 900px;
      margin: 0 auto;
      background: rgba(30,30,30,0.95);
      border-radius: 1.5rem;
      box-shadow: 0 4px 32px 0 rgba(0,0,0,0.12);
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: #fff;
      letter-spacing: 0.02em;
      text-align: center;
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

    .contact-info {
      flex: 1;
      background: rgba(40,40,40,0.95);
      border-radius: 1rem;
      padding: 2rem 1.5rem;
      box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 260px;
      @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        width: 100%;
      }
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #fff;
      }
      .contact-description {
        color: #bbb;
        font-size: 1.1rem;
        margin-bottom: 2rem;
      }
      .contact-details {
        margin-bottom: 2rem;
        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
          i {
            font-size: 1.3rem;
            color: #fff;
            background: #232323;
            border-radius: 50%;
            padding: 0.5rem;
          }
          h3 {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.2rem;
          }
          a, p {
            color: #fff;
            font-size: 1rem;
          }
        }
      }
      .social-links {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        .social-link {
          color: #fff;
          font-size: 1.5rem;
          background: #232323;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
          &:hover {
            background: v.$main-color;
            color: #fff;
          }
        }
      }
    }

    .contact-form {
      flex: 1.2;
      background: rgba(40,40,40,0.95);
      border-radius: 1rem;
      padding: 2rem 1.5rem;
      box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
      min-width: 280px;
      @media (max-width: 768px) {
        width: 100%;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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
        .submit-button {
          background: #fff;
          color: #181818;
          font-weight: 700;
          border: none;
          border-radius: 0.5rem;
          padding: 0.9rem 2rem;
          font-size: 1.1rem;
          cursor: pointer;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          transition: background 0.2s, color 0.2s, border 0.2s;
          justify-content: center;
          &:hover {
            background: v.$main-color;
            color: #fff;
            border: 1.5px solid v.$main-color;
          }
          i {
            font-size: 1.1rem;
          }
        }
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
      bottom: 2rem;
      transform: translateX(-50%);
      min-width: 220px;
      background: v.$main-color;
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 2rem;
      font-size: 1.1rem;
      font-weight: 600;
      box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
      z-index: 99999;
      opacity: 0.98;
      text-align: center;
      transition: opacity 0.3s;
      &.error {
        background: #e74c3c;
      }
    }
  }
  </style>
  