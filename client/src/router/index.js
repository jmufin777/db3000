import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Desktop from '@/components/Desktop'
import Desktop2 from '@/components/Desktop_2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/desktop',
      name: 'desktop',
      component: Desktop
    },
    {
      path: '/desktop2',
      name: 'desktop2',
      component: Desktop2
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})
