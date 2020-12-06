import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "" */ '../views/Home.vue'),
    meta: {
      redirect: false,
      requiresAuth: false
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      redirect: false,
      requiresAuth: false
    },
  },
  {
    path: '/residential',
    name: 'Residential',
    component: () => import(/* webpackChunkName: "residential" */ '../views/Residential.vue'),
    meta: {
      redirect: false,
      requiresAuth: false
    },
  },
  {
    path: '/commercial',
    name: 'Commercial',
    component: () => import(/* webpackChunkName: "commercial" */ '../views/Commercial.vue'),
    meta: {
      redirect: false,
      requiresAuth: false
    },
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import(/* webpackChunkName: "resources" */ '../views/Resources.vue'),
    meta: {
      redirect: false,
      requiresAuth: false
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      redirect: false,
      requiresAuth: false
    },
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
          redirect: false,
          requiresAuth: false
        },
      },
      {
        path: '/admin/employees',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Employees.vue'),
        meta: {
          redirect: false,
          requiresAuth: true
        },
      },
      {
        path: '/admin/residential',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Residential.vue'),
        meta: {
          redirect: false,
          requiresAuth: true
        },
      },
      {
        path: '/admin/commercial',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Commercial.vue'),
        meta: {
          redirect: false,
          requiresAuth: true
        },
      },
      {
        path: '/admin/terms',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Terms.vue'),
        meta: {
          redirect: false,
          requiresAuth: true
        },
      },
      {
        path: '/admin/settings',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Settings.vue'),
        meta: {
          redirect: false,
          requiresAuth: true
        },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
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
