import { createRouter, createWebHistory } from 'vue-router'
import HomeViewV2 from '../views/HomeViewV2.vue'
import HomeViewV1 from '../views/HomeViewV1.vue'
import HomeViewV3 from '../views/HomeViewV3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: HomeViewV3
    },
    {
      path: '/v2',
      name: 'Portfolio.v2',
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
  document.title = "KBC | " + to.name;
  next();
})

export default router