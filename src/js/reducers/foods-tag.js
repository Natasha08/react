import food_tag from './food-tag';

import { byExternalIdInSet } from '../reducers/helpers/sync';

export default function(state = {food_tag:  {}}, action) {
  switch(action.type) {
    case 'SYNC':
      let stateExternalIds = _.map(state, 'externalId');
      let newFoods = _.reject(action.foods, byExternalIdInSet(stateExternalIds));

      return _.map(_.flatten([state, newTodos]), t => {
        let newAction = Object.assign({type: 'SYNC_FOOD'},
          t.externalId ? _.find(action.foods, _.pick(t, 'externalId')) : undefined
        );
        return food(t, newAction);
      });
    case 'ADD_FOOD':
      return [...state, food_tag(undefined, action)];
    case 'TOGGLE_FOOD':
      return state.map(t => food_tag(t, action));
    case 'EDIT_FOOD':
      return state.map(t => food_tag(t, action));
    default:
      return state;
  }
}
// import composeReducer from '../../lib/compose-reducer';
// import foodTag from '../reducers/food-tag';
// import { byExternalIdInSet } from '../reducers/helpers/sync';
//
// export default composeReducer({
//   DEFAULT: [],
//   'SYNC': function(state, action) {
//     let stateExternalIds = _.map(state, 'externalId');
//     let newFoodTags = _.reject(action.foods, byExternalIdInSet(stateExternalIds));
//
//     return _.map(_.flatten([state, newTodoTags]), t => {
//       let newAction = Object.assign({type: 'SYNC_FOOD_TAG'},
//         t.externalId ? _.find(action.foods, _.pick(t,   'externalId')) : undefined
//       );
//       return todoTag(t, newAction);
//     });
//   },
//   'ADD_FOOD_TAG': function(state, action) {
//     return [...state, food_tag(undefined, action)];
//   },
//
//   'EDIT_FOOD_TAG': function(state, action) {
//     return state.map(t => food_tag(t, action));
//   }
// });
