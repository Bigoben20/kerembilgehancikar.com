import { projects } from '@/data/projects'

export default {
  namespaced: true,
  state: {
    list: projects,
    filters: ['All', 'Completed', 'In Progress', 'Personal']
  },
  getters: {
    filtered: (state) => (filter) => {
      if (filter === 'All') return state.list
      const filterMap = {
        'Completed': 'completed',
        'In Progress': 'now',
        'Personal': 'personal'
      }
      return state.list.filter(project => 
        project.tags.includes(filterMap[filter])
      )
    }
  }
}