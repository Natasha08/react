import React from "react";
import {expect} from "chai";
import setup from '../setup';
// import {logger} from "react-logger";
import testHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';
// import Todos from '../../src/pages/Todos';
import sinon from 'sinon';
// import store from '../../src/store';

describe('Todos Page', function() {
  context('test', function () {
    // testHelper.enzymeRender((
    //   <Todos />
    // ), { rendering: 'mount'});

    it('renders Todos child', function () {
      // expect(this.wrapper.text()).to.contain('Todos Page');
    });

    it('Simulates an input event', function () {
      // let storeDispatchSpy = sinon.stub(store, 'dispatch');
      // let Input = this.wrapper.find('input[type="text"]');
      // let evt = {target: {value: 'shopping'}};
      // Input.simulate('blur', evt);
      //
      // expect(storeDispatchSpy.callCount).to.eq(1);
    });
  });
});
