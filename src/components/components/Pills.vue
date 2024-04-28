<template>
  <div v-if="tag == 'completed'" class="bg-green-500 px-1.5 py-[1px] rounded-full text-[11px] w-fit uppercase font-semibold tracking-wide">
    Completed
  </div>
</template>

<script setup>
const props = defineProps({
  tag: String
})
</script>

<style>

</style>