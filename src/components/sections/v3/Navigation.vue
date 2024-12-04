<template>
  <nav class="flex items-center gap-8">
    <!-- Desktop Navigation -->
    <div class="items-center hidden gap-6 md:flex">
      <button @click="scrollToProjects()" class="nav-link">Projects</button>
      <a href="https://blog.kerembilgehancikar.com" target="_blank" class="nav-link">Blog</a>
      <a href="https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
        target="_blank" class="nav-link">Music</a>
      <a href="https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg" 
        target="_blank" class="nav-link">Youtube</a>
    </div>
    
    <!-- Actions -->
    <div class="flex items-center gap-4">
      <div class="items-center hidden md:flex">
        <a :href="cvEnPdf" download class="px-4 py-2 text-sm transition-colors rounded-full bg-stone-800 hover:bg-stone-700">
          Download CV
          <i class="ml-2 fa-solid fa-download"></i>
        </a>
      </div>
      <button 
        @click="toggleMenu" 
        class="md:hidden text-stone-400 hover:text-stone-100">
        <i class="text-xl fa-solid" :class="isMenuOpen ? 'fa-xmark' : 'fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile Menu (Teleported to body) -->
    <Teleport to="body">
      <Transition name="menu">
        <div v-if="isMenuOpen" class="fixed inset-0 z-[999]">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/50" @click="closeMenu"></div>
          
          <!-- Menu Content -->
          <div class="absolute top-0 right-0 w-full h-full max-w-[240px] p-6 shadow-xl bg-stone-950/95">
            <div class="flex flex-col h-full">
              <div class="pt-16 space-y-6">
                <button 
                  v-for="link in mobileLinks" 
                  :key="link.url"
                  @click="handleClick(link)"
                  class="block w-full px-4 py-2 font-serif text-lg text-left transition-colors"
                  :class="link.url.startsWith('http') ? 'text-stone-400 hover:text-stone-100' : 'text-stone-200 hover:text-stone-100'">
                  {{ link.text }}
                </button>
              </div>

              <div class="px-4 mt-8">
                <h3 class="mb-2 text-sm text-stone-500">Switch Version</h3>
                <div class="flex gap-4">
                  <router-link 
                    v-for="version in ['v2', 'v1']" 
                    :key="version"
                    :to="version === 'v2' ? '/v2' : '/v1'"
                    class="px-4 py-2 transition-colors text-stone-400 hover:text-stone-100"
                    @click="toggleMenu">
                    .{{ version }}
                  </router-link>
                </div>
              </div>

              <div class="mt-auto">
                <a :href="cvEnPdf" download class="block w-full py-3 text-center transition-colors rounded-lg text-stone-300 bg-stone-700 hover:bg-stone-700">
                  Download CV
                  <i class="ml-2 fa-solid fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import cvEnPdf from '@/assets/cv/KeremBilgehanCIKAR_CV_EN.pdf'

const isMenuOpen = ref(false)

const mobileLinks = [
  { text: 'Projects', url: '#projects' },
  { text: 'Blog', url: 'https://blog.kerembilgehancikar.com' },
  { text: 'Music', url: 'https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
  { text: 'Youtube', url: 'https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToProjects = () => {
  const projectsSection = document.querySelector('#projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleClick = (link) => {
  if (link.url.startsWith('http')) {
    window.open(link.url, '_blank')
  } else if (link.url === '#projects') {
    scrollToProjects()
  }
  toggleMenu()
}
</script>

<style scoped>
.nav-link {
  @apply text-stone-400 hover:text-stone-100 transition-colors duration-200;
}

/* Menu transition */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-active .absolute.right-0,
.menu-leave-active .absolute.right-0 {
  transition: transform 0.3s ease;
}

.menu-enter-from .absolute.right-0,
.menu-leave-to .absolute.right-0 {
  transform: translateX(100%);
}
</style>