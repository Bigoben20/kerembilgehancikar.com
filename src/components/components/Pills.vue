<template>
  <div v-if="tag == 'completed'" class="bg-green-500 px-1.5 py-[1px] rounded-full text-[11px] w-fit uppercase font-semibold tracking-wide">
    Completed
  </div>
  <div v-else-if="tag == 'now'" class="bg-amber-500 px-1.5 py-[1px] rounded-full text-[11px] w-fit uppercase font-semibold tracking-wide">
    NOW
  </div>
  <div v-else-if="tag == 'paused'" class="bg-pink-500 px-1.5 py-[1px] rounded-full text-[11px] w-fit uppercase font-semibold tracking-wide">
    PAUSED
  </div>
  <div v-else-if="tag == 'personal'" class="bg-stone-500 px-1.5 py-[1px] rounded-full text-[11px] w-fit uppercase font-semibold tracking-wide">
    PERSONAL
  </div>
</template>

<script setup>
const props = defineProps({
  tag: String
})
</script>

<style>

</style>