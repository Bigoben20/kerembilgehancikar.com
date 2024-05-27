<template>
  <div class="static w-full pt-20 text-green-500 selection:bg-green-500 selection:text-black">
    <NavbarVue />

    <div id="main" class="px-4">
      <main class="h-full min-h-screen">
        <AboutVue />
        <ProjectsVue />
      </main>
    </div>
  </div>

  <canvas id="canv" class="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out" :class="loaded ? 'opacity-5 z-[-1]' : 'opacity-100 z-[1010]'"></canvas>
</template>

<script setup>
import NavbarVue from '@/components/sections/v2/Navbar.vue';
import AboutVue from '@/components/sections/v2/About.vue';
import ProjectsVue from '@/components/sections/v2/Projects.vue';
import { onMounted, ref } from 'vue';

const loaded = ref(false);

onMounted(() => {
  const canvas = document.getElementById('canv');
  const ctx = canvas.getContext('2d');
  
  let w,h,cols,ypos = 0;
  function bodySize() {
    w = canvas.width = document.body.offsetWidth;
    h = canvas.height = document.body.offsetHeight;
    cols = Math.floor(w / 20) + 1;
    ypos = Array(cols).fill(0);
  }

  bodySize();
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, w, h);

  function matrix() {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 20;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  }

  window.addEventListener('resize', () => {
    bodySize();
  });

  setTimeout(() => {
    loaded.value = true;
  }, 2000);
  setInterval(matrix, 50);
});
</script>