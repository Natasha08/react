import _ from 'lodash-uuid';

export default {
  create: function({text}) {
    if ( _.isEmpty(text)) {
      return new Function();
    }

    let food_tag_id = _.uuid();

    return {id: food_tag_id, type: 'ADD_FOOD_TAG', text};
  }
}

// export default {
//   create: function({text, food_id, tag_id}) {
//     if ( _.isEmpty(text) || _.isEmpty(food_id)) {
//       return new Function();
//     }
//
//     let food_tag_id = _.uuid();
//
//     return function(dispatch, getState) {
//
//       if (!tag_id) {
//         tag_id = _.uuid();
//         dispatch({text, id: tag_id, type: 'ADD_TAG'});
//       }
//
//       dispatch({id: food_tag_id, type: 'ADD_FOOD_TAG', tag_id, food_id, text});
//     }
//   }
// }
