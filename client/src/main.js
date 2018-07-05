// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vuetify from 'vuetify'
import { VTooltip } from 'v-tooltip'
import VModal from 'vue-js-modal'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

// main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' //
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(vuetify)

Vue.directive('my-tooltip', VTooltip)
Vue.use(VModal, { dialog: true })
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
