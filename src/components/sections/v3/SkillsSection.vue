<template>
  <div class="p-6 rounded-lg bg-stone-100/10 col-span-full md:col-span-1">
    <h3 class="mb-4 font-serif text-xl">Skills & <em>Technologies</em></h3>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(category, index) in skills" :key="index">
        <h4 class="mb-2 text-sm font-medium text-stone-300">{{ category.name }}</h4>
        <div class="space-y-2">
          <div v-for="skill in category.items" :key="skill.name" 
            class="flex items-center gap-2">
            <div class="w-full bg-stone-800 rounded-full h-1.5">
              <div class="bg-stone-300 h-1.5 rounded-full" 
                :style="{ width: `${skill.level}%` }">
              </div>
            </div>
            <span class="text-xs text-stone-400 min-w-[80px]">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    name: "Frontend",
    items: [
      { name: "Vue.js", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 50 }
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "RestAPI", level: 80 }
    ]
  }
]
</script>