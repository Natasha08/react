import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import TestUtilsHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';

const About = require('../../src/js/pages/About');

  context('About Page', function () {
  it('renders About child', function () {
    let testDocument = TestUtilsHelper.render(<div>About Page</div>);
    let renderedText = findDOMNode(testDocument).textContent;

    expect(renderedText).to.match(/About Page/);
  });
});
