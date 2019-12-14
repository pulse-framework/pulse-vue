import Vue from 'vue'
import App from './App.vue'
import router from './router'

import core from './core';

Vue.config.productionTip = false

Vue.use(core);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')