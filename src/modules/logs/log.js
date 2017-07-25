import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import axios from 'axios';
Vue.prototype.$axios=axios;
import loginlog from './systemlogin'
import systemhandle from './systemhandle'
import systemerrlog from './systemerrlog'
import prohead from '../common/head'
import logtag from './tag'
import 'iview/dist/styles/iview.css'
import qs from 'qs'
Vue.prototype.$qs=qs
import api from '../../fetch/api'
Vue.prototype.$api=api

Vue.config.productionTip = false
Vue.use(iView)
Vue.component('prohead', prohead)
Vue.component('loginlog', loginlog)
Vue.component('systemhandle', systemhandle)
Vue.component('systemerrlog', systemerrlog)
Vue.use(VueRouter);
Vue.config.debug = true;

//配置路由
const routes = [
  {path:'/home', component :loginlog},
  {path:'/news', component:systemhandle},
  {path:'/about',component:systemerrlog},
  //重定向
  {path:'*',redirect:'/home'}
]
//生成路由实例
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#systemlog',
  router,
  components: {loginlog,systemhandle,systemerrlog,logtag}
})

