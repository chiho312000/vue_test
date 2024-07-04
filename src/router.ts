import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import LoginPage from './components/login/LoginPage.vue'

const routes = [
  { path: '/', component: App },
  { path: '/user/:id', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
