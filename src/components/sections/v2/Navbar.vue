<template>
    <header class="navbar" id="header">
        <div>
            <nav class="flex items-center justify-between">
                <div class="flex gap-4 item-center">
                    <button @click="toggleMenu" class="nav-button" title="Menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <a href="https://buymeacoffee.com/kbilgehancikar" class="nav-link" title="Buy Me a Coffee">
                        <i class="fa-solid fa-hand-holding-medical"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kbilgehancikar/" class="nav-link" title="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Bigoben20" class="nav-link" title="GitHub">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div class="relative">
                    <Dropdown align="right" width="w-fit" contentClasses="py-1 bg-transparent">
                        <template #trigger>
                            <div class="hover:cursor-pointer">
                                .v2
                            </div>
                        </template>

                        <template #content>
                            <div class="px-2">
                                <router-link to="/v1" class="text-black bg-green-500">.v1</router-link>
                            </div>
                        </template>
                    </Dropdown>
                </div>
            </nav>
        </div>
    </header>
    <transition name="fade">
        <div v-if="menu" class="fixed top-0 left-0 w-full h-[100vh] bg-neutral-950 z-[1001]">
            
            <div class="flex flex-col items-start justify-center h-full gap-8 px-4 offCanvas sm:px-10">
                <!-- hover ile state kontrolü, state'e göre class değişiklikleri, slide-up transitions -->
                <button v-for="link in links" :key="link.id" @click="goTo(link.url)" @mouseenter="link.state = 1" @mouseleave="link.state = 0"
                    class="menu-links hoverV2">
                    <span class="">{{ link.text }}</span>
                </button>

                <button @click="toggleMenu" class="mt-4 menu-links hoverV2">
                    Close
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import Dropdown from '@/components/components/Dropdown.vue';
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const menu = ref(false);
const isSticky = ref(false);
const links = ref([
    { id: 1, text: "Home", url: "app", state: 0 },
    { id: 2, text: "Projects", url: "projects", state: 0 },
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
    @apply fixed top-0 left-0 w-full p-4 bg-neutral-950 z-[998];
}

.navbar .nav-link, .navbar .nav-button {
    @apply hover:text-black hover:bg-green-500 px-1 py-1.5 text-2xl;
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

.menu-links {
    @apply text-green-500 hover:bg-green-500 hover:text-black transition-colors duration-150 ease-out text-6xl font-semibold capitalize tracking-wider;
}
</style>