import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'
import ContactUs from '../components/views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/contact-us',name:"Contact Us",component:ContactUs}
    // {
    //   path: '/task',
    //   name: 'task',
    //   component: task
    // }
 
  ]
})
export default router