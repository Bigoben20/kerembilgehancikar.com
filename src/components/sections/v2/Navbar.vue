<template>
    <header class="navbar" :class="isSticky ? 'bg-neutral-900/70 py-6 md:py-3 md:rounded':'mx-2 rounded-lg bg-neutral-900 py-3'" id="header">
        <div>
            <nav class="flex items-center justify-between">
                <div class="flex items-center gap-8">
                    <button @click="goTo('app')" class="text-xl hoverGlowPrimary md:text-base"><i class="fa-solid fa-house"></i></button>
                    <div class="items-center hidden gap-8 text-lg md:flex md:text-sm">
                        <button @click="goTo('projects')" class=" hoverGlow">Projects</button>
                        <div class="w-[1px] h-6 bg-neutral-400"></div>
                        <a href="https://blog.kerembilgehancikar.com" class="hoverGlowOrange">Blog</a>
                        <button @click="goTo('https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')" class="relative group">
                            <div class=" group-hover:text-indigo-200">Music</div>
                            <div class="absolute top-0 left-0 invisible text-purple-300 group-hover:animate-music-beat group-hover:visible">Music</div>
                        </button>
                        <button @click="goTo('https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg')" class=" hoverGlowRed">Youtube</button>
                    </div>
                </div>

                <div class="flex gap-4 text-2xl md:text-lg item-center">
                    <a href="https://buymeacoffee.com/kbilgehancikar" class="hoverGlowPrimary">
                        <i class="fa-solid fa-hand-holding-medical"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kbilgehancikar/" class="hoverGlowPrimary">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Bigoben20" class="hoverGlowPrimary">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <div class="flex items-center gap-4">
                        <div class="w-[1px] h-6 bg-neutral-400"></div>
                        <button @click="toggleMenu" class="hoverGlowPrimary">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <transition name="fade">
        <div v-if="menu" class="fixed top-0 left-0 w-full h-[100vh] bg-neutral-950 z-[1001]">
            <button @click="toggleMenu" class="absolute text-lg top-8 right-6 text-neutral-200">
                <i class="fa-solid fa-x"></i>
            </button>

            <div class="flex flex-col items-center justify-center h-full gap-8 offCanvas" @click.self="toggleMenu">
                <!-- hover ile state kontrolü, state'e göre class değişiklikleri, slide-up transitions -->
                <button v-for="link in links" :key="link.id" @click="goTo(link.url)" @mouseenter="link.state = 1" @mouseleave="link.state = 0"
                    class="relative w-[320px] h-[60px] overflow-hidden transition-colors duration-100 menu-links"
                    :class="[links.some(item => item.state == 1) && link.state != 1 ? 'text-neutral-500' : 'text-neutral-100']">
                    <transition mode="out-in" name="slide-up">
                        <span v-if="link.state == 0" class="absolute top-0 left-0">{{ link.text }}</span>
                        <span v-else class="absolute top-0 left-0" :class="{'text-indigo-400':link.id == 4, 'text-red-400':link.id == 5,}" :style="{'text-shadow': link.id == 4? 'rgb(99 102 241) 0px 0px 4px': link.id == 5? 'rgb(239 68 68) 0px 0px 4px': '#fff 0px 0px 1px'}">{{ link.text }}</span>
                    </transition>
                </button>
                
                <div class="w-[320px] ">
                    <router-link to="/v1" class="font-semibold tracking-wider uppercase text-neutral-400 hover:text-green-500">
                        <span class="text-4xl">.v1</span>
                        <i class="ml-1 text-2xl fa-solid fa-arrow-right"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";


const menu = ref(false);
const isSticky = ref(false);
const links = ref([
    { id: 1, text: "Home", url: "app", state: 0 },
    { id: 2, text: "Projects", url: "projects", state: 0 },
    { id: 3, text: "Blog", url: "https://blog.kerembilgehancikar.com", state: 0 },
    { id: 4, text: "Music", url: "https://soundcloud.com/bigoben?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", state: 0 },
    { id: 5, text: "Youtube", url: "https://www.youtube.com/channel/UC_bRlwqiRNB4xWJoUCqPFvg", state: 0 },
]);
const versionList = ref(false)

function toggleMenu() {
    menu.value = !menu.value;
}

onMounted(() => {
    let main = document.getElementById("header");

    window.addEventListener("scroll", (ev) => {
        ev.preventDefault();
        isSticky.value = document.body.scrollTop >= (main.offsetTop) || document.documentElement.scrollTop >= (main.offsetTop);
    });
});

function goTo(id){

    if (menu.value) {
        menu.value = false;
    }

    if (id.includes('https') || id.includes('.com')) {
        window.open(id, '_blank').focus();
        return;
    } else {
        window.scrollTo({
            top: document.querySelector(`#${id}`).offsetTop - 60,
            behavior: 'smooth'
        });
    }
    

}
</script>

<style scoped>
.navbar {
    @apply sticky top-[-1px] z-[100] px-4 border border-neutral-800 backdrop-blur-lg transition-all duration-100 ease-out  text-neutral-200;
}

.hoverGlow:hover {
    transition: all 0.1s ease-out;
    text-shadow: #ffffff 0px 0px 2px;
}

.hoverGlowPrimary:hover {
    transition: all 0.1s ease-out;
    text-shadow: #bfff71 0px 0px 2px;
    color: #bfff71 ;
}

.hoverGlowOrange:hover {
    transition: all 0.1s ease-out;
    text-shadow: #32b3ea 0px 0px 2px;
    color: #a0c6ef;
}

.hoverGlowRed:hover {
    transition: all 0.1s ease-out;
    text-shadow: #f71537 0px 0px 2px;
    color: #f5708d;
}

.menu-links {
    @apply text-6xl font-semibold uppercase tracking-wider;
}
</style>