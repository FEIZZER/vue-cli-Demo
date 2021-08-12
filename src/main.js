// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import Vuex from 'vuex'
import store from './store/store'

import 'element-ui/lib/theme-chalk/index.css'
import  Elementui from 'element-ui'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Elementui)

new Vue({
  el: '#app',
  store,
  router,
  components: { App ,Elementui},
  template: '<App/>'
})
