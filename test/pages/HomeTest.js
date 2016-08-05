import { shallow, mount } from 'enzyme';
import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import { enzymeRender } from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';
import Home from '../../src/js/pages/Home';
import sinon from 'sinon';

describe('Home Page', function() {
  context('test', function () {
    let wrapper = mount(<Home />);
    it('renders Home child', function () {
      expect(wrapper.text()).to.contain('Home Page');
    });
  });
});
