import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import i18nSetup from '@/lib/i18n';

import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n: i18nSetup(),
  render: h => h(App),
}).$mount('#app');
