import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index'
import Res from '@/pages/res'
import Login from '@/pages/login'
import Theatre from '@/pages/Theatre'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/res',
    name: 'Res',
    component: Res
  },
  {
    path: '/theatre',
    name: 'theatre',
    component: Theatre
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
