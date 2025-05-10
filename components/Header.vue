<template>
  <header class="header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <div class="header-logo">
          <NuxtLink to="/home">
            <span class="logo-text">Web</span>
            <span class="logo-text accent">in</span>
            <span class="logo-text">us</span>
          </NuxtLink>
        </div>
        
        <nav class="header-nav" :class="{ 'is-active': isMenuOpen }">
          <ul class="nav-menu">
            <li v-for="(item, index) in menuItems" :key="index">
              <NuxtLink :to="item.path" @click="closeMenu" class="nav-link">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="toggle-line"></span>
          <span class="toggle-line"></span>
          <span class="toggle-line"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/projects/project' },
  { name: 'Contact', path: '/contact' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// 스크롤 이벤트 처리
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $z-index-sticky;
  padding: $spacing-md 0;
  transition: all 0.3s ease;
  background: transparent;

  &.is-scrolled {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    box-shadow: $shadow-sm;
    padding: $spacing-sm 0;
  }
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
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

.header-nav {
  @media (max-width: $breakpoint-md) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    transform: translateX(100%);
    transition: $transition-smooth;
    padding: $spacing-lg;

    &.is-active {
      transform: translateX(0);
    }
  }
}

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
  color: $color-primary;
  font-weight: $font-weight-medium;
  text-decoration: none;
  transition: $transition-smooth;
  position: relative;
  font-size: 1.1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: $color-accent;
    transition: $transition-smooth;
  }

  &:hover {
    color: $color-accent;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: $breakpoint-md) {
    font-size: 1.25rem;
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: $z-index-dropdown;

  @media (max-width: $breakpoint-md) {
    display: flex;
  }
}

.toggle-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: $color-text;
  transition: $transition-smooth;
  transform-origin: center;

  .is-active & {
    &:first-child {
      transform: translateY(8px) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}
</style>