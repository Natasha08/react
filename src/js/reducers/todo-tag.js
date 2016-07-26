import composeReducer from '../../lib/compose-reducer';

export default composeReducer({
  DEFAULT: {},

  SYNC_TODO_TAG: function(state, action) {
    return Object.assign({id: action.id}, state, _.pick(action,
      'externalId', 'tag_ExternalId', 'todo_ExternalId', 'persisted'));
  },

  ADD_TODO_TAG: function(state, action) {
    return _.pick(action, 'id', 'todo_id', 'tag_id', 'externalId', 'tag_ExternalId', 'todo_ExternalId', 'persisted');
  },

  EDIT_TODO_TAG: function(state, action) {
    if (state.id != action.id) {
      return state;
    }

    return Object.assign({persisted: false}, state, _.pick(action,
      'id', 'todo_id', 'tag_id', 'externalId', 'tag_ExternalId', 'todo_ExternalId', 'persisted'));
  }
});
