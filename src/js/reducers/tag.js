import _ from 'lodash';
import composeReducer from 'compose-reducer';

export default composeReducer({
  SYNC_TAG: function(state, action) {
    return Object.assign({id: action.id}, state, _.pick(action, 'externalId', 'text', 'persisted'));
  },

  ADD_TAG: function(state, action) {
    return Object.assign({completed: false}, _.pick(action, 'id', 'text', 'externalId'));
  },

  EDIT_TAG: function(state, action) {
    if (state.id != action.id) {
      return state;
    }

    return Object.assign({}, state, {persisted: false}, _.pick(action, 'externalId', 'text', 'persisted'));
  },

  DEFAULT: {}
});
