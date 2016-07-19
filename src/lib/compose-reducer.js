import _ from 'lodash';

export default function(mapping={}) {
  let actionHandlers = _.pick(mapping, _.functions(mapping));
  actionHandlers['DEFAULT'] = _.partial(_.result, mapping, 'DEFAULT');

  let resolvedState = function(state, index) {
    return (index ? _.property(index)(state) : state) || _.result(actionHandlers,'DEFAULT');
  };

  return function(state = actionHandlers.DEFAULT(), action, index) {
    if (_.isFunction(actionHandlers[action.type])) {
      let newState = _.invoke(actionHandlers, action.type, state, action);
      return newState || _.result(actionHandlers, 'DEFAULT');
    }
    return resolvedState(state, index);
  }
}
