import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import testHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';
import Layout from '../../src/js/pages/Layout';
import sinon from 'sinon';
import store from '../../src/js/store';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

describe('Routing', function() {
  context('test', function () {
    testHelper.enzymeRender((
      <Layout />
    ), { rendering: 'mount'});

    it('renders Home on app load', function () {
      expect(this.wrapper.text()).to.contain('Home');
    });

    it('Navigates to Tags Page', function () {
      // let button = this.wrapper.find('a').last();
      // console.log("TAGS_BUTTON_LOG", button.debug());
      // button.simulate('click');

      // console.log("BURGER_MENU_LOG", this.wrapper.debug());
       expect(this.wrapper.text()).to.contain('Tags');
    });
    it('Navigates to Todos Page', function () {
      // let button = this.wrapper.find('button').last();
      // console.log("WRAPPER_LOG", button.debug());
    });
  });
});
