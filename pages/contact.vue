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
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
  
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
  
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required>
              </div>
  
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
  
              <button type="submit" class="submit-button">
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
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleSubmit = () => {
    // TODO: Implement form submission
    console.log('Form submitted:', form.value);
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style> 