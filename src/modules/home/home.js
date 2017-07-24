import Vue from 'vue'
import iView from 'iview'
import axios from 'axios';
Vue.prototype.$axios=axios;
import homepage from './homepage'
import myhead from './head'
import 'iview/dist/styles/iview.css'


Vue.config.productionTip = false
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#home',
  components: {myhead,homepage }
})
