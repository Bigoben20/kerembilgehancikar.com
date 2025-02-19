<template>
  <div class="flex flex-col justify-between h-full overflow-hidden transition-all duration-300 rounded-lg bg-stone-100/10 group-hover:bg-stone-100/20 hover:cursor-pointer"
    @click="redirectLink(project.url)">
    <div class="relative overflow-hidden aspect-video min-h-[230px]">
      <img :src="project.img" :alt="project.title" class="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105">
      <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
      <div class="absolute flex gap-2 top-2 left-2">
        <ProjectTag v-for="tag in project.tags" :key="tag" :tag="tag" />
      </div>
    </div>

    <div class="flex flex-col justify-between h-full p-6">
      <div>
        <h3 class="mb-2 font-serif text-xl transition-colors group-hover:text-stone-100">{{ project.title }}</h3>
        <p class="mb-4 text-sm text-stone-400 line-clamp-2">{{ project.description }}</p>
        <div class="mb-4 text-xs text-stone-500">{{ project.technologies }}</div>
      </div>

      <div class="inline-flex items-center gap-2 text-sm transition-colors text-stone-400 hover:text-stone-200">
        View Project
        <i class="text-xs transition-transform fa-solid fa-arrow-right group-hover:translate-x-1"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectTag from './ProjectTag.vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

function redirectLink(url) {
  if (url == '/') {
    return

  }
  window.open
    ? window.open(url, '_blank')
    : window.location.href;
}
</script>