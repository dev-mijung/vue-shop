import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';
import VueSession from 'vue-session';
import VueSplide from '@splidejs/vue-splide';

Vue.use(VueSplide);
Vue.use(VueSession)

var options = {
  persist: true
}

Vue.use(VueSession, options)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
