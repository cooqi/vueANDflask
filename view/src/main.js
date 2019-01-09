// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router,routerGo} from './router';
import api from './fetch/api';
import config from './config/utils';
import store from './store'

Vue.config.productionTip = false

//循环遍历所有过滤器
import * as filters from './filter/index.js';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;
Vue.prototype.$routeGo    = routerGo;
Vue.prototype.$api    = api;
Vue.prototype.$config    = config;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
