
import composeReducer from '../../lib/compose-reducer';
import foodTag from '../reducers/food-tag';
import { byExternalIdInSet } from './helpers/sync';

export default composeReducer({
  DEFAULT: [],
  'SYNC': function(state, action) {
    let stateExternalIds = _.map(state, 'externalId');
    let newFoodTags = _.reject(action.foodTags, byExternalIdInSet(stateExternalIds));

    return _.map(_.flatten([state, newFoodTags]), t => {
      let newAction = Object.assign({type: 'SYNC_FOOD_TAG'},
        t.externalId ? _.find(action.foodTags, _.pick(t, 'externalId')) : undefined
      );
      return foodTag(t, newAction);
    });
  },
  'ADD_FOOD_TAG': function(state, action) {
    return [...state, foodTag(undefined, action)];
  },

  'EDIT_FOOD_TAG': function(state, action) {
    return state.map(t => foodTag(t, action));
  }
});
