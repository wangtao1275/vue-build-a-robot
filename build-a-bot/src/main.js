import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/current-filter';


Vue.config.productionTip = false
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
