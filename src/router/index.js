// import Vue from 'vue'
// import Router from 'vue-router'
// import {Indicator} from 'mint-ui'
// import login from '@/components/Login'

// Vue.use(Router)

const Login = () => import('@/components/Login')

let routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login, // require第一个参数必须是数组
    alias: '/'
  }
]

export default routes
