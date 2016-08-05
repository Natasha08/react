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
      let onInputStub = sinon.spy();

      let wrapper = mount(<TodoList onInput={onInputStub} />);
      let Input = wrapper.find('input[type="text"]');
      let evt = {target: {value: 'shopping'}};
      Input.simulate('change', 'shopping');
      Input.simulate('keyDown', {keyCode: 13});
      // expect(onInputStub.called).to.be.true;
    });
  });
});


















      // console.log("TODOS_LOG", store.dispatch(TodoActions.create('shopping')));
      // let onInputStub = sinon.spy();
      // let inputField = wrapper.find('input').first();

      // let event2 = {target: {value: 'working out'}};

      // console.log("INPUTFIELD CHANGE", );
      //wrapper.simulate('change', event1)
      //wrapper.simulate('change', event2);
      // assert.equal(onInputStub.calledTwice, true);
