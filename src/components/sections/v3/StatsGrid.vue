<template>
  <div class="grid grid-cols-2 gap-4 col-span-full md:col-span-1">
    <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center justify-center p-4 text-center transition-all duration-300 rounded-lg bg-stone-100/10 group hover:bg-stone-100/20">
      <div class="font-serif text-2xl transition-transform duration-300 group-hover:scale-110">
        {{ stat.value }}
      </div>
      <div class="text-sm text-stone-400">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const howManyYears = computed(() => {
  return store.getters.howManyYears || 4
})

const stats = [
  { label: "Years Experience", value: "+" + howManyYears.value },
  { label: "Projects", value: "+10" },
  { label: "Technologies", value: "+8" },
  { label: "Happy Clients", value: "+7" }
]
</script>