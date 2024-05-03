<template>
    <header class="navbar" :class="isSticky ? 'bg-neutral-900/70 py-6':'mx-2 rounded-lg bg-neutral-900 py-3'" id="header">
        <div>
            <nav class="flex items-center justify-between">
                <div class="flex items-center gap-10">
                    <a href="#" class="text-xl hoverGlow md:text-base"><i class="fa-solid fa-house"></i></a>
                    <div class="items-center hidden gap-10 text-lg md:flex md:text-sm">
                        <a href="#projects" class=" hoverGlow">Projects</a>
                        <div class="w-[1px] h-6 bg-neutral-400"></div>
                        <!-- <a href="#gallery" class=" hoverGlowOrange hover:animate-hue-rotate">Gallery</a> -->
                        <a href="https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" class="relative group">
                            <div class=" group-hover:text-indigo-200">Music</div>
                            <div class="absolute top-0 left-0 invisible text-purple-300 group-hover:animate-music-beat group-hover:visible">Music</div>
                        </a>
                        <a href="https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg" class=" hoverGlowRed">Youtube</a>
                    </div>
                </div>

                <div class="flex gap-4 text-2xl md:text-lg item-center">
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
import { onMounted, ref } from "vue";


const menu = ref(false);
const isSticky = ref(false);
const links = ref([
    { id: 1, text: "Home", url: "/", state: 0 },
    { id: 2, text: "Projects", url: "#projects", state: 0 },
    // { id: 3, text: "Gallery", url: "#", state: 0 },
    { id: 4, text: "Music", url: "https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", state: 0 },
    { id: 5, text: "Youtube", url: "https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg", state: 0 },
]);


function toggleMenu() {
    menu.value = !menu.value;
}

onMounted(() => {
    let main = document.getElementById("header");

    window.addEventListener("scroll", (ev) => {
        ev.preventDefault();
        isSticky.value = document.body.scrollTop >= (main.offsetTop) || document.documentElement.scrollTop >= (main.offsetTop);
        
        // if (isSticky.value) {
        //     main.classList.add("pt-12");
        // } else {
        //     main.classList.remove("pt-12");
        // }
    });
});
</script>

<style scoped>
.navbar {
    @apply sticky top-[-1px] z-[100] px-4 border border-neutral-800 backdrop-blur-lg transition-all duration-100 ease-out;
}

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