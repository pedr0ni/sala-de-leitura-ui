import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Dashboard from '../views/Dashboard/Dashboard'
import Overview from '../views/Dashboard/Overview'

import Authentication from '../views/Authentication/Authentication'
import Login from '../views/Authentication/Login'
import Register from '../views/Authentication/Register'

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
      }
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
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
