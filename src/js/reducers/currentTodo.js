import composeReducer from '../../lib/compose-reducer';

export default composeReducer({
  SET_CURRENT: function(state = [], action) {
    return Object.assign({id: action.id}, _.pick(action, 'id', 'text'));
  },
    DEFAULT: {}
});
// export default composeReducer({
//   SYNC_TODO: function(state, action) {
//     return Object.assign({id: action.id}, state, _.pick(action, 'externalId', 'text', 'completed', 'persisted'));
//   },
//
//
//

// });
