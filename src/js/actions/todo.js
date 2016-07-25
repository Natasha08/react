import _ from 'lodash-uuid';

export default {
  create: function(text) {
    if ( _.isEmpty(text) ) { return new Function(); }

    let current_id = _.uuid();
    return {text, id: current_id, type: 'ADD_TODO'};
  },

  toggle: function(id) {
    return {id, type: 'TOGGLE_TODO'};
  },

  update: function(id, fields) {
    return Object.assign({}, fields, {
      id: id, type: 'EDIT_TODO'
    });
  },

  setCurrent: function(id) {
    if(id) {
      return {
        type: 'SET_CURRENT',
        model_type: 'Todo',
        id: id
      };
    } else {
      return {
        type: 'SET_CURRENT',
        model_type: undefined,
        id: null
      }
    }
  }
}
