import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/pages/Home.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "services" */ './views/pages/Services.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import(/* webpackChunkName: "about-us" */ './views/pages/AboutUs.vue')
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import(/* webpackChunkName: "culture" */ './views/pages/Culture.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/pages/Contact.vue')
    }
  ]
})
