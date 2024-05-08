<template>
  <div class="grid grid-cols-1 gap-10 py-6">
    <div class="flex items-center gap-4 md:gap-6">
      <div class="w-20 h-20 overflow-hidden rounded-full md:w-40 md:h-40">
        <img :src="pp" alt="">
      </div>
      <div class="flex flex-col items-start gap-2">
        <div class="relative text-lg md:text-[25px] z-[1]">
          <span class="">Kerem Bilgehan Çıkar</span>
          <i class="absolute text-green-500 top-1 -right-8 fa-solid fa-circle-check"></i>
        </div>
        <span class="text-[13px] text-neutral-400">Fullstack Web Developer</span>
      </div>
    </div>
    <div class="px-1">
      <div class="text-sm text-justify md:text-base">
        Hello! I'm Bilgehan, a passionate web developer with a keen eye for design. With +2 years of experience, I've worked on various projects, mastering both front-end and back-end
        technologies. I thrive in team environments, bringing creative problem-solving skills to the table. My goal is to deliver customized, user-friendly web solutions while prioritizing client
        satisfaction.
      </div>
    </div>
    <div class="px-1">
      <div class="text-sm text-neutral-300">
        <span class="mr-1 font-semibold tracking-wide">Email:</span><span class="select-all">k.bilge3817@gmail.com</span>
      </div>
      <div v-if="false" class="text-sm text-neutral-300">
        <span class="mr-1 font-semibold tracking-wide">Phone:</span><span>+90 542 350 18 99</span>
      </div>
    </div>
    <a :href="cvEnPdf" download class="w-full px-6 py-2 text-lg text-center rounded-full bg-gradient-to-r from-lime-500 to-teal-500 active:hue-rotate-30">
      <span>Download CV</span>
      <i class="ml-2 fa-solid fa-download"></i>
    </a>

  </div>
</template>

<script setup>
import pp from '@/assets/images/kbc.jpeg'
import cvEnPdf from '@/assets/cv/KeremBilgehanCIKAR_CV_EN.pdf'
</script>

<style></style>