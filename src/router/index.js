// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
    {path: '/',
    component: () => import('@/views/Home.vue')},

  

      {
        path: '/Dividor',
        name: 'Dividor',
        component: () => import('@/views/Dividor.vue'),
      },
      {
        path: '/Multi',
        name: 'Multi',
        component: () => import('@/views/Multi.vue'),
      }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
