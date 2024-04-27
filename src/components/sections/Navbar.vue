<template>
    <header class="w-full px-4 py-3 border rounded-lg border-neutral-800 bg-neutral-800/40 backdrop-blur-md">
        <div>
            <nav class="flex items-center justify-between">
                <div class="flex items-center gap-10">
                    <router-link to="/" class="hoverGlow"><i class="fa-solid fa-house"></i></router-link>
                    <div class="items-center hidden gap-10 md:flex">
                        <a href="#projects" class="text-sm hoverGlow">Projects</a>
                        <div class="w-[1px] h-6 bg-neutral-400"></div>
                        <a href="#gallery" class="text-sm hoverGlowOrange hover:animate-hue-rotate">Gallery</a>
                        <a href="https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" class="relative group">
                            <div class="text-sm group-hover:text-indigo-200">Music</div>
                            <div class="absolute top-0 left-0 invisible text-sm text-purple-300 group-hover:animate-music-beat group-hover:visible">Music</div>
                        </a>
                        <a href="https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg" class="text-sm hoverGlowRed">Youtube</a>
                    </div>
                </div>

                <div class="flex gap-4 text-xl md:text-lg item-center">
                    <a href="#projects">
                        <i class="fa-solid fa-hand-holding-medical"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kbilgehancikar/">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Bigoben20">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <div class="flex items-center gap-4 md:hidden">
                        <div class="w-[1px] h-6 bg-neutral-400"></div>
                        <button @click="toggleMenu">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <transition name="fade">
        <div v-if="menu" class="fixed top-0 left-0 w-full h-[100svh] bg-neutral-950 z-[1001]">
            <button @click="toggleMenu" class="absolute text-lg top-8 right-6">
                <i class="fa-solid fa-x"></i>
            </button>

            <div class="flex flex-col items-center justify-center h-full gap-8 offCanvas">
                <!-- hover ile state kontrolü, state'e göre class değişiklikleri, slide-up transitions -->
                <a v-for="link in links" :key="link.id" :href="link.url" @mouseenter="link.state = 1" @mouseleave="link.state = 0" @click="menu = false"
                    class="relative w-[274px] h-[60px] overflow-hidden transition-colors duration-100"
                    :class="[links.some(item => item.state == 1) && link.state != 1 ? 'text-neutral-500' : 'text-neutral-100']">
                    <transition mode="out-in" name="slide-up">
                        <span v-if="link.state == 0" class="absolute">{{ link.text }}</span>
                        <span v-else class="absolute">{{ link.text }}</span>
                    </transition>
                </a>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from "vue";


const menu = ref(false);
const links = ref([
    { id: 1, text: "Home", url: "#", state: 0 },
    { id: 2, text: "Projects", url: "#", state: 0 },
    { id: 3, text: "Gallery", url: "#", state: 0 },
    { id: 4, text: "Music", url: "https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", state: 0 },
    { id: 5, text: "Youtube", url: "https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg", state: 0 },
]);


function toggleMenu() {
    menu.value = !menu.value;
}
</script>

<style scoped>
.hoverGlow:hover {
    transition: all 0.1s ease-out;
    text-shadow: #ffffff 0px 0px 2px;
}

.hoverGlowOrange:hover {
    transition: all 0.1s ease-out;
    text-shadow: #ead432 0px 0px 2px;
    color: #efe6a0;
}

.hoverGlowRed:hover {
    transition: all 0.1s ease-out;
    text-shadow: #f71537 0px 0px 2px;
    color: #f5708d;
}

.offCanvas a {
    @apply text-6xl font-semibold uppercase tracking-wider;
}
</style>