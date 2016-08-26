import composeReducer from 'compose-reducer';

export default composeReducer({

  SET_CURRENT: function(state, action) {
   return Object.assign({id: action.id}, _.pick(action, 'id', 'model_type'));
  },

  DEFAULT: {id: 'NO Current Object'}
});
