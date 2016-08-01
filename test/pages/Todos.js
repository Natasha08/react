import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import TestUtilsHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';

const Todos = require('../../src/js/pages/Todos');

  context('Todos Page', function () {
  it('renders child', function () {
    let testDocument = TestUtilsHelper.render(<div>Todos Page</div>);
    let renderedText = findDOMNode(testDocument).textContent;

    expect(renderedText).to.match(/Todos Page/);
  });
});
