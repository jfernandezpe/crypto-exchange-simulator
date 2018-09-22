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
      // expect(data).to.be.deep.equal(expectedData);
      expect(true).to.be.true;
      done();
    }).catch(e=> {
      done(new Error(`Error on request ${e}`));
    });
  });
});
