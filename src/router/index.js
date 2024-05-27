import { createRouter, createWebHistory } from 'vue-router'
import HomeViewV1 from '../views/HomeViewV1.vue'
import HomeViewV2 from '../views/HomeViewV2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: HomeViewV2
    },
    {
      path: '/v1',
      name: 'Portfolio.v1',
      component: HomeViewV1
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title =  "KBC | " + to.name;
  
  next();
})
export default router
