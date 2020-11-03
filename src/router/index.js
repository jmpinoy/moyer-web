import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "" */ '../views/Home.vue')
  },
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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
    meta: {
      redirect: true,
      requiresAuth: false
    },
    children: [
      {
        path: '/admin/login',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Login.vue'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: '/admin/dashboard',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Dashboard.vue'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: '/admin/employees',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Employees.vue'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: '/admin/residential',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Residential.vue'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: '/admin/commercial',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Commercial.vue'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: '/admin/terms',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Terms.vue'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: '/admin/users',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Users.vue'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: '/admin/settings',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Settings.vue'),
        meta: {
          requiresAuth: false
        },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (to.meta.redirect) next({ path: '/admin/login' });
  if (requiresAuth && !auth.currentUser) {
    next('/admin/login');
  } else {
    next();
  }
})

export default router
