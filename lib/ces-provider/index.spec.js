/* eslint-disable */
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import cesProvider from './index';
import sinon from 'sinon';
import axios from 'axios';


describe('ces provider', () => {
  beforeEach(() => {
    sinon.stub(axios,'get');
  })
  afterEach( () => {
    axios.get.restore();
  });
  it('should request data', done => {
    const expectedData = {
      gretting: 'Hello'
    }

    axios.get.resolves(expectedData);

    cesProvider.get("/some/url").then((data) => {
      expect(data).to.be.deep.equal(expectedData);
      done();
    }).catch(e=> {
      done(new Error(`Error on request ${e}`));
    });
  });
  it('should handle errors', done => {
    axios.get.rejects('rejected error');

    cesProvider.get("/some/url").then((data) => {
      done(new Error('Error not rejected'))
    }).catch(e=> {
      expect(e.name).to.be.equal('rejected error');
      done()
    });
  });
});
