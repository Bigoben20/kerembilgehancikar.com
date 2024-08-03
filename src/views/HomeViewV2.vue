<script setup>
import AboutView from "@/components/sections/v2/About.vue";
import ProjectsVue from "@/components/sections/v2/Projects.vue";
import NavbarVue from '@/components/sections/v2/Navbar.vue';
import FooterVue from "@/components/sections/v2/Footer.vue";
import { onMounted, ref } from "vue";

const loading = ref(0);
onMounted(() => {
  let interval = setInterval(() => {
    loading.value++;

    if (loading.value == 100) {
      clearInterval(interval);
    }
  }, 8);
})


</script>

<template>
  <div class="static w-full max-w-3xl py-6">
    <NavbarVue />
  
    <div id="main" class="px-2 py-4 text-neutral-200">
      <main class="h-full min-h-screen">
        <AboutView />
        <ProjectsVue />
      </main>
    </div>
  
    <FooterVue />

  </div>

  <transition name="fade">
    <div v-if="loading < 100" class="fixed z-[1100] top-0 left-0 w-full h-full bg-neutral-900 flex flex-col justify-center items-center">
      <span class="text-neutral-300">Loading...</span>
      <div class="w-full h-0.5 bg-neutral-800 mt-4">
        <div :style="'width:'+loading+'%'" class="h-full bg-white"></div>
      </div>
    </div>
  </transition>
</template>