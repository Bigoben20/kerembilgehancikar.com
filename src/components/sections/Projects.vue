<template>
    <div class="py-4" id="projects">
        <div class="border-b border-neutral-400 text-neutral-400">
            <p>Projects</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3">
            <a :href="project.url" target="_blank" v-for="project in projects" :key="project.id" class="relative card">
                <Pills :tag="project.tag" class="absolute top-6 left-6 "/>
                <div class="w-full h-40 rounded-lg bg-neutral-200"></div>
                <span class="text-lg font-semibold break-words">
                    {{ project.title }}
                    <i class="text-blue-500 fa-solid fa-link"></i>
                </span>
                <div class="flex flex-col items-start gap-2 mt-2 text-xs text-neutral-400">
                    <div>
                        <span class="font-semibold text-neutral-300">Technologies: </span>
                        <span class="">{{ project.technologies }}</span>
                    </div>
                    <div>
                        <span class="font-semibold text-neutral-300">Description: </span>
                        <span class="">{{ project.description }}</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import Pills from "@/components/components/Pills.vue"
import { ref } from "vue";


const projects = ref([
    {
        id: 1,
        title: "Seyahatpolicesi",
        technologies:"HTML, CSS, PHP, JS, jQuery, Curl",
        description: "A website for obtaining travel insurance quotes and making insurance sales.",
        url: "https://www.seyahatpolicesi.com",
        img: "",
        tag: "completed"
    },
    {
        id: 2,
        title: "Dashboard Tamamliyo",
        technologies:"TailwindCSS, AlpineJS, Laravel, Livewire",
        description: "The dashboard page for Tamamliyo company, where partners, sales, and other controls can be managed. Ongoing developments are in progress.",
        url: "https://dashboard.tamamliyo.com",
        img: "",
        tag: "completed"
    },
    {
        id: 3,
        title: "Tamamliyo.com",
        technologies: "HTML, CSS, PHP, JS, jQuery, Curl, TailwindCSS, AlpineJS",
        description: "A product sales page integrated into the Tamamliyo company website. Quotes can be received and sales can be made on this platform.",
        url: "https://tamamliyo.com",
        img: "",
        tag: "completed"
    },
    {
        id: 4,
        title: "Kirilmiyo.com",
        technologies:"Vue.js, TailwindCSS",
        description: "A platform where mobile phone dealers can sell mobile phone insurance for additional income. Ongoing developments are in progress.",
        url: "https://kirilmiyo.com",
        img: "",
        tag: "completed"
    },
]);
</script>

<style scoped>
.card {
    @apply rounded-2xl hover:shadow-md p-4 hover:bg-gradient-to-br from-lime-500/10 to-teal-500/10;
}
</style>