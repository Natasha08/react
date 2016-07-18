import React from "react";
import {expect} from "chai";
import setup from '../setup';
import {logger} from "react-logger";
import TestUtilsHelper from '../helpers/test_utils_helper';
import { findDOMNode } from 'react-dom';

const Spa = require('../../src/js/pages/Layout');

describe('My first react test', function() {
  it('works on something...', function() {
    var test = 1;
    expect(test).to.eql(1);
    console.log(test);
    console.log(Spa);
  })
})
