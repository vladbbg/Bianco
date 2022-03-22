import Vue from 'vue'
import VueRouter from 'vue-router'
import { getAuth } from 'firebase/auth'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main' , bgImage: true},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout: 'main', },
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/drinks',
    name: 'Drinks',
    meta: {layout: 'main', },
    component: () => import('../views/Drinks.vue')
    
  },
  {
    path: '/starters',
    name: 'Starters',
    meta: {layout: 'main'},
    component: () => import('../views/Starters.vue')
  },
  {
    path: '/main-courses',
    name: 'Main-Courses',
    meta: {layout: 'main'},
    component: () => import('../views/MainCourses.vue')
  },
  {
    path: '/desserts',
    name: 'Desserts',
    meta: {layout: 'main'},
    component: () => import('../views/Desserts.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    meta: {layout: 'main'},
    component: () => import('../views/Reservation.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    meta: {layout: 'main'},
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/reserve',
    name: 'Reserve',
    meta: {layout: 'main'},
    component: () => import('../views/Reserve.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    const auth = getAuth();
    const currentUser = auth.currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)

    if(requireAuth && !currentUser ) {
      console.log("not-auth");
      next('/login')
      
    }else {
      next()
    }
})

export default router
