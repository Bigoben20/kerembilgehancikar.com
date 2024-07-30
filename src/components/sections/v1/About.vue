<template>
    <div class="flex flex-col gap-10 py-6 divide-green-600 lg:gap-10 lg:divide-x lg:flex-row">
        <div class="grid grid-cols-[auto_auto] items-center gap-x-4 gap-y-2">
            <div class="w-20 h-20 row-span-3 overflow-hidden rounded-sm sm:w-40 sm:h-40">
                <img :src="pp" alt="">
            </div>
            <div class="flex flex-col gap-2">
                <div class="whitespace-nowrap text-lg sm:text-[25px] flex">
                    <template v-if="i == nameText.length">
                        <template v-for="(text,index) in 'Kerem Bilgehan Çıkar'.split(' ')" :key="index">
                            <span class="cursor-pointer hoverV2">
                                {{ text }}
                            </span>
                            <span v-if="index < 2" class="cursor-default">&nbsp;</span>
                        </template>
                    </template>
                    <div v-else>
                        {{ name }}
                    </div>
                    <div class="w-4 h-[28px] bg-green-500 animate-blink border-l border-black"></div>
                </div>
                <div class="text-[13px] text-green-700 hover:bg-green-700 hover:text-black w-fit cursor-pointer">Fullstack Web Developer</div>
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
            <div class="flex flex-wrap mt-2 text-sm text-justify sm:text-base">
                <template v-for="(text,index) in about" :key="index">
                    <span class="cursor-pointer hoverV2">
                        {{ text }}
                    </span>
                    <span class="cursor-default">&nbsp;</span>
                </template>
            </div>
        </div>

    </div>
</template>

<script setup>
import pp from '@/assets/images/kbc.jpeg'
import cvEnPdf from '@/assets/cv/KeremBilgehanCIKAR_CV_EN.pdf'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue';

const store = useStore();
const showClipboard = ref(false);

const about = ref([]);
const name = ref("");
const aboutText = "I'm Bilgehan, a passionate web developer with a keen eye for design. With +2 years of experience, I've worked on various projects, mastering both front-end and back-end technologies. I thrive in team environments, bringing creative problem-solving skills to the table. My goal is to deliver customized, user-friendly web solutions while prioritizing client satisfaction.";
const nameText = "Kerem Bilgehan Çıkar";

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

about.value = aboutText.split(' ');

const i = ref(0)
function typeWriter() {
  if (i.value < nameText.length) {
    const harf = nameText.charAt(i.value);
    name.value = name.value + harf;
    i.value = i.value + 1;
    setTimeout(typeWriter, 200);
  }
}

onMounted(() => {
    setTimeout(() => {
        typeWriter();
    }, 2500);
})
</script>

<style></style>