import _ from 'lodash';

export default {
  create: function(text) {
    if ( _.isEmpty(text) ) { return new Function() }

    let current_id = _.uuid();
    return {text, id: current_id, type: 'ADD_TAG'};
  },

  update: function(id, fields) {
    return Object.assign({}, fields, {
      id: id, type: 'EDIT_TAG'
    });
  }
}
