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
                <input type="text" id="name" v-model="form.name" required autocomplete="name" aria-required="true">
              </div>
  
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required autocomplete="email" aria-required="true">
              </div>
  
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required aria-required="true">
              </div>
  
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required aria-required="true"></textarea>
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
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';
  const config = useRuntimeConfig();
  
  const form = ref({
    name: '', 
    email: '',
    subject: '',
    message: ''
  });
  
  const statusMsg = ref('');
  const statusType = ref<'success'|'error'|''>('');
  
  const handleSubmit = async () => {
    statusMsg.value = '';
    statusType.value = '';
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
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  </style> 