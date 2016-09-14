import React from "react";
import { shallow, mount } from 'enzyme';
import {expect} from "chai";
import About from 'pages/About';
import setup from '../setup';

describe('About Page', function() {
  context('test', function () {
    let wrapper = mount(<About />);
    it('renders About child', function () {
      expect(wrapper.text()).to.contain('About Page');
    });
  });
});
