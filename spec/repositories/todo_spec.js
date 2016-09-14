"use strict";
var expect = require('chai').expect;
import sinon from "sinon";
import repository from "../../src/repositories/todo"

describe('es6 promises', function() {
  context("Stubbing the Api Call: create", function() {
    let  result = { data: "some external data" };
    sinon.stub(repository, 'create').returns(Promise.resolve(result));

    let myPromise = repository.create();

    it("checks if myPromise is defined", function () {
      expect(myPromise).not.be.undefined;
    });

    it("gets the resolved data from myPromise", function () {
      return myPromise.then(function(data){
               expect(data).to.eql( { data: "some external data" } );
             });
    });
  });
  context("Stubbing the Api Call: fetch", function() {
    let  result = { data: "some external data" };
    sinon.stub(repository, 'fetch').returns(Promise.resolve(result));

    let myPromise = repository.fetch();

    it("checks if myPromise is defined", function () {
      expect(myPromise).not.be.undefined;
    });

    it("gets the resolved data from myPromise", function () {
      return myPromise.then(function(data){
               expect(data).to.eql( { data: "some external data" } );
             });
    });
  });
});
