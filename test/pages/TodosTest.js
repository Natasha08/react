import { shallow, mount } from 'enzyme';
import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import { enzymeRender } from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';
import Todos from '../../src/js/pages/Todos';
import TodoList from '../../src/js/components/todo-list';
import sinon from 'sinon';
import store from '../../src/js/store';
import TodoActions from '../../src/js/actions/todo';

describe('Todos Page', function() {
  context('test', function () {
    let Wrapper = mount(<Todos />);

    it('renders Todos child', function () {
      expect(Wrapper.text()).to.contain('Todos Page');
    });

    it('Simulates an input event', function () {
      let storeDispatchSpy = sinon.stub(store, 'dispatch');

      let wrapper = mount(<TodoList />);
      let Input = wrapper.find('input[type="text"]');
      let evt = {target: {value: 'shopping'}};
      Input.simulate('blur', evt);  // have to use the wrapper...
      expect(storeDispatchSpy.callCount).to.eq(1);
    });
  });
});
