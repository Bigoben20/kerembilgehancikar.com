<template>
    <div class="py-4" id="projects">
        <div class="border-b border-neutral-400 text-neutral-400">
            <p>Projects</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3">
            <a :href="project.url" target="_blank" v-for="project in projects" :key="project.id" class="card">
                
                <div v-if="project.img" class="relative w-full overflow-hidden rounded-lg bg-neutral-200">
                    <Pills :tag="project.tags[0]" class="absolute top-2 left-2 "/>
                    
                    <div class="absolute bottom-2 right-2 bg-stone-500 w-6 h-6 rounded-full text-[11px] flex items-center justify-center tooltip">
                        <i class="fa-solid" :class="project.tags[1] == 'personal'?'fa-user':'fa-briefcase'"></i>
                        <span class="capitalize tooltiptext">{{ project.tags[1] }}</span>
                    </div>
                    <img :src="`${project.img}`" alt="" />
                </div>
                <div v-else class="w-full h-40 rounded-lg bg-neutral-200"></div>
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
import { ref } from "vue";

import Pills from "@/components/components/Pills.vue"

import sepoImg from "@/assets/images/projects/sepo.jpeg"
import dashboardImg from "@/assets/images/projects/dashboard.jpeg"
import tamamliyoImg from "@/assets/images/projects/tamamliyo.jpeg"
import kirilmiyoImg from "@/assets/images/projects/tamamliyo.jpeg"
import webApp from "@/assets/images/projects/web_app.jpeg"
import frpCharactersImg from "@/assets/images/projects/frp_characters.jpeg"



const projects = ref([
    {
        id: 1,
        title: "Seyahatpolicesi",
        technologies:"HTML, CSS, PHP, JS, jQuery, Curl",
        description: "A website for obtaining travel insurance quotes and making insurance sales.",
        url: "https://www.seyahatpolicesi.com",
        img: sepoImg,
        tags: ["completed","job"]
    },
    {
        id: 2,
        title: "Dashboard Tamamliyo",
        technologies:"TailwindCSS, AlpineJS, Laravel, Livewire",
        description: "The dashboard page for Tamamliyo company, where partners, sales, and other controls can be managed. Ongoing developments are in progress.",
        url: "https://dashboard.tamamliyo.com",
        img: dashboardImg,
        tags: ["completed","job"]
    },
    {
        id: 3,
        title: "Tamamliyo.com",
        technologies: "HTML, CSS, PHP, JS, jQuery, Curl, TailwindCSS, AlpineJS",
        description: "A product sales page integrated into the Tamamliyo company website. Quotes can be received and sales can be made on this platform.",
        url: "https://tamamliyo.com",
        img: tamamliyoImg,
        tags: ["completed","job"]
    },
    {
        id: 4,
        title: "Kirilmiyo.com",
        technologies:"Vue.js, TailwindCSS",
        description: "A platform where mobile phone dealers can sell mobile phone insurance for additional income. Ongoing developments are in progress.",
        url: "https://kirilmiyo.com",
        img: kirilmiyoImg,
        tags: ["completed","job"]
    },
    {
        id: 5,
        title: "Vue Web App",
        technologies:"Vue.js, TailwindCSS, Laravel, RestAPI",
        description: "A site where current exchange rates and news can be obtained through a free API service.",
        url: "https://github.com/Bigoben20/vue_dashboard",
        img: webApp,
        tags: ["paused","personal"]
    },
    {
        id: 6,
        title: "My FRP Characters",
        technologies:"Vue.js, TailwindCSS, Laravel, Inertia",
        description: "A website for creating, editing, and deleting accounts and characters for a desktop role-playing game.",
        url: "https://frp.kerembilgehancikar.com",
        img: frpCharactersImg,
        tags: ["paused","personal"]
    },
]);
</script>

<style scoped>
.card {
    @apply rounded-2xl hover:shadow-md p-4 hover:bg-gradient-to-br from-lime-500/10 to-teal-500/10;
}

img {
    z-index: 1;
}
</style>