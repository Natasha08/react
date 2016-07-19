import _ from 'lodash';
import composeReducer from 'lib/compose-reducer';

export default composeReducer({
  SYNC_FOOD: function(state, action) {
    return Object.assign({id: action.id}, state, _.pick(action, 'externalId', 'text', 'completed', 'persisted'));
  },

  ADD_FOOD: function(state, action) {
    return Object.assign({completed: false}, _.pick(action, 'id', 'text', 'externalId', 'completed'));
  },

  TOGGLE_FOOD: function(state, action) {
    if (state.id != action.id) {
      return state;
    }

    return Object.assign({}, state, {
      completed: !state.completed
    });
  },

  EDIT_FOOD: function(state, action) {
    if (state.id != action.id) {
      return state;
    }

    return Object.assign({}, state, {persisted: false}, _.pick(action, 'externalId', 'text', 'completed', 'persisted'));
  },

  DEFAULT: {}
});
