import composeReducer from 'compose-reducer';

export default composeReducer({
  'SET_PAGE': function(state = {}, action) {
    return action.name;
    // return Object.assign({name: action.name}, state);
    // return {...state, name: action.name}
  },
  DEFAULT: {}
})
