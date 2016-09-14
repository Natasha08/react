import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import testHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';
import Layout from '../../src/pages/Layout';
import sinon from 'sinon';
import store from '../../src/store';
import {Router, createMemoryHistory, browserHistory} from "react-router";
var Menu = require('react-burger-menu').slide
const history = createMemoryHistory("/todos");

describe('Routing', function() {
  context('test', function () {
    testHelper.enzymeRender(( <Layout /> ), { rendering: 'mount'});

    it('renders child routes', function () {
      expect(this.wrapper.text()).to.contain('Home');
      expect(this.wrapper.text()).to.contain('Todos');
      expect(this.wrapper.text()).to.contain('Tags');
      expect(this.wrapper.text()).not.to.contain('TodoTags');
      // console.log(this.wrapper.find('.bm-burger-button').debug());
    });
    it('renders burger-menu button', function () {
      let target = this.wrapper.find('.bm-burger-button');
      target.find('button').simulate('click');
      let menuNode = this.wrapper.find(Menu);
      // todoButton.simulate('click');
      // console.log("TODOS_LOG", menuNode.find('.menu-item').map(node => node.text()));
      console.log("GETTING_BUTTONS_LOG", browserHistory);
    });
  });
});
