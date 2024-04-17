import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomePage from './components/HomePage.vue'
import NotFound from './components/NotFound.vue';

const app = createApp(App)


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path : '/:pathMatch(.*)*',
        name : 'not-found',
        component : NotFound,
    }
    
    
]
  
const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
}
)


app.use(router)

app.mount('#app')
