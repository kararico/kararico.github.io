<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <NuxtLink to="/home">
            <span class="logo-text">Web</span>
            <span class="logo-text accent">in</span>
            <span class="logo-text">us</span>
          </NuxtLink>
        </div>
        
        <nav class="footer-nav">
          <ul class="nav-menu">
            <li v-for="(item, index) in menuItems" :key="index">
              <NuxtLink :to="item.path" class="nav-link">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:contact@example.com" class="social-link">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Web in us. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/projects/project' },
  { name: 'Contact', path: '/contact' }
];
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.footer {
  background: white;
  padding: $spacing-xl 0;
  border-top: 1px solid rgba($color-primary, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-xl;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: $spacing-lg;
    text-align: center;
  }
}

.footer-logo {
  .logo-text {
    font-size: 1.8rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    transition: $transition-smooth;

    &.accent {
      color: $color-accent;
    }

    &:hover {
      color: $color-accent;
    }
  }
}

.footer-nav {
  .nav-menu {
    display: flex;
    gap: $spacing-lg;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      gap: $spacing-md;
    }
  }

  .nav-link {
    color: $color-text-secondary;
    text-decoration: none;
    transition: $transition-smooth;
    font-size: 1.1rem;

    &:hover {
      color: $color-accent;
    }
  }
}

.footer-social {
  display: flex;
  gap: $spacing-md;

  .social-link {
    color: $color-text-secondary;
    font-size: 1.5rem;
    transition: $transition-smooth;

    &:hover {
      color: $color-accent;
      transform: translateY(-3px);
    }
  }
}

.footer-bottom {
  text-align: center;
  padding-top: $spacing-lg;
  border-top: 1px solid rgba($color-primary, 0.1);

  p {
    color: $color-text-secondary;
    font-size: 0.9rem;
  }
}
</style>
