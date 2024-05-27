<template>
    <div class="py-4" id="projects">
        <div class="text-lg border-b border-green-600">
            <p>Projects</p>
        </div>
        <div class="grid grid-cols-1 gap-2 mt-4 divide-y divide-green-900 sm:divide-y-0">
            <a :href="project.url" target="_blank" v-for="project in projects" :key="project.id" class="card group">
                
                <img :src="`${project.img}`" alt="" class="hidden w-32 h-full sm:block"/>

                <div class="flex flex-col items-start gap-2 p-1 ">
                    <span class="font-semibold group-hover:bg-green-500 group-hover:text-black">
                        {{ project.title }}
                        <i class="text-green-500 sm:text-black fa-solid fa-arrow-right group-hover:sm:visible"></i>
                    </span>
                    <div class="text-xs ">
                        <span class="font-semibold">Technologies: </span>
                        <span class="text-green-200">{{ project.technologies }}</span>
                    </div>
                    <div class="text-xs ">
                        <span class="font-semibold">Description: </span>
                        <span class="text-green-200">{{ project.description }}</span>
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
import kirilmiyoImg from "@/assets/images/projects/kirilmiyo.jpeg"
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
        tags: ["completed","personal"]
    },
]);
</script>

<style scoped>
.card {
    @apply p-2 flex gap-2 items-start justify-start;
}

img {
    z-index: 1;
}
</style>