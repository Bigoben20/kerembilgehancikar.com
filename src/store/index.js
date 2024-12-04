import { createStore } from 'vuex'
import projects from './modules/projects'
import skills from './modules/skills'

export default createStore({
  modules: {
    projects,
    skills
  }
})