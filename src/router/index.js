import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/views/Home.vue'
// import TestView from '@/views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    
    // {
    //   path: '/task',
    //   name: 'task',
    //   component: task
    // }
 
  ]
})
export default router