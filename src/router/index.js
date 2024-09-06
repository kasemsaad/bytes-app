import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'
import ContactUs from '../components/views/ContactUs.vue'
import AboutUs from '../components/views/AboutUs.vue'
import Blog from '../components/views/blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/contact-us',name:"Contact Us",component:ContactUs},
    {path:'/about-us',name:'About Us', component:AboutUs},
    {path:'/blog',name:'blog',component:Blog}
    // {
    //   path: '/task',
    //   name: 'task',
    //   component: task
    // }
  ]
})
export default router