import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Desktop from '@/components/Desktop'
import Testy from '@/components/_Testy/testy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: Desktop
    },
    {
      path: '/testy',
      name: 'testy',
      component: Testy
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
