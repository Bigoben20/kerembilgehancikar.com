<template>
<div class="absolute bottom-0 left-0 flex justify-center w-full p-2 rounded-t bg-neutral-900">
    <div class="flex items-center justify-between w-full max-w-3xl px-4 text-sm">
        <span>
            © Kerem Bilgehan Çıkar - 2024
        </span>

        <button class="py-1 px-2 bg-green-900 rounded-full group text-[10px] leading-none" @click="goTop()">
            <span>Back to top</span>
            <i class="ml-2 transition-all duration-100 ease-out fa-solid fa-arrow-up group-hover:-translate-y-0.5"></i>
        </button>
    </div>
</div>  
</template>

<script setup>
function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style>

</style>