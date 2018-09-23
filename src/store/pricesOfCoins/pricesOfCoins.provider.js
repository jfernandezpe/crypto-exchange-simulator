import cesProvider from '@/lib/ces-provider/index';

const objectToArray = (prices, referenceCurrency) => Object.keys(prices).map(name => ({
  name,
  price: prices[name],
  currency: referenceCurrency,
}));

const calcPriceBy = (referenceCurrencyPrice, coin) => Object.assign(
  {},
  coin, {
    price: referenceCurrencyPrice / coin.price,
  },
);


const parsePrices = (referenceCurrency, prices) => {
  const pricesList = objectToArray(prices, referenceCurrency);
  const calcPrices = pricesList.map(coin => calcPriceBy(prices[referenceCurrency], coin));
  return calcPrices.filter(coin => coin.name !== referenceCurrency);
};


const fetchPrices = (referenceCurrency, coins) => {
  const url = 'https://min-api.cryptocompare.com/data/price';

  const config = {
    params: {
      fsym: referenceCurrency,
      tsyms: Object.keys(coins).join(','),
    },
  };

  return cesProvider.get(url, config).then(data => parsePrices(referenceCurrency, data.data));
};

const provider = {
  fetchPrices,
};
export default provider;
