<template>
  <Transition name="fade">
    <button 
      v-show="showButton"
      @click="scrollToTop"
      class="fixed z-50 flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full shadow-lg bottom-16 right-6 bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200"
      aria-label="Scroll to top">
      <i class="text-sm fa-solid fa-arrow-up"></i>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>