import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { VueI18n, i18nSetup } from '../lib/i18n';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(BootstrapVue);
Vue.use(VueI18n);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n: i18nSetup(),
  render: h => h(App),
}).$mount('#app');
