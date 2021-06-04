import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import ContactsView from '../views/ContactsView'
import store from '../store'
import { createLogger } from 'vuex'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/contacts',
    name: 'ContactsView',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'LoginView' && !store.getters.isAuthenticated) {
    next({ name: 'LoginView' })
  } else if (to.name === 'LoginView' && store.getters.isAuthenticated) {
    next({ name: 'HomeView' })
  } else {
    next()
  }
})

export default router
