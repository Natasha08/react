import _ from 'lodash-uuid';

export default {
  create: function({text, todo_id, tag_id}) {
    if ( _.isEmpty(text) || _.isEmpty(todo_id)) {
      return new Function();
    }

    let todo_tag_id = _.uuid();

    return function(dispatch, getState) {

      if (!tag_id) {
        tag_id = _.uuid();
        dispatch({text, id: tag_id, type: 'ADD_TAG'});
      }

      dispatch({id: todo_tag_id, type: 'ADD_TODO_TAG', tag_id, todo_id, text});
    }
  }
}
