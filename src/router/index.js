import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import( '../views/Register.vue')
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import( '../views/Profile.vue')
  // },
  // {
  //   path: '/search',
  //   name: 'Search',
  //   component: () => import( '../views/Search.vue')
  // },
  // {
  //   path: '/connections',
  //   name: 'Connections',
  //   component: () => import( '../views/Connections.vue')
  // },
  // {
  //   path: '/matches',
  //   name: 'Matches',
  //   component: () => import( '../views/Matches.vue')
  // },
  // {
  //   path: '/messages',
  //   name: 'Messages',
  //   component: () => import( '../views/Messages.vue')
  // },
  // {
  //   path: '/potential',
  //   name: 'Potential',
  //   component: () => import( '../views/Potential.vue')
  // },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: () => import( '../views/Settings.vue')
  // },
  // {
  //   path: '/search/:id',
  //   name: 'userDetails',
  //   component: () => import( '../views/userDetails.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
