<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">온라인 상담</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div class="info-text">
              <h3>전화 상담</h3>
              <p>02-6369-0217</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div class="info-text">
              <h3>이메일</h3>
              <p>webinus@webinus.co.kr</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div class="info-text">
              <h3>상담 시간</h3>
              <p>평일 09:00 - 18:00</p>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">이름</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">이메일</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="phone">연락처</label>
            <input type="tel" id="phone" v-model="form.phone" required>
          </div>
          <div class="form-group">
            <label for="message">문의사항</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">
            상담 신청하기
            <i class="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // TODO: Implement form submission logic
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
.contact-section {
  padding: $spacing-xxl 0;
  background: $color-background;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
  margin-top: $spacing-xl;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-lg;
  background: white;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;

    i {
      color: $color-accent;
      transform: scale(1.1);
    }
  }

  i {
    font-size: 1.5rem;
    color: $color-primary;
    transition: all 0.3s ease;
  }
}

.contact-text {
  h3 {
    font-size: 1.2rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-xs;
  }

  p {
    color: $color-text-secondary;
    font-size: 1rem;
  }
}

.contact-form {
  background: white;
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;

  .form-group {
    margin-bottom: $spacing-lg;

    label {
      display: block;
      font-weight: $font-weight-medium;
      color: $color-primary;
      margin-bottom: $spacing-xs;
    }

    input,
    textarea {
      width: 100%;
      padding: $spacing-md;
      border: 2px solid rgba($color-primary, 0.1);
      border-radius: $border-radius-md;
      transition: all 0.3s ease;
      font-size: 1rem;
      color: $color-text;

      &:focus {
        outline: none;
        border-color: $color-accent;
        box-shadow: 0 0 0 3px rgba($color-accent, 0.1);
      }
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }

  .btn-submit {
    background: $color-accent;
    color: white;
    padding: $spacing-md $spacing-xl;
    border: none;
    border-radius: $border-radius-md;
    font-weight: $font-weight-bold;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
    //   background: darken($color-accent, 10%);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba($color-accent, 0.2);
    }
  }
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-md $spacing-xl;
  background: $color-accent;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: $font-weight-medium;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    // background: darken($color-accent, 10%);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba($color-accent, 0.3);
  }

  i {
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateX(5px);
  }
}

@media (max-width: $breakpoint-lg) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: $spacing-xl;
  }

  .contact-info {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .info-item {
    flex: 1;
    min-width: 250px;
  }
}

@media (max-width: $breakpoint-md) {
  .contact-info {
    flex-direction: column;
  }

  .info-item {
    width: 100%;
  }

  .contact-form { 
    padding: $spacing-lg;
  }
}
</style> 