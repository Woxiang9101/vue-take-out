/* 入口文件*/
import Vue from 'vue';

import App from './App';
import router from './router/index';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
