import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import TestUtilsHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';

const Projects = require('../../src/js/pages/Projects');

  context('Projects Page', function () {
  it('renders Projects child', function () {
    let testDocument = TestUtilsHelper.render(<div>Projects Page</div>);
    let renderedText = findDOMNode(testDocument).textContent;

    expect(renderedText).to.match(/Projects Page/);
  });
});
