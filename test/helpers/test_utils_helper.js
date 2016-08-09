var enzyme = require('enzyme');
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import store from '../../src/js/store';
import React from "react";
import _ from 'lodash';

export default {
  findByClass: TestUtils.findRenderedDOMComponentWithClass,
  findByTag: TestUtils.findRenderedDOMComponentWithTag,
  render: TestUtils.renderIntoDocument,
  simChange: TestUtils.Simulate.change,
  simKeyDown: TestUtils.Simulate.keyDown,
  simClick: TestUtils.Simulate.click,
  scryByClass: TestUtils.scryRenderedDOMComponentsWithClass,

  renderComponent: function(component) {
    beforeEach(function() {
      this.selectDOM = () => ReactDom.findDOMNode(this.component)
      this.component = TestUtils.renderIntoDocument(component);
    });
  },

  enzymeRender: function(component, options = {}) {
    let {rendering = 'shallow'} = options;

    beforeEach(function() {
      if (_.isFunction(enzyme[rendering])) {
        return this.wrapper = enzyme[rendering](component);
      }
    });
  },

  DumbStatefulComponent: React.createClass({
    render: function() {
      return (
        <div>
          { this.props.children }
        </div>
      );
    }
  }),

  define: function(name, func) {
    beforeEach(function() {
      this[name] = func.bind(this);
    });
  },

  setState: function(state) {
    beforeEach(function () {
      if (this.store) {
        this.store.restore();
      }
      this.store = {
        getState: this.sinon.stub(store, 'getState').returns(state),
        dispatch: this.sinon.stub(store, 'dispatch'),
        restore: function() {
          this.getState.restore();
          this.dispatch.restore();
        }
      };
    });
  }
};
