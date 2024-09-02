import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import  bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

createApp(App).use(router).use(bootstrap).mount('#app')

