export default function composeReducer(mapping) {
  function reducer(state, action) {
    let currentState = state;

    if(mapping.DEFAULT && state === undefined) {
      currentState = _.result(mapping, 'DEFAULT');
    }

    if (_.isFunction(mapping[action.type])) {
      return mapping[action.type](currentState, action);
    }

    return currentState;
  };

  let actions = _.without(_.keys(mapping), 'DEFAULT');
  reducer.actions = _.assign.apply(null, actions.map(k => ({[k]: k})));

  return reducer;
};
