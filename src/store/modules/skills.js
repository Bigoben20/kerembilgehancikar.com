export default {
  namespaced: true,
  state: {
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "Vue.js", level: 90 },
          { name: "React", level: 75 },
          { name: "TailwindCSS", level: 95 },
          { name: "JavaScript", level: 85 }
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "PHP", level: 80 },
          { name: "Laravel", level: 85 },
          { name: "Node.js", level: 70 },
          { name: "MySQL", level: 75 }
        ]
      }
    ]
  }
}