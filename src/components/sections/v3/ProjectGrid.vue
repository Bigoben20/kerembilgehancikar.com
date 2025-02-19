<template>
  <div class="mt-4 col-span-full" id="projects">
    <div class="mb-4">
      <h2 class="mb-2 font-serif text-2xl">Projects</h2>
      <div class="pb-2 overflow-x-auto hide-scrollbar">
        <div class="flex gap-2 w-fit">
          <button v-for="filter in filters" :key="filter" @click="activeFilter = filter" class="px-3 py-1 text-sm transition-colors rounded-full whitespace-nowrap"
            :class="activeFilter === filter ? 'bg-stone-100 text-stone-900' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'">
            {{ filter }}
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="project in filteredProjects" :key="project.id" class="group">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import sepoImg from "@/assets/images/projects/sepo.jpeg"
import dashboardImg from "@/assets/images/projects/dashboard.jpeg"
import tamamliyoImg from "@/assets/images/projects/tamamliyo.jpeg"
import kirilmiyoImg from "@/assets/images/projects/kirilmiyo.jpeg"
import webApp from "@/assets/images/projects/web_app.jpeg"
import frpCharactersImg from "@/assets/images/projects/frp_characters.jpeg"

const filters = ['All', 'Completed', 'In Progress', 'Paused', 'Personal', 'Job']
const activeFilter = ref('All')

const projects = ref([
  {
    id: 1,
    title: "Seyahatpolicesi",
    technologies: "HTML, CSS, PHP, JS, jQuery, Curl",
    description: "A website for obtaining travel insurance quotes and making insurance sales.",
    url: "https://www.seyahatpolicesi.com",
    img: sepoImg,
    tags: ["completed", "job"]
  },
  {
    id: 2,
    title: "My FRP Characters",
    technologies: "Vue.js, TailwindCSS, Laravel, Inertia",
    description: "A website for creating, editing, and deleting accounts and characters for a desktop role-playing game.",
    url: "https://frp.kerembilgehancikar.com",
    img: frpCharactersImg,
    tags: ["completed", "personal"]
  },
  {
    id: 3,
    title: "Dashboard Tamamliyo",
    technologies: "TailwindCSS, AlpineJS, Laravel, Livewire",
    description: "The dashboard page for Tamamliyo company, where partners, sales, and other controls can be managed.",
    url: "/",
    img: dashboardImg,
    tags: ["completed", "job"]
  },
  {
    id: 4,
    title: "Tamamliyo.com",
    technologies: "HTML, CSS, PHP, JS, jQuery, Curl, TailwindCSS, AlpineJS",
    description: "A product sales page integrated into the Tamamliyo company website.",
    url: "https://tamamliyo.com",
    img: tamamliyoImg,
    tags: ["completed", "job"]
  },
  {
    id: 5,
    title: "Kirilmiyo.com",
    technologies: "Vue.js, TailwindCSS",
    description: "A platform where mobile phone dealers can sell mobile phone insurance for additional income.",
    url: "https://kirilmiyo.com",
    img: kirilmiyoImg,
    tags: ["completed", "job"]
  },
  {
    id: 6,
    title: "Vue Web App",
    technologies: "Vue.js, TailwindCSS, Laravel, RestAPI",
    description: "A site where current exchange rates and news can be obtained through a free API service.",
    url: "/",
    img: webApp,
    tags: ["paused", "personal"]
  },
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects.value
  const filterMap = {
    'Completed': 'completed',
    'In Progress': 'now',
    'Paused': 'paused',
    'Personal': 'personal',
    'Job': 'job'
  }
  return projects.value.filter(project =>
    project.tags.includes(filterMap[activeFilter.value])
  )
})
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari and Opera */
}
</style>