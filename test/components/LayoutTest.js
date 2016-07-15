import React from "react";
import {expect} from "chai";
import setup from '../setup';
import Layout from '../../src/js/components/Layout';
import {logger} from "react-logger";

describe('My first react test', function() {
  it('works on something...', function() {
    var test = 1;
    expect(test).to.eql(1);
    console.log(test);
  })
})
