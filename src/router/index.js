import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "" */ '../views/Home.vue')
  },
  // {
  //   path: '/components',
  //   name: 'Components',
  //   component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue')
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/residential',
    name: 'Residential',
    component: () => import(/* webpackChunkName: "residential" */ '../views/Residential.vue')
  },
  {
    path: '/commercial',
    name: 'Commercial',
    component: () => import(/* webpackChunkName: "commercial" */ '../views/Commercial.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import(/* webpackChunkName: "resources" */ '../views/Resources.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
