import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/blog/:slug',
      props: true,
      component: () => import('./views/BlogPost.vue')
    },
    {
      path: '*',
      component: () => import('./views/Home.vue')
    }
  ]
})
