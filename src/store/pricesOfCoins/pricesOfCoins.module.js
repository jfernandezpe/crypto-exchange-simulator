import provider from './pricesOfCoins.provider';

const initialState = {
  currencies: {

    EUR: 'Euro',
    // USD: 'Dollar',
    BTC: 'Bitcoin',
    ETH: 'Etherium',
    XRP: 'XRP',
    EOS: 'EOS',
    BCH: 'Bitcoin cash',
    XLM: 'Stellar',
    LTC: 'Litecoin',
    ETC: 'Ethereum Classic',
    QTUM: 'QTUM',
    ZEC: 'ZCash',
  },
  currency: {
    shortname: 'EUR',
    symbol: '€',
  },
  prices: [],
  loading: false, /* This var is not used */
};

const moduleState = Object.assign({}, initialState);

const actions = {
  fetchExchangeInfo({
    commit,
  }, { currency, currencies }) {
    commit('loadingPricesOfCoins');

    return provider.fetchPrices(currency, currencies)
      .then((data) => {
        commit('pricesOfCoinsLoaded');
        commit('setPrices', data);
      })
      .catch((error) => {
        commit('pricesOfCoinsLoaded');
        throw new Error(error);
    }); /*  eslint-disable-line indent */
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  loadingPricesOfCoins(state) {
    state.loading = true;
  },
  pricesOfCoinsLoaded(state) {
    state.loading = false;
  },
  setPrices(state, prices) {
    state.prices = prices;
  },
};
/* eslint-enable no-param-reassign */


const getters = {
  prices({
    prices,
  }) {
    return Object.assign({}, prices);
  },
  currencies({
    currencies,
  }) {
    return Object.assign({}, currencies);
  },
  currency({ currency }) {
    return Object.assign({}, currency);
  },
};

export default {
  state: moduleState,
  getters,
  actions,
  mutations,
};
