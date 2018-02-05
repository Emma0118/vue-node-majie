// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' // 使用ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router' // 使用vuex分发路由

import Vuex from 'vuex' // 使用vuex控制全局状态
import routes from './router' // 导入所有组件及对应路由
import Mock from './mock'
import store from './vuex/store' // 倒入状态
Mock.bootstrap()

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
