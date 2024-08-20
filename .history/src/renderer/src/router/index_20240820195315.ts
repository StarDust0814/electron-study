import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      components: List
    }
  ]
})
