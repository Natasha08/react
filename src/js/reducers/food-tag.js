import composeReducer from '../../lib/compose-reducer';

export default composeReducer({
  DEFAULT: {},

  SYNC_FOOD_TAG: function(state, action) {
    return Object.assign({id: action.id}, state, _.pick(action,
      'externalId', 'tag_ExternalId', 'food_ExternalId', 'persisted'));
  },

  ADD_FOOD_TAG: function(state, action) {
    return _.pick(action, 'id', 'food_id', 'tag_id', 'externalId', 'tag_ExternalId', 'food_ExternalId', 'persisted');
  },

  EDIT_FOOD_TAG: function(state, action) {
    if (state.id != action.id) {
      return state;
    }

    return Object.assign({persisted: false}, state, _.pick(action,
      'id', 'food_id', 'tag_id', 'externalId', 'tag_ExternalId', 'food_ExternalId', 'persisted'));
  }
});
