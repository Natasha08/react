import _ from 'lodash';
import composeReducer from 'compose-reducer';

export default composeReducer({
  SYNC_TODO: function(state, action) {
    return Object.assign({id: action.id}, state, _.pick(action, 'externalId', 'text', 'completed', 'persisted'));
  },

  ADD_TODO: function(state, action) {
        console.log("TODO_REDUCER_LOG", "I AM REACHING HERE!");
    return Object.assign({completed: false}, _.pick(action, 'id', 'text', 'externalId', 'completed'));
  },

  TOGGLE_TODO: function(state, action) {
    if (state.id != action.id) {
      return state;
    }

    return Object.assign({}, state, {
      completed: !state.completed
    });
  },

  EDIT_TODO: function(state, action) {
    if (state.id != action.id) {
      return state;
    }

    return Object.assign({}, state, {persisted: false}, _.pick(action, 'externalId', 'text', 'completed', 'persisted'));
  },

  DEFAULT: {}
});
