import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Authentication from '../views/Authentication/Authentication'
import Login from '../views/Authentication/Login.vue'
import Register from '../views/Authentication/Register.vue'
import Complete from '../views/Authentication/Complete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authentication',
    component: Authentication,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'complete',
        name: 'Complete',
        component: Complete
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
