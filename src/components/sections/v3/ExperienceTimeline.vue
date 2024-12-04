<template>
  <div class="p-6 rounded-lg bg-stone-100/10 col-span-full md:col-span-1">
    <h3 class="mb-4 font-serif text-xl">Work <em>Experience</em></h3>
    <div class="space-y-6">
      <div v-for="job in experience" :key="job.company" 
        class="relative pl-6 border-l border-stone-700">
        <div class="absolute w-3 h-3 bg-stone-700 rounded-full -left-[6.5px] top-1"></div>
        <div class="space-y-1">
          <h4 class="font-medium">{{ job.role }}</h4>
          <p class="text-sm text-stone-400">{{ job.company }}</p>
          <p class="text-xs text-stone-500">{{ job.period }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experience = [
  {
    role: "Mid Level Fullstack Developer",
    company: "Tamamliyo",
    period: "2023 - Present"
  },
  {
    role: "Junior Fullstack Developer",
    company: "Tamamliyo",
    period: "2022 - 2023"
  },
  {
    role: "Junior Frontend Developer",
    company: "Jeli AI",
    period: "2021 - 2022"
  }
]
</script>