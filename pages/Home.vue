<template>
  <main class="home">
    <HeroSection />
    <PortfolioSection />
    <ExperienceSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import PortfolioSection from '@/components/sections/PortfolioSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss'; 

.home {
  background-color: $color-background;
  color: $color-text;
}
</style>

