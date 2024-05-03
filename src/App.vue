<script setup>
import NavbarVue from './components/sections/Navbar.vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="base">
    <div class="static w-full max-w-3xl py-6">
      <NavbarVue />
      <main id="main" class="px-2">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
