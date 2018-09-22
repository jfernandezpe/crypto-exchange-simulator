import Vue from 'vue';
import Vuex from 'vuex';

import pricesOfCoins from './pricesOfCoins.module';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    pricesOfCoins,
  },
});
