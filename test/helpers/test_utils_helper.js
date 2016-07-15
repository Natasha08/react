import TestUtils from 'react-addons-test-utils';

let HelperMethods = {
  findByClass: TestUtils.findRenderedDOMComponentWithClass,
  findByTag: TestUtils.findRenderedDOMComponentWithTag,
  render: TestUtils.renderIntoDocument,
  simChange: TestUtils.Simulate.change,
  simKeyDown: TestUtils.Simulate.keyDown,
  simClick: TestUtils.Simulate.click,
  scryByClass: TestUtils.scryRenderedDOMComponentsWithClass
};

module.exports = HelperMethods;
