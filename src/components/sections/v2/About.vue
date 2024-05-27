<template>
    <div class="flex flex-col gap-10 py-6 divide-green-600 lg:gap-10 lg:divide-x lg:flex-row">
        <div class="grid grid-cols-[auto_auto] items-center gap-x-4 gap-y-2">
            <div class="w-20 h-20 row-span-3 overflow-hidden rounded-sm sm:w-40 sm:h-40">
                <img :src="pp" alt="">
            </div>
            <div class="flex flex-col gap-2">
                <div class="whitespace-nowrap text-lg sm:text-[25px]">Kerem Bilgehan Çıkar</div>
                <div class="text-[13px] text-green-700">Fullstack Web Developer</div>
            </div>
            <div class="text-[11px] sm:text-sm">
                <span class="mr-1 font-semibold tracking-wide">Email:</span><span class="hover:cursor-pointer hoverV2" @click="copyToClipboard('info@kerembilgehancikar.com')">info@kerembilgehancikar.com</span>
                <span class="ml-1 transition-all duration-300 ease-in" v-show="showClipboard"><i class="fa-regular fa-clipboard"></i></span>
            </div>
            <a :href="cvEnPdf" download class="w-fit hoverV2">
                <span>Download CV</span>
                <i class="ml-2 fa-solid fa-download"></i>
            </a>
        </div>
        <div class="flex flex-col gap-4 px-1 lg:pl-10">
            <div class="text-4xl font-bold text-black bg-green-500 w-fit">Hello There!</div>
            <div class="text-justify mt-2text-sm sm:text-base">
                I'm Bilgehan, a passionate web developer with a keen eye for design. With +2 years of experience, I've worked on various projects, mastering both front-end and back-end
                technologies. I thrive in team environments, bringing creative problem-solving skills to the table. My goal is to deliver customized, user-friendly web solutions while prioritizing
                client
                satisfaction.
            </div>
        </div>

    </div>
</template>

<script setup>
import pp from '@/assets/images/kbc.jpeg'
import cvEnPdf from '@/assets/cv/KeremBilgehanCIKAR_CV_EN.pdf'
import { useStore } from 'vuex'
import { ref } from 'vue';

const store = useStore();
const showClipboard = ref(false);

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showClipboard.value = true;
    setTimeout(() => {
        showClipboard.value = false;
    }, 2000);
} catch (err) {
    showClipboard.value = false;
    console.error('Kopyalama başarısız:', err);
  }
};
</script>

<style></style>