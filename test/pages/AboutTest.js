import { shallow, mount } from 'enzyme';
import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import { enzymeRender } from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';
import About from '../../src/js/pages/About';
import sinon from 'sinon';

describe('About Page', function() {
  context('test', function () {
    let wrapper = mount(<About />);
    it('renders About child', function () {
      expect(wrapper.text()).to.contain('About Page');
    });
  });
});
