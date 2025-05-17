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
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
              </div>
              
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Location</h3>
                  <p>Seoul, South Korea</p>
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
  function showPopup(msg: string) {
    popup.value.message = msg
    popup.value.visible = true
    setTimeout(() => { popup.value.visible = false }, 2500)
  }
  function closePopup() {
    popup.value.visible = false
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
    try {
      await emailjs.send(
        config.public.emailjsServiceId as string, // EmailJS Service ID
        config.public.emailjsTemplateId as string, // EmailJS Template ID
        {
          name: form.value.name,
          email: form.value.email,
          subject: form.value.subject,
          message: form.value.message,
          to_email: 'ixkfo86@gmail.com', // 템플릿에 to_email 필드가 있다면 명시적으로 지정
        },
        config.public.emailjsPublicKey as string // EmailJS Public Key
      );
      statusMsg.value = '메시지가 성공적으로 전송되었습니다!';
      statusType.value = 'success';
      form.value = { name: '', email: '', subject: '', message: '' };
    } catch (e) {
      statusMsg.value = '메시지 전송에 실패했습니다. 다시 시도해주세요.';
      statusType.value = 'error';
    }
  };
  </script>
  
  <style lang="scss" scoped>
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
    background: #fff;
    color: #222;
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
    background: #222;
    color: #fff;
    border: none;
    border-radius: 0.5em;
    padding: 0.5em 1.5em;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.2s;
  }
  .popup-close:hover {
    background: #444;
  }
  </style>
  