<template>
  <span class="px-2 py-1 text-xs rounded-full font-medium backdrop-blur-sm" 
    :class="{
      'bg-green-500/80 text-green-950': tag === 'completed',
      'bg-yellow-500/80 text-yellow-950': tag === 'now',
      'bg-pink-500/80 text-pink-950': tag === 'paused',
      'bg-stone-500/80 text-stone-950': tag === 'personal',
      'bg-blue-500/80 text-blue-950': tag === 'job'
    }">
    {{ tag }}
  </span>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    required: true
  }
})
</script>