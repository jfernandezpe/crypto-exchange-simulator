import cesProvider from '../../lib/ces-provider/index';

const initialState = {

};

const state = Object.assign({}, initialState);

const actions = {
  fetchExchangeInfo({
    commit,
  }) {
    commit('loadingPricesOfCoins');
    return cesProvider.get()
      .then((data) => {
        commit('pricesOfCoinsLoaded');
        commit('setPrices', data);
      })
      .catch((error) => {
        commit('pricesOfCoinsLoaded');
        throw new Error(error);
    });
  },
};

const mutations = {
  loadingPricesOfCoins(state) {

  },
  pricesOfCoinsLoaded(state) {

  },
  setPrices(state, prices) {

  },
};

const getters = {
  pricesOfCoins() {

  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
