<template>
  <div class="min-h-screen p-4 bg-neutral-900 text-stone-200">
    <div class="grid grid-cols-1 gap-4 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
      <!-- Header -->
      <div class="flex items-center justify-between p-6 rounded-lg opacity-0 col-span-full bg-stone-100/10 animate-fade-in">
        <h1 class="font-serif text-lg lg:text-2xl">Kerem Bilgehan ÇIKAR</h1>
        <Navigation />
      </div>

      <!-- Hero Section -->
      <div class="relative p-8 overflow-hidden rounded-lg opacity-0 bg-stone-100/10 col-span-full md:col-span-1 group animate-slide-up" style="animation-delay: 200ms">
        <div class="absolute w-24 h-24 top-4 right-4">
          <!-- Profile Image Circle for Mobile -->
          <div class="absolute inset-0 md:hidden">
            <div class="w-full h-full overflow-hidden border-2 rounded-full border-stone-200">
              <img :src="pp" alt="Profile" class="object-cover w-full h-full">
            </div>
          </div>
          <!-- Year Circle for Desktop -->
          <div class="hidden w-full h-full md:block opacity-20">
            <div class="w-full h-full border-2 rounded-full border-stone-200">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="font-mono text-xs opacity-60">{{ currentYear }}</span>
              </div>
            </div>
          </div>
        </div>
        <h2 class="mb-6 font-serif text-3xl lg:text-4xl">Fullstack<br/>Developer<br/><em>Portfolio</em></h2>
        <p class="mb-4 text-xs text-stone-400">Web Development & RestfulAPI</p>
        <p class="text-sm leading-relaxed text-stone-300">
          Hello! I'm Bilgehan, a passionate web developer with a keen eye for design. With +2 years of experience, 
          I've worked on various projects, mastering both front-end and back-end technologies. I thrive in team 
          environments, bringing creative problem-solving skills to the table.
        </p>
      </div>

      <StatsGrid class="opacity-0 animate-slide-up" style="animation-delay: 400ms" />
      
      <!-- Profile Image Section (visible only on desktop) -->
      <div class="hidden overflow-hidden rounded-lg opacity-0 md:block bg-stone-100/10 col-span-full md:col-span-1 animate-slide-up" style="animation-delay: 600ms">
        <img :src="pp" alt="Profile" class="object-cover w-full h-full">
      </div>
      
      <div class="flex flex-col justify-between p-8 rounded-lg opacity-0 bg-stone-100/10 col-span-full md:col-span-1 animate-slide-up" style="animation-delay: 800ms">
        <div>
          <h3 class="mb-4 font-serif text-2xl">Contact <em>me</em></h3>
          <p class="mb-2 text-stone-400">Have some questions?</p>
          <p class="text-sm">k.bilge3817@gmail.com</p>
        </div>
        <div class="flex gap-4 mt-8">
          <SocialLink icon="fa-brands fa-github" url="https://github.com/Bigoben20" />
          <SocialLink icon="fa-brands fa-linkedin" url="https://www.linkedin.com/in/kbilgehancikar/" />
          <SocialLink icon="fa-solid fa-hand-holding-medical" url="https://buymeacoffee.com/kbilgehancikar" />
        </div>
      </div>

      <SkillsSection class="opacity-0 animate-slide-up" style="animation-delay: 1000ms" />
      <ExperienceTimeline class="opacity-0 animate-slide-up" style="animation-delay: 1200ms" />
      <ProjectGrid class="opacity-0 animate-slide-up" style="animation-delay: 1400ms" />

      <div class="flex items-center justify-between p-4 mt-8 opacity-0 col-span-full animate-slide-up" style="animation-delay: 1600ms">
        <div class="text-sm text-stone-400">© {{ currentYear }} Kerem Bilgehan Çıkar</div>
        <div class="flex gap-4">
          <router-link to="/v2" class="text-sm text-stone-400 hover:text-stone-200">.v2</router-link>
          <router-link to="/v1" class="text-sm text-stone-400 hover:text-stone-200">.v1</router-link>
        </div>
      </div>
    </div>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Navigation from '@/components/sections/v3/Navigation.vue'
import ProjectGrid from '@/components/sections/v3/ProjectGrid.vue'
import SkillsSection from '@/components/sections/v3/SkillsSection.vue'
import ExperienceTimeline from '@/components/sections/v3/ExperienceTimeline.vue'
import StatsGrid from '@/components/sections/v3/StatsGrid.vue'
import SocialLink from '@/components/sections/v3/SocialLink.vue'
import ScrollToTop from '@/components/sections/v3/ScrollToTop.vue'
import pp from '@/assets/images/kbc.jpeg'
import cvEnPdf from '@/assets/cv/KeremBilgehanCIKAR_CV_EN.pdf'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

.nav-link {
  @apply text-stone-400 hover:text-stone-100 transition-colors duration-200;
}
</style>