<template>
  <a :href="url" target="_blank" 
    class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors">
    <i :class="icon"></i>
  </a>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>