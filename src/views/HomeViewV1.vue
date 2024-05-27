<script setup>
import AboutView from "@/components/sections/v1/About.vue";
import ProjectsVue from "@/components/sections/v1/Projects.vue";
import NavbarVue from '@/components/sections/v1/Navbar.vue';
import FooterVue from "@/components/sections/v1/Footer.vue";
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
</template>