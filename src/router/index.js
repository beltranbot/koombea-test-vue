import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import ContactsView from '../views/ContactsView'
import ContactDetailsView from '../views/ContactDetailsView'
import FilesView from '../views/FilesView'
import FileErrorsView from '../views/FileErrorsView'
import store from '../store'

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
  },
  {
    path: '/contacts/:id',
    name: 'ContactDetailsView',
    component: ContactDetailsView,
    props: true,
  },
  {
    path: '/files',
    name: 'FilesView',
    component: FilesView,
  },
  {
    path: '/files/:id/errors',
    name: 'FileErrorsView',
    component: FileErrorsView,
    props: true
  },
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
