import food_id from './food';

import { byExternalIdInSet } from '../reducers/helpers/sync';

export default function(state = {food_id:  {}}, action) {
  switch(action.type) {
    case 'SYNC':
      let stateExternalIds = _.map(state, 'externalId');
      let newFoods = _.reject(action.food_ids, byExternalIdInSet(stateExternalIds));

      return _.map(_.flatten([state, newTodos]), t => {
        let newAction = Object.assign({type: 'SYNC_FOOD'},
          t.externalId ? _.find(action.food_ids, _.pick(t, 'externalId')) : undefined
        );
        return food(t, newAction);
      });
    case 'ADD_FOOD':
      return [...state, food_id(undefined, action)];
    case 'TOGGLE_FOOD':
      return state.map(t => food_id(t, action));
    case 'EDIT_FOOD':
      return state.map(t => food_id(t, action));
    default:
      return state;
  }
}
