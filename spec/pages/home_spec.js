import React from "react";
import { shallow, mount } from 'enzyme';
import {expect} from "chai";
import Home from '../../src/pages/Home';
import setup from '../setup';


describe('Home Page', function() {
  context('test', function () {
    let wrapper = mount(<Home />);
    it('renders Home child', function () {
      expect(wrapper.text()).to.contain('Home Page');
    });
  });
});
