import _ from 'lodash-uuid';
import React from 'react';

export default {
  create: function(text) {
    if ( _.isEmpty(text) ) { return new Function() }

    let current_id = _.uuid();
    return {
      type: 'ADD_TAG',
      text,
      id: current_id
    };
  },

  update: function(id, fields) {
    return Object.assign({}, fields, {
      id: id, type: 'EDIT_TAG'
    });
  }
}
