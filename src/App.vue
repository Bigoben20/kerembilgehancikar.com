<script setup>
import NavbarVue from './components/sections/Navbar.vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="base">
    <div class="w-full max-w-4xl px-2 py-6">
      <NavbarVue />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
