import cesProvider from '@/lib/ces-provider/index';

const crytoCurrencyObject = (shortname, coins, prices, referenceCurrency) => ({
  shortname,
  name: coins[shortname],
  price: prices[shortname],
  currency: referenceCurrency,
});

const calcPriceBy = (referenceCurrencyPrice, coin) => referenceCurrencyPrice / coin.price;

const coinWithPrice = (coin, referenceCurrencyPrice) => Object.assign(
  {},
  coin,
  { price: calcPriceBy(referenceCurrencyPrice, coin) },
);

const coinIsReferenceCurrency = (coin, referenceCurrency) => coin.shortname === referenceCurrency;


const parsePrices = (referenceCurrency, prices, coins) => {
  const calcPrices = Object.keys(prices)
    .map(shortname => crytoCurrencyObject(shortname, coins, prices, referenceCurrency))
    .filter(coin => !coinIsReferenceCurrency(coin, referenceCurrency))
    .map(coin => coinWithPrice(coin, prices[referenceCurrency]));

  return calcPrices;
};


const fetchPrices = (referenceCurrency, coins) => {
  const url = 'https://min-api.cryptocompare.com/data/price';

  const config = {
    params: {
      fsym: referenceCurrency,
      tsyms: Object.keys(coins).join(','),
    },
  };

  return cesProvider.get(url, config)
    .then(data => parsePrices(referenceCurrency, data.data, coins));
};

const provider = {
  fetchPrices,
};
export default provider;
