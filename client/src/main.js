// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vuetify from 'vuetify'
// import { VTooltip } from 'v-tooltip'
// import VModal from 'vue-js-modal'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

// main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' //
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'

// import DlgDraggable from 'vue-element-dialog-draggable'
import Panel from '@/components/globals/Panel'
import Ram1 from '@/components/globals/Ram1'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import draggable from 'vuedraggable'

Vue.config.productionTip = false

Vue.use(vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

// Vue.use(DlgDraggable)
Vue.use(ElementUI)

Vue.component('panel', Panel)
Vue.component('ram1', Ram1)

// Vue.directive('my-tooltip', VTooltip)
// Vue.use(VModal, { dialog: true })
sync(store, router)

export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    draggable
  },
  template: '<App/>'
})

// var vm = new Vue({
//   data: {
//     // declare message with an empty value
//     message: ''
//   },
//   template: '<div>{{ message }}</div>'
// })
// // set `message` later
// vm.message = 'Hello!'
