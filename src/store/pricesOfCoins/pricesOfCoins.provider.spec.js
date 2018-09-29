import { expect } from 'chai';
import sinon from 'sinon';

import cesProvider from '@/lib/ces-provider/index';

import pricesOfCoinsProvider from './pricesOfCoins.provider';

/* global describe, beforeEach, afterEach, it */
describe('prices of coins provider', () => {
  beforeEach(() => {
    sinon.stub(cesProvider, 'get');
  });
  afterEach(() => {
    cesProvider.get.restore();
  });
  it('should  parse the response data', (done) => {
    const apiData = {
      data: {
        EUR: 1,
        BTC: 0.0001768,
        ETH: 0.005015,
        XRP: 2.04,
        EOS: 0.2034,
        BCH: 0.002144,
        XLM: 4.54,
        LTC: 0.01884,
        ETC: 0.1022,
        QTUM: 0.3151,
        ZEC: 0.008653,
      },
    };

    const currencies = {

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
    };

    const expectedData = [{
      shortname: 'BTC', name: 'Bitcoin', price: 5656.108597285068, currency: 'EUR',
    }, {
      shortname: 'ETH', name: 'Etherium', price: 199.40179461615153, currency: 'EUR',
    }, {
      shortname: 'XRP', name: 'XRP', price: 0.49019607843137253, currency: 'EUR',
    }, {
      shortname: 'EOS', name: 'EOS', price: 4.916420845624385, currency: 'EUR',
    }, {
      shortname: 'BCH', name: 'Bitcoin cash', price: 466.4179104477612, currency: 'EUR',
    }, {
      shortname: 'XLM', name: 'Stellar', price: 0.22026431718061673, currency: 'EUR',
    }, {
      shortname: 'LTC', name: 'Litecoin', price: 53.07855626326964, currency: 'EUR',
    }, {
      shortname: 'ETC', name: 'Ethereum Classic', price: 9.784735812133073, currency: 'EUR',
    }, {
      shortname: 'QTUM', name: 'QTUM', price: 3.17359568390987, currency: 'EUR',
    }, {
      shortname: 'ZEC', name: 'ZCash', price: 115.56685542586388, currency: 'EUR',
    }];

    cesProvider.get.resolves(apiData);

    pricesOfCoinsProvider.fetchPrices('EUR', currencies).then((data) => {
      expect(data).to.be.deep.equal(expectedData);
      done();
    }).catch((e) => {
      done(new Error(e.stack));
    });
  });
});
