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
  @use '@/assets/scss/variables.scss' as *;
  
  .contact-page {
    padding: $spacing-xxl 0;
    background: $color-background;
    min-height: 100vh;
  }
  
  .page-title {
    font-size: 3rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-xl;
    text-align: center;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-xl;
  }
  
  .contact-info {
    h2 {
      font-size: 2rem;
      font-weight: $font-weight-bold;
      color: $color-primary;
      margin-bottom: $spacing-md;
    }
  }
  
  .contact-description {
    color: $color-text-secondary;
    line-height: 1.6;
    margin-bottom: $spacing-xl;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }
  
  .detail-item {
    display: flex;
    align-items: flex-start;
    gap: $spacing-md;
  
    i {
      font-size: 1.5rem;
      color: $color-accent;
    }
  
    h3 {
      font-size: 1.1rem;
      font-weight: $font-weight-medium;
      color: $color-primary;
      margin-bottom: $spacing-xs;
    }
  
    a, p {
      color: $color-text-secondary;
      text-decoration: none;
      transition: color 0.3s ease;
  
      &:hover {
        color: $color-accent;
      }
    }
  }
  
  .social-links {
    display: flex;
    gap: $spacing-md;
  
    .social-link {
      color: $color-text-secondary;
      font-size: 1.5rem;
      transition: all 0.3s ease;
  
      &:hover {
        color: $color-accent;
        transform: translateY(-3px);
      }
    }
  }
  
  .contact-form {
    background: white;
    padding: $spacing-xl;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-md;
  }
  
  .form-group {
    margin-bottom: $spacing-lg;
  
    label {
      display: block;
      font-weight: $font-weight-medium;
      color: $color-primary;
      margin-bottom: $spacing-xs;
    }
  
    input, textarea {
      width: 100%;
      padding: $spacing-sm;
      border: 1px solid rgba($color-primary, 0.2);
      border-radius: $border-radius-md;
      transition: all 0.3s ease;
  
      &:focus {
        outline: none;
        border-color: $color-accent;
        box-shadow: 0 0 0 3px rgba($color-accent, 0.1);
      }
    }
  }
  
  .submit-button {
    display: inline-flex;
    align-items: center;
    gap: $spacing-xs;
    padding: $spacing-sm $spacing-lg;
    background: $color-accent;
    color: white;
    border: none;
    border-radius: $border-radius-md;
    font-weight: $font-weight-medium;
    cursor: pointer;
    transition: all 0.3s ease;
  
    &:hover {
      background: darken($color-accent, 10%);
      transform: translateY(-2px);
    }
  
    i {
      transition: transform 0.3s ease;
    }
  
    &:hover i {
      transform: translateX(5px);
    }
  }
  
  @media (max-width: $breakpoint-md) {
    .page-title {
      font-size: 2.5rem;
    }
  
    .contact-info h2 {
      font-size: 1.75rem;
    }
  }
  </style> 