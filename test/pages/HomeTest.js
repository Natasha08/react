import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import TestUtilsHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';

const Home = require('../../src/js/pages/Home');

  context('Home Page', function () {
  it('renders Home child', function () {
    let testDocument = TestUtilsHelper.render(<div>Home Page</div>);
    let renderedText = findDOMNode(testDocument).textContent;

    expect(renderedText).to.match(/Home Page/);
  });
});
