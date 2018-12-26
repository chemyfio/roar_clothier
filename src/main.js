import Vue from 'vue'
import './plugins/vuetify'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
// import 'roboto-fontface/css/roboto/roboto-fontface.css';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false

new Vue({
  Vuex,
  router,
  render: h => h(App)
}).$mount('#app')

