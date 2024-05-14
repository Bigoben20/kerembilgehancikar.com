<script setup>
import NavbarVue from './components/sections/Navbar.vue'
import FooterVue from "@/components/sections/Footer.vue";

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="relative base">
    <div class="static w-full max-w-3xl py-6">
      <NavbarVue />

      <div id="main" class="px-2 py-4">
        <RouterView />
      </div>
      
      <FooterVue />
    </div>
  </div>
</template>

<style scoped>

</style>
